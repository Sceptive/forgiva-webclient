import React from 'reactn'
import { ErrorField, Modal } from '../../components'
import global_data from '../../global'
import { PostAdminUsergroupAddRequest, UserGroup } from '../../api/src'


export default props => {
	let [groupName, setGroupName]           = React.useState("");
	let [parentGroupId, setParentGroupId]   = React.useState(0)
	let [error, setError]                   = React.useState(null)
	let [adding, setAdding]                 = React.useState(false)
	let [modal, setModal]                   = React.useGlobal("modal")


	let addGroup =  () => {
		setAdding(true)
		try {

            let req_nsr 		= new PostAdminUsergroupAddRequest();
            req_nsr.header 		= global_data.request_header;

            let ug              = new UserGroup();
            ug.parentUserGroupId = Number(parentGroupId);
			ug.userGroupName     = groupName;
			
			req_nsr.group 		 = ug;
            
            // Get System Information
            global_data.admin_api.postAdminUsergroupAdd({
                'postAdminUsergroupAddRequest': req_nsr
            }, (error,operationResult, response) => {


                setAdding(false);
                if (operationResult.error != null) {
                    setError(operationResult.error);

                } else {
					props.fUpdateGroups();
                    setModal(null);
                }
    
            });

		} catch (e) {
			setError(e.message)
		}
    }
    
	return (<Modal title="Add New User Group" desc="Please enter user group details"
		action={addGroup} actionName="Save" close={true} >
		<div className="columns">
			<div className="field column">
				<div className="control">
					<label className="label">Parent Group</label>
					<div className="select" style={{ width: "100%" }}>
						<select style={{ width: "100%" }}
							value={parentGroupId} onChange={e => setParentGroupId(e.target.value)}>
							<option value={0}>(Empty)</option>
							{props.groups && props.groups.map(g =>
								<option key={g.userGroupId} value={g.userGroupId}>{g.userGroupName}</option>
							)}

						</select>
					</div>
				</div>
			</div>
		</div>
		<div className="field">
			<label className="label is-success">Group Name</label>
			<div className="control">
				<input className="input" value={groupName}
					onChange={e => setGroupName(e.target.value)} />
			</div>
		</div>

		{adding &&
			<div className="panel-block">
				<div className="progress">
					<div className="spinner"></div>
				</div>
			</div>
		}
		{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}
	</Modal>)
}