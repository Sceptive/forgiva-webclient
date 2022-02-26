import React from 'reactn'
import {ErrorField, Modal} from '../components'
import { PostUserMetadataGroupRemoveRequest, MetadataGroup } from '../api/src'
import global_data from '../global'


export default props => {
	let {group} = props
	let [session, setSession] = React.useGlobal('session')
	let [error, setError] = React.useState(null)
	let [deleting, setDeleting] = React.useState(false)
	let [modal, setModal] = React.useGlobal("modal")

	let deleteGroup = async () => {
		setDeleting(true)
		try{

			let remove_req = new PostUserMetadataGroupRemoveRequest();
			remove_req.header 			= global_data.request_header;
			remove_req.metadataGroupId 	= group.group_id;

			global_data.user_api.postUserMetadataGroupRemove({
					'postUserMetadataGroupRemoveRequest': remove_req
				}, (error,operationResult, response) => {
	
	
					if (operationResult.error != null) {
						setError(operationResult.error);
	
					} else {
						props.fUpdateGroups();
						setModal(null);
					}
		
				});

			setDeleting(false)
			if(res.data.error_message != null){
				setError(res.data.error_message)
			}
			else {
				setModal(null)
			}
		}catch(e){
			setError(e.message)
		}
	}

	return (<Modal title="Deleting Group" 
				action={deleteGroup} delete actionName="Delete" close={true}>
				
					<h3 className="panel-message has-text-centered margin-large">
						Are you sure to delete group “{group.group_name}” contains {group.host_count} hosts?
					</h3>
				
				{deleting && 
					<div className="panel-block">
						<div className="progress">
								<div className="spinner"></div>
						</div>
				</div>
				}
				{error && <ErrorField 
							close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}