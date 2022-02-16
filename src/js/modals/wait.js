import React 		from 'reactn'
import { Modal } 	from '../components'


export default props => {
	return (<Modal title={props.title}
		desc={props.description}>
		<div className="panel-block">
			<div className="progress">
				<div className="spinner"></div>
			</div>
		</div>
	</Modal>)
}