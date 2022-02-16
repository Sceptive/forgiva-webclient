import React from 'reactn'
import axios from 'axios'
import AddMetadataGroup from './addMetadataGroup'
import DeleteMetadataGroup from './deleteMetadataGroup'
import { PostUserMetadataGroupsRequest } from '../api/src'
import global_data from '../global'


let Group = ({selectedGroup, setSelectedGroup, group}) => {
	let active =  selectedGroup && 
					(selectedGroup.groupId === group.groupId )
    let hasParent = group.parentGroupId != null && group.parentGroupId != 0;
	return (<li key={group.groupId} className={(active ? " active ":" ")} >
		<a className={(hasParent ? " is-child " : "")}
			onClick={()=>  {setSelectedGroup(group)}}>{group.groupName}</a>
	</li> )
}
export default props => {
	let [groups, setGroups] 	            = React.useState(null)
	let {selectedGroup, setSelectedGroup} 	= props
	let [modal, setModal] 					= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 			= React.useGlobal('sideMenu')


	
	let update_groups = () => {

        let req_nsr 		= new PostUserMetadataGroupsRequest();
        req_nsr.header 		= global_data.request_header;

        global_data.user_api.postUserMetadataGroups({
            'postUserMetadataGroupsRequest': req_nsr
        }, (error,postUserMetadataGroupsResponse, response) => {

			let groups_ = [];
			
			//MetadataGroup
            if (postUserMetadataGroupsResponse.groups != null) {
                postUserMetadataGroupsResponse.groups.forEach(metadataGroup => {
                    groups_.push(metadataGroup);
                });


            }

            setGroups(groups_);

            if (groups_.length > 0) {
                setSelectedGroup(groups_[0])
            }

        });
    }

	React.useEffect(() => {
		if (groups == null) {
			update_groups();
		}
	}, [props.selectedGroup, groups])
	

	
	if(!sideMenu) return(<> </>)
	else
	return (<div className={"aside level-left"}>
		<ul className="menu">
			{groups && groups.map(x => <Group key={x.groupId} group={x} 
				selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />)}
		</ul>
		<div className="aside-footer">
			<button className="add-button" onClick={() => setModal(<AddMetadataGroup groups={groups} fUpdateGroups={update_groups}/>) } ></button>
			{selectedGroup &&
				<button className="remove-button" 
					onClick={() => setModal(<DeleteMetadataGroup group={selectedGroup} fUpdateGroups={update_groups} />)}>
				</button>
			}
			<button className="close-menu" onClick={() => setSideMenu(false)}></button>
		</div>
	</div>)
}