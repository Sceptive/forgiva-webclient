import React 	from 'reactn'
import SideMenu from './sideMenu'
import HostList from './userList'
import logoImg 	from '../../../img/logo.png'
import Search 	from '../../modals/search';
let Logo = ()=> <img src={logoImg} alt="sceptive" />


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

