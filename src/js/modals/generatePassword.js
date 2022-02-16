import React from 'reactn'
import {ErrorField, Modal, HiddenInput} from '../components'
import VisualConfirmation from './visualConfirmation';

export default props => {
	let [master, setMaster] 	= React.useState("")
	let [master2, setMaster2] 	= React.useState("")
	let [error, setError] 		= React.useState(null)
	let [modal, setModal] 		= React.useGlobal("modal")
				
	let canGenerate = master.length > 0 && master === master2

	 
	let generate = () => {
		if(canGenerate)
			setModal(<VisualConfirmation metadataId={props.metadataId} master={master} />)
		else if(master.length === 0)
			setError("Master key is empty")
		else if(master != master2)
			setError("Master key and master key again don't match")
	}

	return (
		<Modal title={"Generate password"}  desc={"Please enter your master key"}
			action={generate} actionName="Generate" close={true}>
				<HiddenInput label="Master key" value={master} onChange={setMaster} success={canGenerate} autoFocus={true} />
				<HiddenInput label="Master key (again)" value={master2} onChange={setMaster2} 
					success={canGenerate} 
					onEnter={() => generate()}
					 />

				{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}