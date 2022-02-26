import React 	from 'reactn'
import SideMenu from './sideMenu'
import SystemInformation 	from './system_information'
import ResourceUsage 		from './resource_usage'



export default (props) => {	
	let [selectedMenuItem, setSelectedMenuItem] 	= React.useState(null)
	let [modal, setModal] 							= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 					= React.useGlobal("sideMenu")
	let [systemInformation, setSystemInformation] 	= React.useGlobal("system_information")


	return (
		<main>
			<SideMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
			<div className="main-wrap level-left" style={{ width: sideMenu ? "calc(100% - 200px)" : "100%" }}>
			<div className={"main-content"}  >
			{ selectedMenuItem && selectedMenuItem.item_id == 0 && <SystemInformation/> }
			{ selectedMenuItem && selectedMenuItem.item_id == 1 && <ResourceUsage/> }
			</div>
			</div>
		</main>
	)
		
}

