import React from 'reactn'
import {ErrorField, Modal} from '../components'
import { PostUserMetadataGroupRemoveRequest } from '../api/src'
import global_data from '../global'

export default props => {

	let [error, setError] = React.useState(null)
	let [deleting, setDeleting] = React.useState(false)
	let [modal, setModal] = React.useGlobal("modal")

	let deleteGroup = async () => {
		setDeleting(true)
		try{

            let req_nsr 		    = new PostUserMetadataGroupRemoveRequest()
            req_nsr.header 		    = global_data.request_header;
            req_nsr.metadataGroupId = props.group.groupId;
            
            //Remove User Metadata Group
            global_data.user_api.postUserMetadataGroupRemove({
                'postUserMetadataGroupRemoveRequest': req_nsr
            }, (error,operationResult, response) => {


                setDeleting(false);
                if (operationResult.error != null) {
                    setError(operationResult.error);
                } else {
                    props.fUpdateGroups();
                    setModal(null);
                }
    
            });
			
		}catch(e){
			setError(e.message)
		}
	}

	return (<Modal title="Deleting Group" action={deleteGroup} delete actionName="Delete" close={true}>
				
					<h3 className="panel-message has-text-centered margin-large">
						Are you sure to delete group “{props.group.groupName}” including all hosts containing?
					</h3>
				
				{deleting && 
					<div className="panel-block">
						<div className="progress">
								<div className="spinner"></div>
						</div>
				</div>
				}
				{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}