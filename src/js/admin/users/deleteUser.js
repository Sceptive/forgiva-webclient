import React from 'reactn'
import {ErrorField, Modal} from '../../components'
import {  PostAdminUserRemoveRequest } from '../../api/src'
import global_data from '../../global'

export default props => {

	let [error, setError] = React.useState(null)
	let [deleting, setDeleting] = React.useState(false)
	let [modal, setModal] = React.useGlobal("modal")

	let deleteUser = async () => {
		setDeleting(true)
		try{

            let req_nsr 		    = new PostAdminUserRemoveRequest()
            req_nsr.header 		    = global_data.request_header;
            req_nsr.userId          = props.user.userId;
            
            // Get System Information
            global_data.admin_api.postAdminUserRemove({
                'postAdminUserRemoveRequest': req_nsr
            }, (error,operationResult, response) => {


                setDeleting(false);
                if (operationResult.error != null) {
                    setError(operationResult.error);
                } else {
                    props.fUpdateUsers();
                    setModal(null);
                }
    
            });
			
		}catch(e){
			setError(e.message)
		}
	}

	return (<Modal title="Deleting User" action={deleteUser} delete actionName="Delete" close={true}>
				
					<h3 className="panel-message has-text-centered margin-large">
						Are you sure to delete user  “{props.user.userName} ({props.user.fullName})” ?
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