import React, {Component} from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider } from '../components'
import etc from '../etc'
import global_data from '../global'
import { PostUserMetadataAddRequest, PostUserSettingsGetRequest, PostUserSettingsSetRequest, Metadata } from '../api/src'
import { render } from 'react-dom'
import { timingSafeEqual } from 'crypto'
import { exitCode } from 'process'

export default class SettingsGeneral extends Component {


    init_data = {

	    isChanging:        false,
        // Default password complexity (settingsPdc)
	    complexity:         1,
        // Default password length (settingsPdl)
	    length:             16,
        // Do not scramble animal positions randomly (Less secure)
        isAds:              false,
        // Do not us master key (Less secure)
        isMui:              false,
        // Ask master key once when regenerating password
        isMao:              false,
        // Always show passwords rather than copying to clipboard
        isPasnc:            false,
        // Error in actions
        error:              null

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
            case global_data.settings_keys.settingsAds: 
                this.setState({ isAds: value === 'true'})
                break;
            case global_data.settings_keys.settingsMui: 
                this.setState({ isMui: value === 'true'})
                break;
            case global_data.settings_keys.settingsMao: 
                this.setState({ isMao: value === 'true'})
                break;
            case global_data.settings_keys.settingsPasnc: 
                this.setState({ isPasnc: value === 'true'})
                break;
            case global_data.settings_keys.settingsPdl: 
                this.setState({ length: parseInt(value)})
                break;
            case global_data.settings_keys.settingsPdc: 
                this.setState({ complexity: parseInt(value)})
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

   


	componentDidMount() {

        this.setState(JSON.parse(JSON.stringify(this.init_data)));

        this.getSetting(global_data.settings_keys.settingsAds)
        this.getSetting(global_data.settings_keys.settingsMui)
        this.getSetting(global_data.settings_keys.settingsMao)
        this.getSetting(global_data.settings_keys.settingsPasnc)
        this.getSetting(global_data.settings_keys.settingsPdl)
        this.getSetting(global_data.settings_keys.settingsPdc)

	}

 
    render() 
    {
        return (
        <div style={{ margin: '10px', height: '299px'}}>
            {this.state.isChanging &&
            <div className="progress">
                <div className="spinner"></div>
            </div>
            
            }
            {!this.state.isChanging &&
            <>
            <div className="columns checkbox">
                <div className="field" >
                    <label className="checkbox">
                    <input type="checkbox" 
                        checked={this.state.isMao}
                        onChange={e => 
                    this.setSetting(
                        global_data.settings_keys.settingsMao,
                        e.target.checked)}  />
                    <div className="checkmark"></div>
                    Ask master key once when regenerating password
                    </label>
                </div>
            </div>
            <div className="columns checkbox">
                <div className="field" >
                <label className="checkbox">
                    <input type="checkbox" checked={this.state.isMui}
                        onChange={e => this.setSetting(
                        global_data.settings_keys.settingsMui,
                        e.target.checked)}  />
                    <div className="checkmark"></div>
                    Do not use master key (Less secure)
                </label>
                </div>
            </div>
            <div className="columns">
                <div className="field" style={{
                                    paddingBottom: '0px', 
                                    paddingLeft: '23px'}}>
                <label className="checkbox">
                <p><i>Rather than asking for master key, system uses your login
                password's hash as master key on backend. Please be aware 
                that <b> with this option if you change your login password then
                 all your generated passwords do change.</b>  </i></p>
                </label>
                </div>
            </div>      
            <div className="columns checkbox">
                <div className="field" >
                <label className="checkbox">
                    <input type="checkbox" checked={this.state.isAds}
                        onChange={e => this.setSetting(                    
                        global_data.settings_keys.settingsAds,
                        e.target.checked)}  />
                    <div className="checkmark"></div>
                    Do not scramble animal positions randomly (Less secure)
                </label>
                </div>
            </div>


            <div className="columns checkbox">
                <div className="field" >
                <label className="checkbox">
                    <input type="checkbox" 
                        checked={this.state.isPasnc}
                        onChange={e => this.setSetting(
                        global_data.settings_keys.settingsPasnc,
                        e.target.checked)}  />
                    <div className="checkmark"></div>
                    Always show passwords rather than copying to clipboard
                </label>
                </div>
            </div>           
            <div className="columns">

            </div>
            <div className="columns">
                <div className="field column is-half">
                    <label className="label">Default Complexity</label>
                    <div className="has-text-centered">
                        <div className="steps editable">
                            <div onClick={() => 
                                this.setSetting(
                                    global_data.settings_keys.settingsPdc,
                                    1)} 
                                className={"step " + 
                                    (this.state.complexity >= 1 ? 
                                                "active" : "")}>
                            </div>
                            <div onClick={() => 
                                this.setSetting(
                                    global_data.settings_keys.settingsPdc,
                                    2)} 
                                className={"step " + 
                                    (this.state.complexity >= 2 ? 
                                                "active" : "")}>
                            </div>
                            <div onClick={() => 
                                this.setSetting(
                                    global_data.settings_keys.settingsPdc,
                                    3)} 
                                className={"step " + 
                                (this.state.complexity >= 3 ? 
                                                "active" : "")}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field column is-two-fifths">
                    <label className="label">Default Password Length</label>
                    <div className="has-text-centered">
                        <label style={{ float: 'left', 
                                        marginLeft: -15, 
                                        marginTop: 2, 
                                        fontSize: 12 }} >
                        1
                        </label>
                        <label style={{ float: 'right', 
                                        marginRight: -16, 
                                        marginTop: 2, fontSize: 12 }} >
                        32
                        </label>
                        <Slider min={1} 
                                max={32} 
                                value={this.state.length} 
                                onChange={e => 
                                    this.setSetting(
                                        global_data.settings_keys.settingsPdl,
                                        e)}
                            handleStyle={{  backgroundColor: '#3D70B2', 
                                            border: 'none', 
                                            width: 24, 
                                            height: 24 }}
                            railStyle={{    backgroundColor: '#8897A2', 
                                            marginTop: 4 }}
                            trackStyle={{   backgroundColor: '#3D70B2', 
                                            marginTop: 4 }} />

                    </div>
                </div>
                <div className="field column">
                    <label className="label"
                        style={{    borderBottom: "1px solid grey", 
                                    height: 50, 
                                    paddingTop: 25, 
                                    textAlign: 'center' }}>
                        {this.state.length}
                    </label>
                </div>
            </div>   
            {this.state.error !== null &&
            <div className="columns">
                    <div className="field" 
                            style={{    width: '100%', 
                                        lineHeight: '1.3' }}>
                        <div className="notify notify-error" 
                                style={{ marginLeft: '10px'}}>
                            <div className="notify-title">Error:</div>
                            <div className="notify-desc">
                                {this.state.error}
                            </div>										
                        </div>
                    </div>
            </div>
            }
            </>
        }     
        </div>                 
        );
    }
}