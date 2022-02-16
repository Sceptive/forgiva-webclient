import React 	from 'reactn'
import SideMenu from './sideMenu'
import MetadataList from './metadataList'
import MetadataSearch from './metadataSearch'
import logoImg 	from '../../img/logo.png'
import Search 	from '../modals/search';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import OutsideClickHandler from '../components/OutsideClickHandler'
import etc from '../etc'
import Settings from './settings'

let Logo = ()=> <img src={logoImg} alt="sceptive" />


export default (props) => {	
	let [selectedGroup, setSelectedGroup] 	= React.useState(null)
	let [modal, setModal] 					= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 			= React.useGlobal("sideMenu")
	let [dropMenu, setDropMenu] 			= React.useState(null)

	return(<>
		<div className={"body-wrap " + (modal ? "is-blur" : "") } >
			<header>
				<a className="hamburger-menu" onClick={() => setSideMenu(!sideMenu)}></a>
				<div className="logo-wrap" >
						<div className="logo"><Logo /> <span className="logo-brand">Forgiva Enterprise</span></div>
				</div>
				<div className="header-right">
					<button className="search-button" onClick={() => setModal(<MetadataSearch />)}></button>
					
					<div className={"dropdown is-right " + (dropMenu == 1 ? "is-active" : "")}>
									<button className="user-button" aria-controls="dropdown-menu"
											onClick={() => setDropMenu(1)}/>
									{dropMenu &&
										<OutsideClickHandler onOutsideClick={() => { setDropMenu(null)}}>
										<div className="dropdown-menu" id="dropdown-menu" role="menu">
											<div className="dropdown-content">
												<a onClick={() => { setDropMenu(null); setModal(<Settings />) }} className="dropdown-item">
													Settings
												</a>
												<a onClick={() => { setDropMenu(null); etc.logout(); }} className="dropdown-item">
													Logout
												</a>
												{/* <a onClick={() => { setDropMenu(null) }} className="dropdown-item">
													Renew
												</a>
												<hr className="dropdown-divider" />
												<a onClick={() => { setDropMenu(null) }} className="dropdown-item hover-danger">
													Delete
												</a> */}
											</div>
										</div>
										</OutsideClickHandler>
										}
					</div>
					
				</div>
			</header>
				<main>
					<SideMenu selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />	
					{selectedGroup && 
						<MetadataList selectedGroup={selectedGroup} />
					}
				</main>
		</div>
		{modal}
		</>
		)
}

