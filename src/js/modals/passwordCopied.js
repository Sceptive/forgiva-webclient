import React from 'reactn'
import { Modal } from '../components'
import Clipboard from 'react-clipboard';


export default props => {

	navigator.clipboard.writeText(props.password);

	return (<Modal>
		<div className="panel-block" style={{ margin: 40 }}>
			<h3 className="panel-message has-text-centered margin-large">
				Generated Password Copied To Clipboard
				</h3>
		</div>
	</Modal>)
}