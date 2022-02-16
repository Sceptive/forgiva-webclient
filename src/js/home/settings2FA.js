import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider,HiddenInput } from '../components'

import global_data from '../global'
import etc         from '../etc'


import { PostUserPasswordChangeRequest } from '../api/src'

export default props => {

    let [error, 	   setError]			= React.useState(null);
    let [success, 	   setSuccess]			= React.useState(null);
	let [isChanging,   setIsChanging]		= React.useState(false)

    
	let changePassword = async () => {
		setIsChanging(true)
		try {


            let req_nsr 		= new PostUserPasswordChangeRequest();
            req_nsr.header 		= global_data.request_header;

            req_nsr.newPassword     = etc.fg_encrypt_for_session(etc.fg_str_to_ui8arr(newPassword));
            req_nsr.oldPassword     = etc.fg_encrypt_for_session(etc.fg_str_to_ui8arr(curent));

            // Save data
            global_data.user_api.postUserPasswordChange({
                'postUserPasswordChangeRequest': req_nsr
            }, (error,operationResult, response) => {


                setIsChanging(false);
                if (operationResult.error != null) {
                    setError(operationResult.error);

                } else {

                    setSuccess("Password changed.");
                    etc.logout(); 
                    
                }
    
            });

		
		} catch (e) {
            console.log("setError");
			setError(e.message)
		}
	}


    return (<>
            <div style={{ margin: '10px', width: '100%', height: '289px', lineHeight: '289px', fontWeight: 600, textAlign: 'center', display: 'inline-block' }}>
                2FA is not configured
            </div>
           </> 
         );
}