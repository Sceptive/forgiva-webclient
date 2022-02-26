import React 	from 'reactn'
import SideMenu from './sideMenu'
import HostList from './userList'



export default (props) => {	
	let [selectedGroup, setSelectedGroup] 	= React.useState(null)
	let [modal, setModal] 					= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 			= React.useGlobal("sideMenu")

	return( 
		
				<main>
					<SideMenu selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />	
					{selectedGroup && 
						<HostList selectedGroup={selectedGroup} />
					}
				</main>
		)
}

