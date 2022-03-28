import React, {Component} from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider,HiddenInput } from '../components'
import Switch from '@material-ui/core/Switch';
import Wait from '../modals/wait';
import global_data from '../global'
import etc         from '../etc'
import { authenticator, otplib } from 'otplib';
import QRCode from "qrcode";


import { PostUserPasswordChangeRequest,  PostUserSettingsGetRequest, PostUser2faSettingVerificationRequest, PostUser2faEnableRequest, PostUser2faDisableRequest } from '../api/src'
import { set } from 'js-cookie';

export default class Settings2FA extends Component {

        init_data = {

	    isChanging:        false,
        // Default password complexity (settingsPdc)
	    twofaEnabled:       false,
        // Error in actions
        error:              null,
        secret:             authenticator.generateSecret(),
        otpCode:            ""

    }

    constructor(props) {
        super (props);
        this.state = this.init_data;
    }


    setError = (error) => {
        this.setState({ error: error })
    }

    update_value = (key,value) => {


        switch (key) {
            case global_data.settings_keys.settings2faEnabled: 
                this.setState({ twofaEnabled: value === 'true'})
                break;
            default:
                        
        }


    }

   getSetting = async (key) => {

        this.setState({ isChanging: true });


        etc.get_setting(key, (perror, value) => {

            if (perror) {
				if (perror.status == 401) {
					this.setError("Invalid credentials.");
				} else {
					this.setError("API Error");
				}
			} else {
                this.update_value(key, value)

			}   

            this.setState({ isChanging: false });

        });
        
    }
    

      
    setSetting = (key, value) => {


        this.setState({ isChanging: true });

        // Save data
        etc.set_setting(key, value, (perror) => {

            if (perror != null) {
                this.setError(perror.message);

            } else {

                    
                this.update_value(key, String(value))

        
            }

        this.setState({ isChanging: false });

        });
	
    }

    disable2FA() {

        this.setState({ isChanging: true });


        try {


            let req_nsr 		= new PostUser2faDisableRequest()
            req_nsr.header 		= global_data.request_header;

            req_nsr.validationCode = etc.fg_encrypt_for_session(etc.fg_str_to_ui8arr(this.state.otpCode));

            // Save data
            global_data.public_api.postUser2faDisable({
                'postUser2faDisableRequest': req_nsr
            }, (error,operationResult, response) => {


                this.setState({ isChanging: false });

                if (operationResult.error != null) {
                    this.setError(operationResult.error);

                } else {

                    //setSuccess("Password changed.");
                    etc.logout((perror, response) => {

                        if (perror) {
                            if (perror.status == 401) {
                               this.setError("Invalid credentials.");
                            } else {
                                this.setError("API Error");
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
            console.log("setError "+e.message);
			this.setError(e.message)

            this.setState({ isChanging: false });

		}

    }

    enable2FA() {

        this.setState({ isChanging: true });


        try {


            let req_nsr 		= new PostUser2faEnableRequest()
            req_nsr.header 		= global_data.request_header;

            req_nsr.sotpCode     = etc.fg_encrypt_for_session(etc.fg_str_to_ui8arr(this.state.secret));
            req_nsr.validationCode = etc.fg_encrypt_for_session(etc.fg_str_to_ui8arr(this.state.otpCode));

            // Save data
            global_data.public_api.postUser2faEnable({
                'postUser2faEnableRequest': req_nsr
            }, (error,operationResult, response) => {


                this.setState({ isChanging: false });

                if (operationResult.error != null) {
                    this.setError(operationResult.error);

                } else {

                    //setSuccess("Password changed.");
                    etc.logout((perror, response) => {

                        if (perror) {
                            if (perror.status == 401) {
                               this.setError("Invalid credentials.");
                            } else {
                                this.setError("API Error");
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
            console.log("setError "+e.message);
			this.setError(e.message)

            this.setState({ isChanging: false });

		}

    }
   
    componentDidUpdate() {

        try{

        var canvas = document.getElementById('canvas')

        const otpauth = authenticator.keyuri("Forgiva Enterprise", "OTP", 
                            this.state.secret);

        QRCode.toCanvas(canvas, otpauth, function(error) {
            if (error) {
                console.error(error);
            }
            });
        } catch (e) {}
      

    }

	componentDidMount() {

        this.setState(JSON.parse(JSON.stringify(this.init_data)));

        this.getSetting(global_data.settings_keys.settings2faEnabled)

      
	}

 
    render() 
    {
    
        

        return (<>
            <div style={{ padding: '10px', width: '100%', height: '289px', 
                            lineHeight: '100px', fontWeight: 600, 
                            textAlign: 'center', display: 'inline-block' }}>
            {this.state.isChanging &&
								<div className="progress">
									<div className="spinner"></div>
								</div>
								
			}
            
            {!this.state.isChanging  && 
                <>

                {!this.state.twofaEnabled &&
                <div className="qrcode">
                  <canvas id="canvas" />
                </div>
                }

                <div className="field" 
                        style={{lineHeight: '0px'}}>
					<label 
                        className="label">
                        Please enter 2FA code to {this.state.twofaEnabled ? 
                                                        "disable" : "enable"} 
                    </label>
                    <div className="control">
                        <input className="input"  style={{textAlign:'center'}}
                                type="password" 
                                value={this.state.otpCode}
                                onChange={e => 
                                    this.setState({ otpCode: e.target.value })}
                            autoFocus
                            /> 
                    </div>
				</div>
                <div className="columns" style={{justifyContent:'flex-end'}}>
                    {(this.state.error !== null) &&
                        <div className="field" 
                            style={{ "width": '100%', 
                                        lineHeight: '1.3' }}>
                            <div className="notify notify-error" 
                            style={{ marginLeft: '10px'}}>
                                <div className="notify-title">Error:</div>
                                <div className="notify-desc">{this.state.error}</div>
                            </div>
                        </div>
                    }
                    <button className={"button submit-button"}
                            onClick={() =>
                            !this.state.twofaEnabled ?
                                            this.enable2FA() :
                                            this.disable2FA()
                             } >
                            {this.state.twofaEnabled ? "Disable" : "Enable"}
                    </button>
                        
                
                </div>
                </>

            }
            
            </div>
        </> 
        );
    }
}