import React 		from 'reactn'
import { Modal } 	from '../components'


export default props => {
	return (<Modal title="Generating password"
		desc="Please wait while your password is getting generated">
		<div className="panel-block">
			<div className="progress">
				<div className="spinner"></div>
			</div>
		</div>
	</Modal>)
}