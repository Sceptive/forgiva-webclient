import React 	from 'reactn'
import SideMenu from './sideMenu'
import MetadataList from './metadataList'
import MetadataSearch from './metadataSearch'
import logoImg 	from '../../svg/logo.svg'
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import OutsideClickHandler from '../components/OutsideClickHandler'
import etc from '../etc'
import Settings from './settings'
import Import from './import'
import global_data from '../global'

import { PostUserBackupExportRequest  } from '../api/src';

let Logo = ()=> <img src={logoImg} alt="sceptive" style={{ height: '27px'}} />


export default (props) => {	
	let [selectedGroup, setSelectedGroup] 	= React.useState(null)
	let [modal, setModal] 					= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 			= React.useGlobal("sideMenu")
	let [dropMenu, setDropMenu] 			= React.useState(null)
	let [isExporting, setExporting]			= React.useState(false);



	let export_group = async (selected_group) => {

		setExporting(true);

		try {
			let req_export        		= new PostUserBackupExportRequest()
			req_export.header     		= global_data.request_header;
			if (selected_group) {
				req_export.metadataGroupId 	= selected_group.groupId;	
			}
	
			global_data.user_api.postUserBackupExport({
				'postUserBackupExportRequest': req_export
			}, (error,operationResult, response) => {
				if (operationResult.error != null) {
					console.log(operationResult.error);
				} else {

					
					var a = window.document.createElement('a');
					a.href = window.URL.createObjectURL(
							new Blob([operationResult.resultData], 
							{type: 'text/plain'}));
					a.download = (selected_group ? selected_group.groupName
									: "Forgiva")
									+"-"
									+String(new Date().toISOString().split('T')[0])
									+'-backup.fgdump';

					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
					
				}

				setExporting(false);
			});
		} catch (error) {
			//setError(error);
			console.log(error);
		}


	}


	return(<>
		<div  className={"body-wrap " + (modal ? "is-blur" : "") } >
			<header>
				<a className="hamburger-menu" 
				onClick={() => setSideMenu(!sideMenu)}></a>
				<div className="logo-wrap" >
						<div className="logo"><Logo /></div>
				</div>
				<div className="header-right">
					{isExporting &&
					<span>
						Exporting data..
					</span>
					}
					<button className="search-button" onClick={() => 
						setModal(<MetadataSearch />)}></button>
					
					<div className={
					"dropdown is-right " + (dropMenu == 1 ? "is-active" : "")}>
							<button className="user-button" 
									aria-controls="dropdown-menu"
									onClick={() => setDropMenu(1)}/>
							{dropMenu &&
								<OutsideClickHandler 
								onOutsideClick={() => { 
									setDropMenu(null)
								}}>
								<div className="dropdown-menu" 
									id="dropdown-menu" role="menu">
									<div className="dropdown-content">
										<a onClick={() => { 
											setDropMenu(null); 
											setModal(<Settings />) 
											}} 
											className="dropdown-item">
											Settings
										</a>
										{!isExporting &&
										<>
										<a onClick={() => { 
											setDropMenu(null);
											export_group(selectedGroup);
												}}
											className="dropdown-item">
											Export group <b>{selectedGroup.groupName}</b>
										</a>
										<a onClick={() => { 
											setDropMenu(null);
											export_group();
												}}
											className="dropdown-item">
											Export all groups
										</a>
										</>}
										<a onClick={() => { 
											setDropMenu(null);
											setModal(<Import
												/>);
												}}
											className="dropdown-item">
											Import
										</a>
										<a onClick={() => { 
											setDropMenu(null); 
											etc.logout((per,resp) => {  window.location.reload(false); }); }} 
											className="dropdown-item">
											Logout
										</a>

									</div>
								</div>
								</OutsideClickHandler>
								}
					</div>
					
				</div>
			</header>
				<main>
					<SideMenu 	
								selectedGroup={selectedGroup} 
								setSelectedGroup={setSelectedGroup} />	
					{selectedGroup && 
						<MetadataList  selectedGroup={selectedGroup} />
					}
				</main>
		</div>
		{modal}
		</>
		)
}

