import React from 'reactn'
import { ErrorField, Modal } from '../components'
import axios from 'axios'
import { GeneratePassword } from '.';


export default props => {
	let { host, isRenew } = props
	let [session, setSession] = React.useGlobal('session')
	let [error, setError] = React.useState(null)
	let [search, setSearch] = React.useState("")
	let [result, setResult] = React.useState([])
	let [modal, setModal] = React.useGlobal("modal")
	let [selectedHost, setSelectedHost] = React.useState(null)

	let getSearch = async () => {
		try {
			let res = await axios.get("/user_metadata_search", {params: {
				session_id: session,
				search_criteria: search
			}})
			if (res.data.error_message != null) {
				setError(res.data.error_message)
			}
			else {
				setResult(res.data.mdatas)
			}
		} catch (e) {
			setError(e.message)
		}
	}

	React.useEffect(() => {
		getSearch()
	}, [search])

	let generate = () => {
		if(selectedHost != null)
			setModal(<GeneratePassword host={selectedHost} />)
	}

	return (<Modal title="Search"  desc="Please enter your search criteria."
		actionName="Generate" action={generate} close={true}  footerTop={20} >
		<div className="field column">
			<div className="control">
				<input className="input search-input" value={search}
					onChange={e => setSearch(e.target.value)} placeholder="search" />
			</div>
		</div>

		{result.length > 0 && 
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Host</th>
						<th>Account</th>
						<th>Group</th>
					</tr>
				</thead>
				<tbody>
				{result.map(host =>
					<tr onClick={() => setSelectedHost(host)} className={selectedHost == host ? "selectedrow" : ""} >
						<td>{host.host}</td>
						<td>{host.account}</td>
						<td>{host.group}</td>
					</tr>
				)}
				</tbody>
			</table>
		</div>
		}
		{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}