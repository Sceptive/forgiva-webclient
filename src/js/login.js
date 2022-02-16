import React 	from 'reactn'
import ReactDom from 'react-dom'
import logoImg 	from '../img/logo.png'
import {DefaultApi, PostNewSessionRequest, ApiClient, PostNewSessionResponse, Header, PostLoginRequest} from './api/src/index'
import fhash from './crypto/fhash'
import global_data from './global'
import etc from './etc'
import { split32 } from './crypto/sm3/utils'
import nacl from './crypto/nacl.min'
import Home from './home';
import AdminHome from './admin'



let Logo = ()=> <img src={logoImg} alt="sceptive" />

export default props => {
	let [modal, setModal] 						= React.useGlobal("modal")
	let [isLoggingIn, setIsLoggingIn]			= React.useState(false)
    // const [inputRef, setInputFocus] = useFocus()

	let [error, 		setError]				= React.useState(null);
	let [requires2fa,	setRequires2fa]			= React.useState(false);
	let [username, 		setUsername] 			= React.useState('');
	let [password, 		setPassword] 			= React.useState('');
	let [loginOverLdap, setLoginOverLdap] 		= React.useState(true)


	let login = async () => {

		let session_server_public_key  = etc.fg_hex_to_ui8arr(global_data.session_params.sessionPk);
		let session_client_private_key = global_data.nacl_keys.secretKey;
		let password_hash			   = null;
			
	


		let request 		= new PostLoginRequest();
		request.header 		= global_data.request_header;

		let empty_nonce 	= new Uint8Array(24);
		empty_nonce.fill(0);
		
		let nonce_header 	= "00000000000000000000000000000000";


		if (props.ldapEnabled && props.ldapEnabled == true && loginOverLdap == true) {
			password_hash = etc.fg_str_to_ui8arr(password);
			request.loginOverLdap = true;
		} else {
			password_hash = fhash(global_data.session_params.hshAlg,
				etc.fg_hex_to_ui8arr(global_data.session_params.hshSalt),
				etc.fg_str_to_ui8arr(password));			
		}

		// crypto_box'ed username
		let c_username 		= nonce_header+etc.fg_ui8arr_to_hex(nacl.box(etc.fg_str_to_ui8arr(username),empty_nonce, session_server_public_key, session_client_private_key))
		request.username	= c_username;

		// crypto_box'ed password
		let c_password		= nonce_header+etc.fg_ui8arr_to_hex(nacl.box(password_hash,empty_nonce, session_server_public_key, session_client_private_key))
		request.password	= c_password;


		// console.log("Server pubK: "+global_data.session_params.sessionPk);
		// console.log("Cli    prvK: "+etc.fg_ui8arr_to_hex(global_data.nacl_keys.secretKey));

		// console.log("username   : "+c_username);
		// console.log("password   : "+c_password);

	

		// request.username = etc.fg_ui8arr_to_hex(result);
		// request.password = request.username;
		setIsLoggingIn(true);
		global_data.public_api.postLogin({
			'postLoginRequest' : request
		}, (perror,postLoginResponse, data ) => {

			setIsLoggingIn(false);
			if (perror) {
				if (perror.status == 401) {
					setError("Invalid credentials.");
				} else {
					setError("API Error");
				}
			} else {

				// console.log(postLoginResponse);
				if (postLoginResponse.logonState && postLoginResponse.logonState.authenticated == true) {

					if (postLoginResponse.twoFARequired == true) {

						setRequires2fa(true);


					} else {

						global_data.is_admin = postLoginResponse.logonState.isAdmin;
		
						if (global_data.is_admin == true) {
							
							ReactDom.render(<AdminHome/>, document.getElementById("app"));

						} else {
							ReactDom.render(<Home/>, document.getElementById("app"));
						}
						

					}

				} else {
					setError("Invalid credentials.")
				}


			}
		});


	
	}

	let handleKeyPress = (event) => {
		if(event.key === 'Enter'){
			login();
		}
	};



	return (
		<div className={"body-wrap " + (modal ? "is-blur" : "") } >
			<header>
				<div className="logo-wrap" >
						<div className="logo"><Logo /> <span className="logo-brand">Forgiva Enterprise</span></div>
				</div>

			</header>
			{/* <main> */}
				<div className="login-form level level-item">
					<div className="panel" >
						<div className="panel-heading">
							<h2 className="panel-title">Login</h2>
							<p className="panel-desc">
							{isLoggingIn &&
								"Checking credentials.."
							}
							{!isLoggingIn && requires2fa == false &&								
									"Please enter your authentication credentials." 
							}
							{!isLoggingIn && requires2fa == true &&
									"Please enter your authentication detail(s)."
							}
							</p>
						</div>
						{isLoggingIn &&
								<div className="progress">
									<div className="spinner"></div>
								</div>
								
						}
						
						<form className="panel-block"  >
							{requires2fa == false &&
								<React.Fragment>
									<div className="field" hidden={(isLoggingIn ? true : false)} >
										<label className="label">User name</label>
										<div className="control">
											<input  className="input"  type="text" value={username}
												onChange={e => setUsername(e.target.value) }autoFocus />
										</div>
									</div>
									<div className="field" hidden={(isLoggingIn ? true : false)}>
										<label className="label">Password</label>
										<div className="control">
											<input className="input" type="password" value={password}
												onChange={e => setPassword(e.target.value) }
												onKeyPress={e => handleKeyPress(e)}  />
										</div>
									</div>
								</React.Fragment>}
								{/* onChange={e => setLoginOverLdap(e.target.value)} 
								onClick={() => setLoginOverLdap(!loginOverLdap)} */}
							{props.ldapEnabled && props.ldapEnabled == true &&
								<div className="field" hidden={(isLoggingIn ? true : false)} >
									<label className="checkbox">
									<input type="checkbox" value={loginOverLdap} checked={loginOverLdap}
										 />
									<div className="checkmark" onClick={() => setLoginOverLdap(!loginOverLdap)} ></div>
									Login over LDAP
									</label>
								</div>
							}

							{requires2fa &&
								<div className="field">
									<label className="label">Authentication code</label>
									<div className="control">
										<input className="input" type="text" value={code} 
										onChange={e => setCode(e.target.value)}
										
										 /> 
									</div>
								</div>}
							
							{error !== null &&
								<div className="field" hidden={(isLoggingIn ? true : false)}>
									<div className="notify notify-error">
										<div className="notify-title">Error</div>
										<div className="notify-desc">{error}</div>
										<div className="close" />
									</div>
								</div>
							}
						</form>
						
						<div className="panel-footer" hidden={(isLoggingIn ? true : false)}>
							<div className="field level-right">
								<div className="control">
									<button className="button is-link"  onClick={login} >
										{(requires2fa == false) ?
											"Login" :
											"Validate"}</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/* </main> */}
		</div>
		)
}

