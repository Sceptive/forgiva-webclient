
import React from 'reactn'
import { Modal } from '../components'

export default props => {
	let { password } = props
	let [modal,setModal] = React.useGlobal("modal")

	return (<Modal action={() => setModal(null)} actionName="Close" footerTop={20} >
		<div className="field" style={{ margin: 40 }}>
			<label>Generated Password</label>
			<div className="control has-text-centered" style={{marginTop: 20}}>
				<div className="generated-pass">
					{password}
				</div>
			</div>
		</div>
	</Modal>)
}