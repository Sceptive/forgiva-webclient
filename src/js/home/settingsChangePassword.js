import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider,HiddenInput } from '../components'

import global_data from '../global'
import etc         from '../etc'


import { PostUserPasswordChangeRequest } from '../api/src'

export default props => {
	let [curent,       setCurrent] 	        = React.useState("")
    let [newPassword,  setNewPassword] 	    = React.useState("")
    let [newPassword2, setNewPassword2] 	= React.useState("")
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
                    etc.logout((perror, response) => {

                        if (perror) {
                            if (perror.status == 401) {
                                setError("Invalid credentials.");
                            } else {
                                setError("API Error");
                            }
                        } else {  
                            localStorage["session_id"] = null;
                            global_data.request_header = null;
                            global_data.session_params = null;
                            global_data.nacl_keys      = null;
                            global_data.is_admin       = false;
                            
                            window.location.reload(false);
                        }   

                    }); 
                    
                }
    
            });

		
		} catch (e) {
            console.log("setError");
			setError(e.message)
		}
	}

    let canChange = curent.length > 0 && (newPassword.length > 0 && newPassword === newPassword2);


    return (<>
            <div style={{ margin: '10px' }}>
            {isChanging &&
								<div className="progress">
									<div className="spinner"></div>
								</div>
								
			}
            {!isChanging && <>
            <HiddenInput label="Current Password" value={curent} onChange={setCurrent} success={false} autoFocus={true} />         
            <HiddenInput label="New Password" value={newPassword} onChange={setNewPassword} success={canChange} />         
            <HiddenInput label="New Password (Again)" value={newPassword2} onChange={setNewPassword2} success={canChange} />  
            <div className="columns">
					<button className={"button submit-button"}
							onClick={() => changePassword() } disabled={!canChange}>Change</button>
					{(error !== null && success == null) &&
								<div className="field" style={{ "width": '100%', "line-height": '1.3' }}>
									<div className="notify notify-error" style={{ "margin-left": '10px'}}>
										<div className="notify-title">Error:</div>
										<div className="notify-desc">{error}</div>										
									</div>
								</div>
					}
                    {success !== null &&
								<div className="field" style={{ "width": '100%', lineHeight: '1.3' }}>
									<div className="notify notify-success" style={{ marginLeft: '10px'}}>
										<div className="notify-title">Success:</div>
										<div className="notify-desc"> {success}</div>										
									</div>
								</div>
					}
            </div>
            </>
            }
            </div>
           </> 
         );
}