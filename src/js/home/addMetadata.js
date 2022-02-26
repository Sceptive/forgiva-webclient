import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider } from '../components'

import  GeneratePassword  from '../modals/generatePassword'
import global_data from '../global'
import etc from '../etc'
import { PostUserMetadataAddRequest, Metadata } from '../api/src'

export default props => {
	let [host, setHost]             = React.useState("");
	let [account, setAccount]       = React.useState("")
	let [complexity, setComplexity] = React.useState(1)
	let [length, setLength]         = React.useState(16)
	let [uppercase, setUppercase]   = React.useState(true)
	let [lowercase, setLowercase]   = React.useState(true)
	let [numbers, setNumbers]       = React.useState(true)
	let [symbols, setSymbols]       = React.useState(true)
	let [hosts, setHosts]           = React.useState([])

	let [error, setError]           = React.useState(null)
	let [adding, setAdding]         = React.useState(false)
	let [updateHost, setUpdateHost] = React.useGlobal("updateHost")
	let [loading, setLoading]       = React.useState(false)
	let [modal, setModal]           = React.useGlobal("modal")


	let addHost = async (routeToGenerate) => {
		setAdding(true)
		try {


            let req_nsr 		= new PostUserMetadataAddRequest();
            req_nsr.header 		= global_data.request_header;

            let md              = new Metadata();
            md.host             = host;
            md.account          = account;
            md.complexity       = complexity;
            md.groupId          = props.group.groupId;

            req_nsr.metadata    = md;

            req_nsr.passwordLength  = length;
            req_nsr.optUppercase    = uppercase;
            req_nsr.optLowercase    = lowercase;
            req_nsr.optNumbers      = numbers;
            req_nsr.optSymbols      = symbols;



            // Save data
            global_data.user_api.postUserMetadataAdd({
                'postUserMetadataAddRequest': req_nsr
            }, (error,operationResult, response) => {


                setAdding(false);
                if (operationResult.error != null) {
                    setError(operationResult.error);

                } else {
					props.fUpdateMetadatas();
					if (operationResult.affectedRecords != null &&
						operationResult.affectedRecords[0] != null) {
						let new_metadata_id = operationResult.affectedRecords[0];
						md.metadataId = new_metadata_id;

						setModal(null);

						if (routeToGenerate) {
							setModal((<GeneratePassword 
										metadata={md} />));
						}
					} else {
						setError("Could not save the record");
					}

                    
                }
    
            });

		
		} catch (e) {
			setError(e.message)
		}
	}

	React.useEffect(() => {
		etc.get_setting(global_data.settings_keys.settingsPdc, 
					(perror,value) => {

				if (perror) {
					setError(perror.message);
				} else {
					setComplexity(parseInt(value));
				}

		});

		etc.get_setting(global_data.settings_keys.settingsPdl, 
						(perror,value) => {

					if (perror) {
						setError(perror.message);
					} else {
						setLength(parseInt(value));
					}

		});
	},[]);

	
	return (<Modal title="Add New Metadata" 
					desc={
					 (!loading && !adding) ?
					 "Please enter your designated metadata"
					 : "Processing.."
					}
		action={() => addHost(false)} actionName={"Save"} close={true} 
		secondAction={() => addHost(true)} secondActionName="Save & Generate" >
		{!loading && !adding && <>
			<div className="columns">
				<div className="field column">
					<div className="control">
						<label className="label">Host</label>
                        <input className="input" value={host}
							onChange={e => setHost(e.target.value)} autoFocus />
						{/* <AsyncSelect onInputChange={e => setSearch(e)}
							onChange={host => setHost(host.value)}
							loadOptions={load} defaultOptions={hosts} /> */}
					</div>
				</div>
				<div className="field column">
					<label className="label">Account</label>
					<div className="control">
						<input className="input" value={account}
							onChange={e => setAccount(e.target.value)} />
					</div>
				</div>
			</div>
			<div className="columns">
				<div className="field column is-half">
					<label className="label">Complexity</label>
					<div className="has-text-centered">
						<div className="steps editable">
							<div onClick={() => setComplexity(1)} 
								className={"step " + (complexity >= 1 
												? "active" : "")}></div>
							<div onClick={() => setComplexity(2)} 
								className={"step " + (complexity >= 2 
												? "active" : "")}></div>
							<div onClick={() => setComplexity(3)} 
								className={"step " + (complexity >= 3 
												? "active" : "")}></div>
						</div>
					</div>
				</div>
				<div className="field column is-two-fifths">
					<label className="label">Password Length</label>
					<div className="has-text-centered">
						<label style={{ float: 'left', 
										marginLeft: -15, 
										marginTop: 2, 
										fontSize: 12 }} >1</label>
						<label style={{ float: 'right', 
										marginRight: -16, 
										marginTop: 2, 
										fontSize: 12 }} >32</label>
						<Slider min={1} 
								max={32} 
								value={length} 
							onChange={e => setLength(e)}
							handleStyle={{ backgroundColor: '#3D70B2', 
											border: 'none', 
											width: 24, 
											height: 24 }}
							railStyle={{ backgroundColor: '#8897A2', 
											marginTop: 4 }}
							trackStyle={{ backgroundColor: '#3D70B2', 
											marginTop: 4 }} />

					</div>
				</div>
				<div className="field column">
					<label className="label"
						style={{ borderBottom: "1px solid grey", 
									height: 50, 
									paddingTop: 25, 
									textAlign: 'center' }}>
						{length}
					</label>
				</div>
			</div>
			<div className="columns">
				<div className="field column">
					<div className="control has-text-centered ">
						<label className="checkbox w100">
							<input type="checkbox" 
									checked={uppercase} 
									onChange={e => setUppercase(!uppercase)} />
							<div className="checkmark">
								<span className="label">Uppercase</span>
							</div>
                    </label>
						<label className="checkbox w100">
							<input type="checkbox" 
									checked={lowercase}
									onChange={e => setLowercase(!lowercase)} />
							<div className="checkmark">
								<span className="label">Lowercase</span>
							</div>
                    </label>
						<label className="checkbox w100">
							<input type="checkbox" 
									checked={numbers} 
									onChange={e => setNumbers(!numbers)} />
							<div className="checkmark">
								<span className="label">Numbers</span>
							</div>
                    </label>
						<label className="checkbox w100">
							<input type="checkbox" 
									checked={symbols} 
									onChange={e => setSymbols(!symbols)} />
							<div className="checkmark">
								<span className="label">Symbols</span>
							</div>
              			</label>
					</div>
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