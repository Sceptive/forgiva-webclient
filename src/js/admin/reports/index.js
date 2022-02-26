import React 	from 'reactn'
import SideMenu from './sideMenu'
import CustomReport from './customReport'



// import SystemInformation 	from './system_information'
// import ResourceUsage 		from './resource_usage'
// { selectedMenuItem && selectedMenuItem.item_id == 0 && <SystemInformation/> }
// { selectedMenuItem && selectedMenuItem.item_id == 1 && <ResourceUsage/> }


export default (props) => {	
	let [selectedMenuItem, setSelectedMenuItem] 	= React.useState(null)
	let [modal, setModal] 							= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 					= React.useGlobal("sideMenu")
	// { selectedMenuItem &&  (selectedMenuItem.item_id == 0) && <SystemInformation/> }
	// { selectedMenuItem &&  (selectedMenuItem.item_id == 1) && <ResourceUsage/> }
	// <SideMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />

	return (
		<main>
			<SideMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
			<div className="main-wrap level-left" style={{ width: sideMenu ? "calc(100% - 200px)" : "100%" }}>
			<div className={"main-content "} >
            { selectedMenuItem && selectedMenuItem.item_id == 0 && <CustomReport columns="User Name,Host,Account,Date"/> }
            { selectedMenuItem && selectedMenuItem.item_id == 1 && <CustomReport columns="User Name,Host,Source IP,Source MAC,Match Rate"/> }
			</div>
			</div>
		</main>
	)
		
}

