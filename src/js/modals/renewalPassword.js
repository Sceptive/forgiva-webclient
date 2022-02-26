import React from 'reactn'
import { Modal, HiddenInput, ErrorField, DayPickerInput } from '../components'
import moment from 'moment';
import VisualConfirmation from './visualConfirmation';
import etc from '../etc'
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import global_data  from '../global';

export default props => {
	let [renewal, setRenewal] 				= React.useState(moment().toDate())
	let [master, setMaster] 				= React.useState("")
	let [master2, setMaster2] 				= React.useState("")
	let [error, setError] 					= React.useState(null)
	let [showConfirm, setShowConfirm] 		= React.useState(false)
	let [isReEntryRequired, setReqReEntry] 	= React.useState(true)
	let [isMkIgnore, setMkIgnore] 			= React.useState(true)

	let renewal_format						= "YYYY/MM/DD";
	let canGenerate = 
				( (isMkIgnore || master.length > 0)
						&& (isMkIgnore 
								|| !isReEntryRequired 
								|| master === master2)); 
	

	React.useEffect(() => {

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

		etc.get_setting(global_data.settings_keys.settingsMui, 
						(perror, value) => {

			if (perror) {
				if (perror.status == 401) {
					setError("Invalid credentials.");
				} else {
					setError("API Error");
				}
			} else {
				setMkIgnore((value === 'true'));

			}  
			
		});
	
	}, [])

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
					<DayPickerInput style={{ width: "100%" }} 
						onDayChange={setRenewal}
						formatDate={formatDate} 
						parseDate={parseDate} 
						value={renewal}
						selectedDays={renewal} 
						format={renewal_format}
						placeholder={renewal_format}
						component={props => <input {...props} 
						className="input" />} />

				</div>
				{!isMkIgnore &&
				<HiddenInput label="Master key" value={master} 
												onChange={setMaster} 
												success={canGenerate} />
				}
				{!isMkIgnore && isReEntryRequired &&
				<HiddenInput label="Master key (again)" 
							value={master2} 
							onChange={setMaster2} 
							success={canGenerate}/>
				}
				
				{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
		</Modal>)
	else
		return <VisualConfirmation {...props} 
				master={master} 
				close={props.close} 
				metadata={props.metadata}
				renewal={formatDate(renewal,renewal_format)}
		/>
}