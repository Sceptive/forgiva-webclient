import React, {Component} from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider } from '../components'
import Wait from '../modals/wait';
import global_data from '../global'
import { PostUserMetadataAddRequest, Metadata, PostUserSettingsGetRequest } from '../api/src'

import SettingsGeneral from './settingsGeneral'
import ChangePasswordSettings from './settingsChangePassword'
import TwoFASettings from './settings2FA'

export default props => {
	let [modal, setModal]               = React.useGlobal("modal");
	let [selectedTab, setSelectedTab] 	= React.useState(null);
	let [complexity, setComplexity]     = React.useState(1);
	let [length, setLength]             = React.useState(16);
    let [loading,     setLoading]       = React.useState(false);


    React.useEffect(() => {
		if(selectedTab == null){
            setSelectedTab("general")
		}
    }, [selectedTab])
    
   


    // Do not scramble animal positions randomly (Less secure)
    // Always show passwords rather than copying to clipboard

    return (<Modal title="Settings" desc="" close={true} 
                    cancelButtonName="Close" footerTop={10}>
		        <div className="columns">

                    <div className={
                            "tab-menu-item-parent "
                                +(selectedTab == "general" ? "active" : "") 
                        }>				
                        <a className="tab-menu-item " 
                            onClick={()=> {
                                setSelectedTab("general")
                            }}>General</a>
                    </div>
                    <div className={
                            "tab-menu-item-parent "
                                +(selectedTab == "change-password" 
                                                        ? "active" : "") }>				
                        <a className="tab-menu-item " 
                            onClick={()=> {
                                setSelectedTab("change-password")
                            }}>Change Password</a>
                    </div>
                   
                </div>
                 {loading &&
                 <>
                    <Wait title="Please wait.." description="Get settings" />
                 </>
                }
                {!loading &&
                <>
                   {selectedTab == "general" &&                         
                      <SettingsGeneral/>
                   }
                   {selectedTab == "change-password" &&                         
                      <ChangePasswordSettings/>
                   }
                     {selectedTab == "twofa" &&                         
                      <TwoFASettings/>
                   }
                </>
                }
        </Modal>
    );
}