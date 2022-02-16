import React from 'reactn'
import ReactDom from 'react-dom'
import Home from './home';
import AdminHome from './admin'
import Login from './login';
import Wait from './modals/wait';
import Cookies from 'js-cookie';
import Modal from './components/modal'
import ErrorField from './components/errorField'
import {DefaultApi, PostNewSessionRequest, ApiClient, PostNewSessionResponse, Header, UserOperationsApi, AdministratorOperationsApi} from './api/src/index'
import nacl from './crypto/nacl.min'

import global_data from './global'
import etc from './etc'



React.setGlobal({
	modal: 		false,
	sideMenu: 	true,
	isAuthenticated: false,
	username: ""
})


let App = () => {
	let [modal] 							= React.useGlobal("modal");


	// Getting session id if saved to cookies
	let sessionId 			 	= localStorage["session_id"];
	// Setting header object which will be used in API calls
	let tmpReqHeader 		 	= new Header();
	tmpReqHeader.sessionId   	= sessionId;
	tmpReqHeader.clientAgent 	= "Forgiva WebClient";
	// Initiating api configuration
	var api_client 			 	= new ApiClient();
	api_client.basePath 	 	= "/api";
	var publicApi 				= new DefaultApi(api_client);
	var userApi					= new UserOperationsApi(api_client);
	var adminApi				= new AdministratorOperationsApi(api_client);
	global_data.public_api 		= publicApi;
	global_data.user_api		= userApi;
	global_data.admin_api		= adminApi;
	// Setting nacl keys to the global
	global_data.nacl_keys 		= nacl.box.keyPair();
	

	let render_error = (message) => {
		ReactDom.render(
			<Modal title="Error" close={false}>
				{message}
			</Modal>, document.getElementById("app")
		);
	};


	// Creating new session request object
	let req_nsr 		= new PostNewSessionRequest();
	req_nsr.header 		= tmpReqHeader;
	// Seting client public key
	req_nsr.clientPk	= Buffer.from(global_data.nacl_keys.publicKey).toString('hex');

	// console.log("Client pk: "+req_nsr.clientPk);
	
	// Launch new session request
	global_data.public_api.postNewSession({
		'postNewSessionRequest': req_nsr
	}, (error,postNewSessionResponse, response) => {


		if (error) {
			render_error("Could not connect to server. Please try again.");
		} else {

			if (postNewSessionResponse.newSessionId != null) {
				tmpReqHeader.sessionId 		= postNewSessionResponse.newSessionId;
				localStorage["session_id"] 	= postNewSessionResponse.newSessionId;
				// console.log("New session id: "+tmpReqHeader.sessionId);
			}

			
			global_data.request_header = tmpReqHeader;
			global_data.session_params = postNewSessionResponse;

		
			if (postNewSessionResponse.logonState != null && postNewSessionResponse.logonState.authenticated) {

				if (postNewSessionResponse.logonState.isAdmin == true) {
					ReactDom.render(<AdminHome/>, document.getElementById("app"));
				} else {
					ReactDom.render(<Home/>,document.getElementById("app"))
				}
			} else {
				ReactDom.render(<Login ldapEnabled={postNewSessionResponse.ldapEnabled}/>, document.getElementById("app"));
			}
		}
	});



	return 		(
		<Wait title="Please wait.." description="Connecting to Forgiva Enterprise Server" />
	)
}

ReactDom.render(<App />, document.getElementById("app"))