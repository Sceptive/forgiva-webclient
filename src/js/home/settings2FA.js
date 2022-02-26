import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider,HiddenInput } from '../components'
import Switch from '@material-ui/core/Switch';
import Wait from '../modals/wait';
import global_data from '../global'
import etc         from '../etc'


import { PostUserPasswordChangeRequest,  PostUserSettingsGetRequest, PostUser2faSettingVerificationRequest } from '../api/src'
import { set } from 'js-cookie';

export default props => {

    let [error, 	        setError]		      = React.useState(null);
    let [success, 	        setSuccess]		      = React.useState(null);
	let [isChanging,        setIsChanging]	      = React.useState(null);
    let [checked,           setChecked]           = React.useState(null);
    let [verificationTwoFa, setVerificationTwoFa] = React.useState(null);
    let [verificationCode,  setVerificationCode]  = React.useState(null);

	


    React.useEffect(() => {
        getSetting();
        check_twofa_code_setting(true);
	})

   
 
    
    

    return (<>
        <div style={{ margin: '10px', width: '100%', height: '289px', lineHeight: '100px', fontWeight: 600, textAlign: 'center', display: 'inline-block' }}>
           Will be implemented
        </div>
      </> 
     );
}