import React from 'reactn'
import Axios from 'axios';
import { PostAdminUserByusergroupRequest } from '../../api/src';
import global_data from '../../global'

import Toolbar from '../../components/toolbar'

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
    
    // console.log("Total: "+total+" Pages: "+pages.size);

	// let updateUsers = () => {
	// 	if (props.selectedGroup != null) {

    //         let req_nsr 		= new PostAdminUserByusergroupRequest()
    //         req_nsr.header 		= global_data.request_header;
    //         req_nsr.userGroupId = props.selectedGroup.userGroupId;
    //         req_nsr.startIdx    = (page - 1) * size;
    //         req_nsr.count       = size;

    //         // Get System Information
    //         global_data.admin_api.postAdminUserByusergroup({
    //             'postAdminUserByusergroupRequest': req_nsr
    //         }, (error,postAdminUserByusergroupResponse, response) => {

    //             setUsers(postAdminUserByusergroupResponse.users);
    //             setTotal(postAdminUserByusergroupResponse.totalUserCount);
    //         });

    //     }
    // };
    
	// React.useEffect(() => {
	// 	updateUsers()
    // }, [props.selectedGroup, page, modal]);
    

    let columns_arr = props.columns.split(",");


	return (
		<div className="main-wrap level-left" style={{ width:  "100%" }}>
			<div className={"main-content "} >
				<div className="main-top">
					{/* <button className="button">
						Add New <i className="add"></i>
					</button> */
					}
					<Toolbar/>
				</div>
				
				
				<div className="list-table">
					<div className="columns header" >
                        {columns_arr && columns_arr.map((clmn,i) => 
						<div className="column">{clmn}</div>)
                        }
					</div>

					{/*users && users.map(user => {
						
						return (<div className={"columns row " } key={user.userName}>
							<div className="column" >{user.fullName}</div>
							<div className="column" >{user.userName}</div>
							<div className="column" >{user.email}</div>
							<div className="column" >{user.lastLogin}</div>
						
						</div>)
					})*/}
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