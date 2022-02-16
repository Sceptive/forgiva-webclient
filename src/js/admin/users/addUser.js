import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider,HiddenInput } from '../../components'
import axios from 'axios'
import { GeneratePassword } from '.';
import global_data from '../../global'
import { User,PostAdminUserAddRequest } from '../../api/src';
import etc from '../../etc'
import fhash from '../../crypto/fhash'
import nacl from '../../crypto/nacl.min'

export default props => {
	let [fullName, setFullName] = React.useState("");
	let [userName, setUserName] = React.useState("")
	let [email,    setEmail]    = React.useState("")
	let [password,   setPassword] 	= React.useState("")
	let [password2,  setPassword2] 	= React.useState("")

	let [error, 		setError] 		= React.useState(null)
	let [adding, 		setAdding] 		= React.useState(false)
	let [updateHost, 	setUpdateHost] 	= React.useGlobal("updateHost")
	let [loading, 		setLoading] 	= React.useState(false)
	let [modal, 		setModal] 		= React.useGlobal("modal")

	React.useEffect(() => {
	
	}, [])


	let canGenerate = password.length > 0 &&  (password === password2) && password != ""
	
	let addUser = () => {
		setAdding(true)
		try {



			// let session_server_public_key  = etc.fg_hex_to_ui8arr(global_data.session_params.sessionPk);
			// let session_client_private_key = global_data.nacl_keys.secretKey;
	
			let password_hash			   = fhash(global_data.session_params.hshAlg,
				etc.fg_hex_to_ui8arr(global_data.session_params.hshSalt),
				etc.fg_str_to_ui8arr(password));
			// let empty_nonce 	= new Uint8Array(24);
			// empty_nonce.fill(0);
			// let nonce_header 	= "00000000000000000000000000000000";

			// crypto_box'ed password
			//let c_password		= nonce_header+etc.fg_ui8arr_to_hex(nacl.box(password_hash,empty_nonce, session_server_public_key, session_client_private_key))
			let c_password		= etc.fg_encrypt_for_session(password_hash);

			console.log("hshAlg   		  : "+global_data.session_params.hshAlg+"\n"
					   +"hshSalt   		  : "+global_data.session_params.hshSalt+"\n"
			);

			



			let req_nsr 		= new  PostAdminUserAddRequest()
            req_nsr.header 		= global_data.request_header;
			req_nsr.userGroupId = props.selectedGroup.userGroupId;
			req_nsr.password  	= c_password;

			let user_ 			= new User();
			user_.fullName		= fullName;
			user_.userName 		= userName;
			user_.email			= email;

			req_nsr.user 		= user_;

            // Get System Information
            global_data.admin_api.postAdminUserAdd({
                'postAdminUserAddRequest': req_nsr
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

	
	return (<Modal title="Add New User" desc="Please enter user details"
		action={() => addUser()} actionName={"Save"} close={true} >
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
			<div className="columns">
				<div className="field column">
					<HiddenInput label="Password" value={password} onChange={setPassword} success={canGenerate} />
				</div>
			</div>
			<div className="columns">
				<div className="field column">
					<HiddenInput label="Password (again)" value={password2} onChange={setPassword2} success={canGenerate} />
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