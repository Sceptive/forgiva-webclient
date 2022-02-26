import React from 'reactn'
import {ErrorField, Modal, HiddenInput} from '../components'
import VisualConfirmation from './visualConfirmation';
import etc from '../etc'
import global_data from '../global';

export default props => {
	let [master, setMaster] 				= React.useState("")
	let [master2, setMaster2] 				= React.useState("")
	let [isReEntryRequired, setReqReEntry] 	= React.useState(true)
	let [error, setError] 					= React.useState(null)
	let [modal, setModal] 					= React.useGlobal("modal")
				
	let canGenerate = () => { 
			return master.length > 0 
						&& (!isReEntryRequired || master === master2) ; }


	React.useEffect(() => {

		etc.get_setting(global_data.settings_keys.settingsMui, 
						(perror, value) => {

			if (perror) {
				if (perror.status == 401) {
					setError("Invalid credentials.");
				} else {
					setError("API Error");
				}
			} else {
                if (value === 'true') {
					setModal(<VisualConfirmation 
								metadata={props.metadata} 
								master={null} />)				
				}

			}  
			
		});


		etc.get_setting(global_data.settings_keys.settingsMao, 
						(perror, value) => {

			if (perror) {
				if (perror.status == 401) {
					setError("Invalid credentials.");
				} else {
					setError("API Error");
				}
			} else {
                setReqReEntry(value === 'false')

			}  
			
		});


	

		
	
	}, [])

	 
	let generate = () => {
		if(canGenerate())
			setModal(<VisualConfirmation 
						metadata={props.metadata} 
						master={master} />)
		else if(master.length === 0)
			setError("Master key is empty")
		else if(isReEntryRequired && master != master2)
			setError("Master key and master key again don't match")


		
	}

	
	return (
		<Modal title={"Generate password"}  desc={"Please enter your master key"}
			action={generate} actionName="Generate" close={true}>
				<HiddenInput label="Master key" value={master} 
						onChange={setMaster} 
						success={canGenerate()} 
						autoFocus={true} 
					onEnter={() => { if (!isReEntryRequired)  generate();}} />
				{!isReEntryRequired 
					&& props.metadata.generatedBefore === false &&
				<div className="field" style={{ "width": '100%', 
												lineHeight: '1.3' }}>
				<div className="notify notify-info" >
					<div className="notify-title">Beware:</div>
					<div className="notify-desc">Even you choose not to enter 
						master key twice, it is safer to be sure<br/> master key
						entered correctly at the first time on first generation.</div>										
				</div>
				</div>
				}

				{(isReEntryRequired 
					|| (!isReEntryRequired 
							&& props.metadata.generatedBefore === false)) &&
				<HiddenInput label="Master key (again)" 
					value={master2} 
					onChange={setMaster2} 
					success={canGenerate()} 
					onEnter={() => generate()}
					 />
				}

				{error && <ErrorField close={() => 
					setError(null)
				} >{error}</ErrorField>}
	</Modal>)
}