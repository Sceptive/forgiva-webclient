import React from 'reactn'
import { Modal, HiddenInput, ErrorField, DayPickerInput } from '../components'
import moment from 'moment';
import VisualConfirmation from './visualConfirmation';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

export default props => {
	let [renewal, setRenewal] = React.useState(moment().toDate())
	let [master, setMaster] = React.useState("")
	let [master2, setMaster2] = React.useState("")
	let [error, setError] = React.useState(null)
	let [showConfirm, setShowConfirm] = React.useState(false)
	let canGenerate = master.length > 0 && (master === master2)

	let generate = () => {
		if (canGenerate)
			setShowConfirm(true)
		else if (master.length === 0)
			setError("Master key is empty")
		else if (master != master2)
			setError("Master key and master key again don't match")
	}

	if (!showConfirm)
		return (<Modal title={"Renew password"} close={true}
				action={generate} actionName="Generate" 
				desc={"Please enter your renewal date and your master key"} >
				<div className="field">
					<label className="label">Renewal Date</label>
					<span className="date-icon" />
					<DayPickerInput style={{ width: "100%" }} onDayChange={setRenewal}
						formatDate={formatDate} parseDate={parseDate} value={renewal}
						selectedDays={renewal} format="YYYY/MM/DD" placeholder="YYYY/MM/DD"
						component={props => <input {...props} className="input" />} />

				</div>
				<HiddenInput label="Master key" value={master} onChange={setMaster} success={canGenerate} />
				<HiddenInput label="Master key (again)" value={master2} onChange={setMaster2} success={canGenerate}/>

				{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
		</Modal>)
	else
		return <VisualConfirmation {...props} master={master} close={props.close} metadataId={props.metadata.metadataId} />
}