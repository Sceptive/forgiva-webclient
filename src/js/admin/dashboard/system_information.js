import React from 'reactn'
import global_data from '../../global'
import ReactDom from 'react-dom'
import { PostAdminSysteminformationRequest } from '../../api/src/index'
import Wait from '../../modals/wait'

import FreeScrollBar from 'react-free-scrollbar'

export default (props) => {	

    let [systemInformation, setSystemInformation] 	= React.useGlobal("system_information")
    


    return(
        <div  style={{width: '100%', height: '100%'}} id="system_information">
            {!systemInformation &&
            <Wait title="Please wait.." description="Fetching system information" />
            }
            {systemInformation &&
                 <div>
                 <div className="system-information-title">
                 Operating System
                 </div>
                 <div className="system-information-description">
                 {systemInformation.operatingSystem}
                 </div>
                 <div className="system-information-title">
                 Processor Information
                 </div>
                 <div className="system-information-description">
                 {systemInformation.processorInformation}
                 </div>
                 <div className="system-information-title">
                 Time On System
                 </div>
                 <div className="system-information-description">
                 {systemInformation.timeOnSystem}
                 </div>
                 <div className="system-information-title">
                 System Uptime
                 </div>
                 <div className="system-information-description">
                 {systemInformation.systemUptime}
                 </div>
                 <div className="system-information-title">
                 Forgiva Version
                 </div>
                 <div className="system-information-description">
                 {systemInformation.forgivaVersion}
                 </div>
                 <div className="system-information-title">
                 Hostname
                 </div>
                 <div className="system-information-description">
                 {systemInformation.hostname}
                 </div>
                 <div className="system-information-title">
                 IP Configuration
                 </div>
                 <div className="system-information-description">
                 <table className="table" style={{width: '90%'}}>
                     <thead>
                         <tr>
                             <th>Device</th>
                             <th>IPv4</th>
                             <th>MAC</th>
                         </tr>
                     </thead>
                     <tbody>
                     {systemInformation.ipConfiguration.map((ipc,i) =>
                         <tr key={i}>
                             <td><b>{ipc.device}</b></td>
                             <td>{ipc.ipv4}</td>
                             <td>{ipc.mac}</td>
                         </tr>
                     )}
                     </tbody>
                 </table>
                 </div>
                 <div className="system-information-title">
                 Java Environment
                 </div>
                 <div className="system-information-description">
                 {systemInformation.javaEnvironment}
                 </div>
                 </div>
            }
            </div>
    

    );
}