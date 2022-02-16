import React from 'reactn'


export default props => {
	let [bits, setBits] = React.useState(0)
	let [show,setShow] = React.useState()


	
	React.useEffect(() => {
		if(props.value === "")
			setBits(0)
		else {
	
			const NUMBERS = 10;
    		const LOWERCASE = 26;
    		const UPPERCASE = 26;
    		const SYMBOLS = 32;
    		const SPACE = 1;
    		const TAB = 1;
	    	const OTHER = 1; // this is an arbitrary value, other values could be much higher


			let charTypes = [0,0,0,0,0,0,0]
			let b = 0
			props.value.split("").forEach(c => {
				if("1234567890".includes(c))
					charTypes[0] = 1;
				else if("qwertyuıopğüasdfghjklşizxcvbnmöç".includes(c))
					charTypes[1] = 1;
				else if("QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ".includes(c))
					charTypes[2] = 1;
				else if('`~!@#$%^&*()_+{}|:\"<>?-=[]\;\'.\/,'.includes(c))
					charTypes[3] = 1;
				else if(" ".includes(c))
					charTypes[4] = 1;
				else if("\t".includes(c))
					charTypes[5] = 1;
				else charTypes[6] = 1;
			})


			let numCombinations = (charTypes[0] * NUMBERS) + (charTypes[1] * LOWERCASE) +
                      (charTypes[2] * UPPERCASE) + (charTypes[3] * SYMBOLS) +
                      (charTypes[4] * SPACE) + (charTypes[5] * TAB) +
                      (charTypes[6] * OTHER);

			numCombinations = Math.pow(numCombinations, props.value.length);
			let numBits 		= Math.floor(Math.log(numCombinations) / Math.log(2));
	
			setBits(numBits)

			/*
			  long double combs = fobj_strength_calc::num_combinations(getText());
	double bit_count = fobj_strength_calc::num_bits(combs);
	*/
		}
	}, [props.value])

	let handleKeyPress = (event) => {
		if (props.onEnter != null) {
			if(event.key === 'Enter'){
				props.onEnter();
			}
		}
	};



	return (<div className="field">
		<label className={"label " + (props.success ? "is-success" : "" ) }>{props.label}</label>
		<div className="control">
				<input className="input password" type={show ? "text" : "password"}
					value={props.value } 
					onChange={e => props.onChange(e.target.value) }
					placeholder={props.placeholder} 
					autoFocus={props.autoFocus}
					onKeyPress={e => handleKeyPress(e)} 
					/>
				<div onClick={() => setShow(!show)} className={show ? "eye-off" : "eye-on"}>
					<span className="bits">{bits + " bits"}</span>
				</div>
		</div>
	</div>)
}