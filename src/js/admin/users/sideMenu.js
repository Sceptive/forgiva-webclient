import React from 'reactn'
import DeleteUserGroup from './deleteUserGroup'
import AddUserGroup from './addUserGroup'
import { PostAdminUsergroupsRequest } from '../../api/src'

import global_data from '../../global'

import FreeScrollBar from 'react-free-scrollbar'


let Group = ({selectedGroup, setSelectedGroup, group}) => {
	let active =  selectedGroup && 
					(selectedGroup.userGroupId === group.userGroupId )
    let hasParent = group.parentUserGroupId != null && group.parentUserGroupId != 0;
	return (<li key={group.userGroupId} className={(active ? " active ":" ")} >
		<a className={(hasParent ? " is-child " : "")}
			onClick={()=>  {setSelectedGroup(group)}}>{group.userGroupName}</a>
	</li> )
}

export default props => {
    let [groups, setGroups] 	            = React.useState(null)
	let [modal, setModal] 					= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 			= React.useGlobal('sideMenu')


    let update_groups = () => {

        let req_nsr 		= new PostAdminUsergroupsRequest();
        req_nsr.header 		= global_data.request_header;

        
        // Get System Information
        global_data.admin_api.postAdminUsergroups({
            'postAdminUsergroupsRequest': req_nsr
        }, (error,postAdminUsergroupsResponse, response) => {

            let groups_ = [];
            if (postAdminUsergroupsResponse.userGroups != null) {
                postAdminUsergroupsResponse.userGroups.forEach(userGroup => {
                    groups_.push(userGroup);
				});


            }

            setGroups(groups_);

            if (groups_.length > 0) {
                props.setSelectedGroup(groups_[0])
            }

        });
    }

	React.useEffect(() => {
		if(groups == null){

            update_groups();

		}
	}, [props.selectedGroup, groups])
	
	if(!sideMenu) return(<> </>)
	else
	return (<div className={"aside level-left"}>
			<FreeScrollBar style={{width: '100%', height: '93%'}}>
				<ul className="menu">		
					{groups && groups.map(x => <Group key={x.userGroupId} group={x} 
					selectedGroup={props.selectedGroup} setSelectedGroup={props.setSelectedGroup} />)}
				</ul>
			</FreeScrollBar>
		<div className="aside-footer">
			<button className="add-button" onClick={() => setModal(<AddUserGroup groups={groups} fUpdateGroups={update_groups}/>) } ></button>
			{props.selectedGroup &&
				<button className="remove-button" 
					onClick={() => setModal(<DeleteUserGroup group={props.selectedGroup} fUpdateGroups={update_groups}/>)}>
				</button>
			}
			<button className="close-menu" onClick={() => setSideMenu(false)}></button>
		</div>
	</div>)
}