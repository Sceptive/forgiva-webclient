import React from 'reactn'

export default props => {
	let [modal, setModal] = React.useGlobal("modal")
	
	React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) 
               setModal(null);
        };
        	document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

	return <div className="modal is-active">
		<div className="modal-background" onClick={() => setModal(null)}></div>
		<div className="modal-card">

			<div className="panel-heading">
				{props.title &&
					<h2 className="panel-title">
						{props.title}
					</h2>
				}
				{props.desc &&
					<p className="panel-desc">
						{props.desc}
					</p>
				}
			</div>

			<div className="panel-block">{props.children}</div>

			{(props.close || props.action) &&
				<footer className="modal-card-foot" style={props.footerTop ? { marginTop: props.footerTop } : {}}>
					{props.close &&
						<button className="button cancel-button" onClick={() => setModal(null)}>{props.cancelButtonName ? props.cancelButtonName : "Cancel"}</button>
					}
					{props.secondAction &&
						<button className={"button " + (props.delete ? "delete" : "submit") + "-button"}
							onClick={props.secondAction}>{props.secondActionName}</button>
					}
					{props.action &&
						<button className={"button " + (props.delete ? "delete" : "submit") + "-button"}
							onClick={props.action}>{props.actionName}</button>
					}

				</footer>
			}
		</div>
	</div>
}

