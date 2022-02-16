import React from 'reactn'
import { ErrorField, Modal } from '../components'
import  GeneratePassword  from '../modals/generatePassword';
import { PostUserMetadataSearchRequest, PostUserMetadataSearchResponse } from '../api/src'
import global_data from '../global'
import FreeScrollBar from 'react-free-scrollbar'

export default props => {
	let [session, setSession] = React.useGlobal('session')
	let [error, setError] = React.useState(null)
	let [search, setSearch] = React.useState("")
	let [result, setResult] = React.useState([])
	let [modal, setModal] = React.useGlobal("modal")
	let [selectedMD, setSelectedMD] = React.useState(null)
	let [searching, setSearching]         = React.useState(false)

	

    let searchMetadata = async () => {

        if (search == "") {
            return;
        }
		setSearching(true)
		try {


            let req_nsr 		= new PostUserMetadataSearchRequest();
            req_nsr.header 		= global_data.request_header;
            req_nsr.criteria    = search;



            global_data.user_api.postUserMetadataSearch({
                'postUserMetadataSearchRequest': req_nsr
            }, (error,postUserMetadataSearchResponse, response) => {


                setSearching(false);
                if (postUserMetadataSearchResponse.metadata != null) {
                    setResult(postUserMetadataSearchResponse.metadata );
                } else {
                    setResult([]);
                }
            
            });

		
		} catch (e) {
			setError(e.message)
		}
	}



	React.useEffect(() => {
		searchMetadata()
	}, [search])

	let generate = () => {
		if(selectedMD != null)
			setModal(<GeneratePassword metadataId={selectedMD.metadataId} />)
	}

	return (<Modal title="Search"  desc="Please enter your search criteria."
		actionName="Generate" action={generate} close={true}  footerTop={20} >
		<div className="field column">
			<div className="control">
				<input className="input search-input" value={search}
					onChange={e => setSearch(e.target.value)} placeholder="search" autoFocus/>
			</div>
		</div>
        <div style={{width: '100%', height: '300px'}}>
		{result.length > 0 && 
		
            <FreeScrollBar style={{width: '100%', height: '100%'}}>
			<table className="table" style={{ width: '99%'}}>
				<thead>
					<tr>
						<th>Host</th>
						<th>Account</th>
					</tr>
				</thead>
				<tbody>
				{result.map(metadata =>
                    <tr key={metadata.metadataId}  
                    onDoubleClick={() => { setModal(<GeneratePassword metadataId={metadata.metadataId} />) }}
                    onClick={() => setSelectedMD(metadata)} className={selectedMD == metadata ? "selectedrow" : "row"} >
						<td>{metadata.host}</td>
						<td>{metadata.account}</td>
					</tr>
				)}
				</tbody>
			</table>
            </FreeScrollBar>		
		}
        </div>
		{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}