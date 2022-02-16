import React from 'reactn'

export default props =><div className="field">
		<div className="notify notify-error">
			<div className="notify-title">Error</div>
			<div className="notify-desc">{props.children}</div>
			<div className="close" onClick={props.close}></div>
		</div>
	</div>