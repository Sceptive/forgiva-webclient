import React 	from 'reactn'

import DashBoard 	from './dashboard'
import Users		from './users'
import Reports		from './reports'
import logoImg 				from '../../svg/logo_admin.svg'
import { exact } from 'prop-types'
import etc 			from '../etc'
import { PostAdminSysteminformationRequest } from '../api/src'
import OutsideClickHandler from '../components/OutsideClickHandler'
import global_data from '../global'
import Wait 	   from '../modals/wait'

let Logo = ()=> <img src={logoImg} alt="sceptive" style={{ height: '27px'}} />


export default (props) => {	
	let [selectedMenuItem, setSelectedMenuItem] 	= React.useState(null)
	let [modal, setModal] 							= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 					= React.useGlobal("sideMenu")
	let [dropMenu, setDropMenu] 					= React.useState(null)
	let [selectedAdminTab, setSelectedAdminTab] 	= React.useState(null)
	let [systemInformation, setSystemInformation] 	= React.useGlobal("system_information")
	let [fetchingSI, setFetchingSI]					= React.useState(false)


	React.useEffect(() => {

		if (systemInformation == null) {

			let req_nsr 		= new PostAdminSysteminformationRequest();
			req_nsr.header 		= global_data.request_header;
		
			setFetchingSI(true);
			// Get System Information
			global_data.admin_api.postAdminSysteminformation({
				'postAdminSysteminformationRequest': req_nsr
			}, (error,postAdminSysteminformationResponse, response) => {
		
		
				if (error) {
					//render_error("Could not connect to server. Please try again.");
				} else {
		
					setSystemInformation(postAdminSysteminformationResponse);
					if (systemInformation != null) {
						console.log(systemInformation.enabledFeatures);
					}

				}

				setFetchingSI(false);

				if(selectedAdminTab == null){
					setSelectedAdminTab("dashboard")
				}
		

			});

		}


	

		
	}, [selectedAdminTab,systemInformation]);
	

	

	return( 
		<>
		<div className={"admin-home body-wrap " + (modal ? "is-blur" : "") } >
			<header className="admin">
				<a className="hamburger-menu" onClick={() => setSideMenu(!sideMenu)}></a>
				<div className="logo-wrap" >
						<div className="logo"><Logo /> </div>
				</div>
				{!fetchingSI &&
				<div className="header-right">
					<div className={"dropdown is-right " + (dropMenu == 1 ? "is-active" : "")}>
									<button className="user-button" aria-controls="dropdown-menu"
											onClick={() => setDropMenu(1)}/>
									{dropMenu &&
										<OutsideClickHandler onOutsideClick={() => { setDropMenu(null)}}>
										<div className="dropdown-menu" id="dropdown-menu" role="menu">
											<div className="dropdown-content">
												<a onClick={() => { setDropMenu(null);
												 etc.logout((per,resp)=>{ window.location.reload(false);}); }} className="dropdown-item">
													Logout
												</a>
											
											</div>
										</div>
										</OutsideClickHandler>
										}
					</div>
				</div>
				}
		
				{!fetchingSI &&
				<>
				{/*
					//TODO: Reporting will be implemented
				 <div className={"header-right "+(selectedAdminTab == "reports" ? "active" : "") }>				
					<a className="top-menu-item " onClick={()=> {setSelectedAdminTab("reports")}}>Reports</a>
				</div> */}
				<div className={"header-right "+(selectedAdminTab == "users" ? "active" : "") }>				
					<a className="top-menu-item " onClick={()=> {setSelectedAdminTab("users")}}>Users</a>
				</div>
				<div className={"header-right "+(selectedAdminTab == "dashboard" ? "active" : "") }>				
					<a className="top-menu-item " onClick={()=> {setSelectedAdminTab("dashboard")}}>Dashboard</a>
				</div>
				</>
				}
			</header>
			{fetchingSI &&
				<Wait title="Please wait.." description="Fetching system information" />
			}
			
			{!fetchingSI && selectedAdminTab && selectedAdminTab == "dashboard" &&
				<DashBoard/>
			}
			{!fetchingSI && selectedAdminTab && selectedAdminTab == "users" &&
				<Users/>
			}
			{/* //TODO: Reporting will be implemented
				{!fetchingSI && selectedAdminTab && selectedAdminTab == "reports" &&
				<Reports/>
			} */}

			
		</div>
		{modal}

		</>
		)
}


