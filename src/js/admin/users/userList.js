import React from 'reactn'
import Axios from 'axios';
import AddUser from "./addUser";
import UpdateUser from "./updateUser"
import DeleteUser from "./deleteUser"
import { PostAdminUserByusergroupRequest } from '../../api/src';
import global_data from '../../global'
import OutsideClickHandler from '../../components/OutsideClickHandler'

export default props => {
	
	let [users, setUsers] 		= React.useState([])
	let [total, setTotal] 		= React.useState(null)
	let [page, setPage] 		= React.useState(1)
	let [size, setSize] 		= React.useState(15)
	let [dropMenu, setDropMenu] = React.useState(null)
	let [modal, setModal] 		= React.useGlobal("modal")
	let [sideMenu] 				= React.useGlobal("sideMenu")

	let pages = []
	for (let i = 1; i <= Math.ceil(total / size); i++) {
		pages.push(i)
    };
    
    
	let updateUsers = () => {
		if (props.selectedGroup != null) {

            let req_nsr 		= new PostAdminUserByusergroupRequest()
            req_nsr.header 		= global_data.request_header;
            req_nsr.userGroupId = props.selectedGroup.userGroupId;
            req_nsr.startIdx    = (page - 1) * size;
            req_nsr.count       = size;

            // Get Users by user groups
            global_data.admin_api.postAdminUserByusergroup({
                'postAdminUserByusergroupRequest': req_nsr
            }, (error,postAdminUserByusergroupResponse, response) => {

                setUsers(postAdminUserByusergroupResponse.users);
                setTotal(postAdminUserByusergroupResponse.totalUserCount);
            });

        }
    };
    
	React.useEffect(() => {
		updateUsers()
    }, [props.selectedGroup, page, modal]);
    
   
	return (
		<div className="main-wrap level-left" style={{ width: sideMenu ? "calc(100% - 200px)" : "100%" }}>
			<div className={"main-content "} >
				<div className="main-top">
					<button className="button" onClick={() => setModal(<AddUser selectedGroup={props.selectedGroup} fUpdateUsers={updateUsers}/>)}>
						Add New <i className="add"></i>
					</button>
				</div>
				<div className="list-table">
					<div className="columns header" >
						<div className="column">Full name</div>
						<div className="column">User name</div>
						<div className="column">E-Mail</div>
						<div className="column">Last Login</div>
					</div>

					{users && users.map(user => {
						
						return (<div className={"columns row " } key={user.userName}>
							<div className="column" >{user.fullName}</div>
							<div className="column" >{user.userName}</div>
							<div className="column" >{user.email}</div>
							<div className="column" >{user.lastLogin} 
							
							<div className={"dropdown is-right " + (dropMenu == user.userId ? "is-active" : "")}>
							{!user.externalUser &&
									<div className="dropdown-trigger">
										<a onClick={() => setDropMenu(dropMenu == user.userId ? null : user.userId )}
											className="button" aria-controls="dropdown-menu">
											<span>...</span>
										</a>
									</div>
							}
							{dropMenu == user.userId  &&  !user.externalUser &&
							<>
									
									<OutsideClickHandler onOutsideClick={() => { setDropMenu(null)}}>
										<div className="dropdown-menu" id="dropdown-menu" role="menu">
											<div className="dropdown-content">
												<a onClick={() => { setDropMenu(null); setModal(<UpdateUser user={user}  fUpdateUsers={updateUsers} />) }}
													className="dropdown-item">
													Update
												</a>
												<a onClick={() => { setDropMenu(null); setModal(null) }}
													className="dropdown-item">
													Reset Password
												</a>
												<hr className="dropdown-divider" />
												<a onClick={() => { setDropMenu(null); setModal(<DeleteUser user={user} fUpdateUsers={updateUsers} />) }}
													className="dropdown-item hover-danger">
													Delete
											</a>
											</div>
										</div>
									</OutsideClickHandler>
							</>
							}
								</div>
							</div>
						
						</div>)
					})}
					<div className="columns">
					<div className="table-bottom">
						<div className="table-bottom-left">
                            {users &&
							<span>Items per page: <strong>{size}</strong> |   1 - {Math.min(size, users.length)} of {total} items</span>
                            }
						</div>
						<div className="table-bottom-right">
							<span>{page} of {pages.length} pages </span>
							<a onClick={() => { page > 1 ? setPage(page - 1) : setPage(page) }}
								className="button prev-button">
								<i className="next"></i>
							</a>
							<div className="select">
								<select value={page} onChange={(e) => setPage(e.target.value)}>
									{pages.map(x =>
										<option key={x}>
											{x}
										</option>)
									}
								</select>
							</div>
							<a onClick={() => { page < pages.length + 1 ? setPage(page + 1) : setPage(page) }}
								className="button next-button">
								<i className="prev"></i>
							</a>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>)
}