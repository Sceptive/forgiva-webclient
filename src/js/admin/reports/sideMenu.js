import React from 'reactn'

let MenuItem = ({selectedMenuItem, setSelectedMenuItem, item}) => {
	let active =  selectedMenuItem && 
					(selectedMenuItem.item_id === item.item_id  || 
						selectedMenuItem.item_id === item.item_id)
	let hasSub = item.subs != null && item.subs.length > 0
	return (<li key={item.item_id} className={(active ? " active ":" ")} >
		<a className={(hasSub ? "is-parent " : "")}
			onClick={()=>  {setSelectedMenuItem(item)}}>{item.item_name}</a>
		{(hasSub && active) &&
			<ul>
				{item.subs.map(sub => <li key={sub.item_id}>
					<a className={(selectedMenuItem === sub ? "active ":" ") } 
						onClick={()=> {setSelectedMenuItem(sub)}}>
						{sub.item_name}
					</a>
					</li>)}
			</ul>}
	</li> )
}

export default props => {
	let {selectedMenuItem, setSelectedMenuItem} 	= props
	let [modal, setModal] 							= React.useGlobal("modal")
	let [sideMenu, setSideMenu] 					= React.useGlobal('sideMenu')

    let items = [
        {
            item_id: 0,
            item_name: 'Vulnerable Logins',
            subs: []
        },
        {
            item_id: 1,
            item_name: 'Vulnerable Bio-Profiles',
            subs: []
        },
        // {
        //     item_id: 2,
        //     item_name: 'Failed Access Attempts',
        //     subs: []
        // },
        // {
        //     item_id: 3,
        //     item_name: 'Discovered Metadata',
        //     subs: []
        // }
    ];


	React.useEffect(() => {
		if(selectedMenuItem == null){
            setSelectedMenuItem(items[0])
		}
	}, [selectedMenuItem, items])
    
  
	if(!sideMenu) return(<div/>)
	else
	return (<div className={"aside level-left"}>
		<ul className="menu">
			{items.map(x => <MenuItem key={x.item_id} item={x} 
				selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />)}
                
		</ul>
		<div className="aside-footer">

		</div>
	</div>)
}