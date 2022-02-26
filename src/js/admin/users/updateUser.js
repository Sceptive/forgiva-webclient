import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider,HiddenInput } from '../../components'
import global_data from '../../global'
import { User,PostAdminUserUpdateRequest } from '../../api/src';


export default props => {
	let [fullName, setFullName] = React.useState(props.user.fullName);
	let [userName, setUserName] = React.useState(props.user.userName)
	let [email,    setEmail]    = React.useState(props.user.email)

	let [error, 		setError] 		= React.useState(null)
	let [adding, 		setAdding] 		= React.useState(false)
	let [loading, 		setLoading] 	= React.useState(false)
	let [modal, 		setModal] 		= React.useGlobal("modal")

	React.useEffect(() => {
       
	}, [])


	
	let updateUser = () => {
		setAdding(true)
		try {

			let req_nsr 		= new  PostAdminUserUpdateRequest();
            req_nsr.header 		= global_data.request_header;

			let user_ 			= new User();
			user_.fullName		= fullName;
			user_.userName 		= userName;
            user_.email			= email;
            user_.userId        = props.user.userId;

			req_nsr.user 		= user_;

            // Update user information
            global_data.admin_api.postAdminUserUpdate({
                'postAdminUserUpdateRequest': req_nsr
            }, (error,operationResult, response) => {

				setAdding(false);
				if (operationResult.error != null) {
					setError(operationResult.error)
				}
				else {
					setModal(null);
					props.fUpdateUsers();
				}
			});
			
		
		} catch (e) {
			setError(e.message)
		}
	}

	
	return (<Modal title="Update User" desc="Please enter user details"
		action={() => updateUser()} actionName={"Update"} close={true} >
		{!loading && <>
			<div className="columns">
				<div className="field column">
					<label className="label">Full Name</label>
					<div className="control">
						<input className="input" value={fullName}
							onChange={e => setFullName(e.target.value)} />
					</div>
				</div>
				
			</div>
			<div className="columns">
				<div className="field column">
					<label className="label">User Name</label>
					<div className="control">
						<input className="input" value={userName}
							onChange={e => setUserName(e.target.value)} />
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="field column">
					<label className="label">E-Mail</label>
					<div className="control">
						<input className="input" value={email}
							onChange={e => setEmail(e.target.value)} />
					</div>
				</div>
			</div>		
		
		</>
		}
		{(adding || loading) &&
			<div className="panel-block">
				<div className="progress">
					<div className="spinner"></div>
				</div>
			</div>
		}
		{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}