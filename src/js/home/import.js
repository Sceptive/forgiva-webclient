import React, {Component} from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider } from '../components'
import Wait from '../modals/wait';
import global_data from '../global'
import { PostUserMetadataAddRequest, Metadata, PostUserSettingsGetRequest, PostUserBackupImportRequest } from '../api/src'
import FileInput from '../components/FileInput'


export default class Import extends Component {


    init_data = {

        importing:              false,
        importing_percent:      0,
        file:                   null,
        fileContents:           null,
        success:                null,
        // Error in actions
        error:                  null


    }

    constructor(props) {
        super (props);
        this.state = this.init_data;
    }

  
   componentDidMount() {

        this.setState(JSON.parse(JSON.stringify(this.init_data)));


	}


    cancelButtonClicked = () => {
        return this.state.cancelButtonClicked;
    }

    resetCancelButtonClicked(){

        this.setState({ cancelButtonClicked: false });

    }


    showProgressBar = () => {
        this.setState({ importing: true, success: null});
    }

    updateProgressBar = (event) => {

        this.setState({
        importing_percent: ((event.loaded / event.total) * 100)
        });
    }

    upload_import = async () => {


		try {
			let req_import        = new PostUserBackupImportRequest()
			req_import.header     = global_data.request_header;
			req_import.data       = this.state.fileContents;
	
            global_data.user_api.timeout = 300000;
			global_data.user_api.postUserBackupImport({
				'postUserBackupImportRequest': req_import
			}, (error,operationResult, response) => {
				if (operationResult.error != null) {
					
                    this.setState({ error: operationResult.error })
				} else {

					this.setState({
                        success: "Total "
                                    +operationResult.affectedRecords.length
                                    +" records imported."
                    })

                    //console.log("%o",this.state.sidemenu);
					
					//this.state.sidemenu.update_groups();
                    // const [groups, setGroups] = React.useGlobal("groups")
                    // setGroups(null)

                    document.dispatchEvent(new CustomEvent('update_groups', {
                        
                    }));
                    
                    global_data.user_api.timeout = 60000;

				}


                this.setState({ importing: false })
			});
		} catch (error) {
			this.setState({ error: error })
		}

    }

    handleFileSelected = (event, file) => {

        this.setState({ file: file, 
                        fileContents: event.target.result});

        //console.log(this.state.fileContents)
        this.upload_import();



    }
 
    render() 
    {


    // Do not scramble animal positions randomly (Less secure)
    // Always show passwords rather than copying to clipboard

    return (<Modal title="Import" desc="" close={true} 
                    cancelButtonName="Close" footerTop={10}>
		        
            {this.state.importing &&
            <>
                <Wait title="Please wait.." 
                        description={
                        this.state.importing_percent < 100 ?
                        ("Loading.. %"+this.state.importing_percent) :
                        "Processing.."
                        } />
            </>
            }
            {!this.state.importing &&
            <>
                <div className="columns">
                <div className="field" >
                <label>Please select a local backup file to import:</label>
                </div>
                <div className="field" >
                
                    <FileInput
                    readAs='text'
                    // style={ { display: 'none' } }
                    style={ { 
                        backgroundColor: "#3D70B2",
                        color: "#FFFFFF"
                        } }

                    onLoadStart={this.showProgressBar}
                    onLoad={this.handleFileSelected}
                    onProgress={this.updateProgressBar}

                    // cancelIf={() => { return false; }}
                    // abortIf={this.cancelButtonClicked}

                    // onCancel={this.showInvalidFileTypeMessage}
                    // onAbort={this.resetCancelButtonClicked}
                    >

                    </FileInput>

                
                </div>
                
                </div>
            </>
            }
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
            {this.state.success !== null &&
                <div className="field" style={{ "width": '100%', lineHeight: '1.3' }}>
                    <div className="notify notify-success" style={{ marginLeft: '10px'}}>
                        <div className="notify-title">Success:</div>
                        <div className="notify-desc"> {this.state.success}</div>										
                    </div>
                </div>
			}
                
        </Modal>
    );
    }
}