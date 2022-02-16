import React from 'reactn'
import {ErrorField, Modal} from '../../components'
import {  PostAdminUsergroupRemoveRequest } from '../../api/src'
import global_data from '../../global'

export default props => {

	let [error, setError] = React.useState(null)
	let [deleting, setDeleting] = React.useState(false)
	let [modal, setModal] = React.useGlobal("modal")

	let deleteGroup = async () => {
		setDeleting(true)
		try{

            let req_nsr 		    = new PostAdminUsergroupRemoveRequest()
            req_nsr.header 		    = global_data.request_header;
            req_nsr.userGroupId     = props.group.userGroupId;
            
            // Get System Information
            global_data.admin_api.postAdminUsergroupRemove({
                'postAdminUsergroupRemoveRequest': req_nsr
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
						Are you sure to delete user group “{props.group.userGroupName}” including all users containing?
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