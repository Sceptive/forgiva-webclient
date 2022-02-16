import React from 'reactn'
import { GeneratePassword, RenewalPassword } from "../modals";
import { PostUserMetadataBygroupRequest, PostUserMetadataRemoveRequest } from '../api/src';
import AddMetadata from './addMetadata'
import global_data from '../global'
import OutsideClickHandler from '../components/OutsideClickHandler'

export default props => {
	let [metadatas, setMetadatas] 		= React.useState([])
	let [total, setTotal] 				= React.useState(null)
	let [page, setPage] 				= React.useState(1)
	let [size, setSize] 				= React.useState(15)
	let [dropMenu, setDropMenu] 		= React.useState(null)
	let [modal, setModal] 				= React.useGlobal("modal")
	let [sideMenu] 						= React.useGlobal("sideMenu")
	let [error, setError]               = React.useState(null)
	let [groupId, setGroupId]           = React.useState(null);
	let [metadataId, setMetadataId]     = React.useState(null)
	
	let pages = []
	for (let i = 1; i <= Math.ceil(total / size); i++) {
		pages.push(i)
	}


	let updateMetadatas = () => {
		if (props.selectedGroup != null) {

            let req_nsr 		= new PostUserMetadataBygroupRequest()
            req_nsr.header 		= global_data.request_header;
            req_nsr.groupId 	= props.selectedGroup.groupId;
            req_nsr.startIdx    = (page - 1) * size;
            req_nsr.count       = size;



            // Get Metadatas
            global_data.user_api.postUserMetadataBygroup({
                'postUserMetadataBygroupRequest': req_nsr
            }, (error,postUserMetadataBygroupResponse, response) => {

				if (postUserMetadataBygroupResponse.metadatas != null) {
					setMetadatas(postUserMetadataBygroupResponse.metadatas);
					setTotal(postUserMetadataBygroupResponse.totalRecords);
					setMetadataId(null);
				} else {
					setMetadatas([]);
					setTotal(0);
				}
            });


			if(groupId != null && groupId != props.selectedGroup.groupId){
				setPage(1);			
			}

			setGroupId(props.selectedGroup.groupId);
        }
	}

	let removeMetadata = async (metadataId) => {
		try {
			let req_remove_metadata        = new PostUserMetadataRemoveRequest()
			req_remove_metadata.header     = global_data.request_header;
			req_remove_metadata.metadataId = metadataId;	
	
			global_data.user_api.postUserMetadataRemove({
				'postUserMetadataRemoveRequest': req_remove_metadata
			}, (error,operationResult, response) => {
				if (operationResult.error != null) {
					setError(operationResult.error);
				} else {
					updateMetadatas()
				}
			});
		} catch (error) {
			setError(error);
		}
	}

	React.useEffect(() => {
		updateMetadatas()
	}, [props.selectedGroup, page, modal])


	// obj['metadataId'] = ApiClient.convertToType(data['metadataId'], 'String');
	// obj['host'] = ApiClient.convertToType(data['host'], 'String');
	// obj['account'] = ApiClient.convertToType(data['account'], 'String');
	// obj['lastRenewal'] = ApiClient.convertToType(data['lastRenewal'], 'String');
	// obj['complexity'] = ApiClient.convertToType(data['complexity'], 'Number');
	// obj['generatedBefore'] = ApiClient.convertToType(data['generatedBefore'], 'Boolean');
	// obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');

	return (
		<div className="main-wrap level-left" style={{ width: sideMenu ? "calc(100% - 200px)" : "100%" }}>
			<div className={"main-content "} >
				<div className="main-top">
					<button className="button" onClick={() => setModal(<AddMetadata group={props.selectedGroup} fUpdateMetadatas={updateMetadatas} />)}>
						Add New <i className="add"></i>
					</button>
				</div>
				<div className="list-table">
					<div className="columns header" >
						<div className="column">Host</div>
						<div className="column">Account</div>
						<div className="column">Last Renewal</div>
						<div className="column"></div>
						<div className="column is-narrow" style={{ width: 210 }}>Complexity</div>
					</div>

					{metadatas && metadatas.map(metadata => {
						let cpx = Number(metadata.complexity)
						return (<div className={"columns row " } key={metadata.metadataId} onMouseLeave={() => setMetadataId(null)} onMouseOver={() => setMetadataId(metadata.metadataId)} onDoubleClick={() => { setDropMenu(null); setModal(<GeneratePassword metadataId={metadata.metadataId} />) }}>
							<div className="column" >{metadata.host}</div>
							<div className="column" >{metadata.account}</div>
							<div className="column" >{metadata.lastRewenal}</div>
							<div className="column" >
							    {metadataId == metadata.metadataId && 
					               <>
					                 <button className="generate-button" onClick={() => { setDropMenu(null); setModal(<GeneratePassword metadataId={metadataId} />) }}
							    	   style={{marginTop: "-5px"}}>
					                 	Generate <i className="add" style={{marginTop: "5px"}}></i>
					                 </button>
					               </>
					            }							
							</div>
							<div className="column is-narrow" style={{ width: 210 }} >
								<div className="steps">
									{[1, 2, 3].map(step => <div key={step} className={"step " + (cpx >= step ? "active" : "")}></div>)}
								</div>
								<div className={"dropdown is-right " + (dropMenu == metadata.metadataId ? "is-active" : "")}>
									<div className="dropdown-trigger">
										<a onClick={() => setDropMenu(dropMenu == metadata.metadataId ? null : metadata.metadataId)}
											className="button" aria-controls="dropdown-menu">
											<span>...</span>
										</a>
									</div>
									{dropMenu == metadata.metadataId &&
									<OutsideClickHandler onOutsideClick={() => { setDropMenu(null)}}>
										<div className="dropdown-menu" id="dropdown-menu" role="menu">
											<div className="dropdown-content">
												<a onClick={() => { setDropMenu(null); setModal(<GeneratePassword metadataId={metadata.metadataId} />) }}
													className="dropdown-item">
													Generate
											</a>
												<a onClick={() => { setDropMenu(null); setModal(<RenewalPassword metadata={metadata} />) }}
													className="dropdown-item">
													Renew
											</a>
												<hr className="dropdown-divider" />
												<a onClick={() => { setDropMenu(null); removeMetadata(metadata.metadataId); }}
													className="dropdown-item hover-danger">
													Delete
											</a>
											</div>
										</div>
									</OutsideClickHandler>}
								</div>
							</div>
						</div>)
					})}
					<div className="columns">
					<div className="table-bottom">
						<div className="table-bottom-left">
							<span>Items per page: <strong>{size}</strong> |   1 - {Math.min(size, metadatas.length)} of {total} items</span>
						</div>
						<div className="table-bottom-right">
							<span>{page} of {pages.length} pages </span>
							<a onClick={() => { page > 1 ? setPage(page - 1) : setPage(page) }}
								className="button prev-button">
								<i className="next"></i>
							</a>
							<div className="select">
								<select value={page} onChange={(e) => setPage(e.target.value)}>
									{pages && pages.map(x =>
										<option key={x}>
											{x}
										</option>)
									}
								</select>
							</div>
							<a onClick={() => { page < pages.length + 1 ? (page == pages.length ? setPage(page) : setPage(page + 1)) : setPage(page) }}
								className="button next-button">
								<i className="prev"></i>
							</a>
						</div>
					</div>
					</div>
					{error != null &&
					    <div className="field">
					    	<div className="notify notify-error">
					    		<div className="notify-title">Error</div>
					    		<div className="notify-desc">{error}</div>
					    		<div className="close" onClick={setError(null)}/>
					    	</div>
					    </div>
					}
				</div>
			</div>
		</div>)
}