import React from 'react'


export default props => {




    return (
    <div className="toolbar" style={{width: '100%', height: '50px',   background: '#3D70B2'}}>
        <nav className="toolbar__navigation" style={{display: 'flex', padding: '10px 10px'}}>
            <div style={{width: '300px', height: '30px', background: 'white'}}> 
               <div style={{}}>
                  
                   <input className="input search-input" style={{height: '30px'}}
					onChange={e => { props.fnSearch(e.target.value);}} placeholder="Search" />
               </div>
            </div>
            <div style={{ width: '100%'}}>
                <div style={{marginLeft: '20px', marginRight: '20px', height: '30px', lineHeight: '30px', float: 'right', color:'white', fontWeight: 600}}>
                    Print
                </div>
                <div className="settings" style={{ float: "right"}} ></div>
            </div>
        </nav>
    </div>
    )
}
