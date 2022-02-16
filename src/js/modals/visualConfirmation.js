import React from 'reactn'
import { Modal } from '../components'
import ReactSVG from 'react-svg'
import PasswordView from './passwordView';
import PasswordCopied from './passwordCopied';
import { ErrorField } from '../components'

import global_data from '../global'
import { PostUserGenerateRequest } from '../api/src'
import fhash from '../crypto/fhash'
import etc from '../etc'

let animalImages = {
	spider: require("../../svg/animals/spider.svg"),
	zebra: require("../../svg/animals/zebra.svg"),
	wolf: require("../../svg/animals/wolf.svg"),
	whale: require("../../svg/animals/whale.svg"),
	wasp: require("../../svg/animals/wasp.svg"),
	shark: require("../../svg/animals/shark.svg"),
	rat: require("../../svg/animals/rat.svg"),
	panda: require("../../svg/animals/panda.svg"),
	lion: require("../../svg/animals/lion.svg"),
	hyena: require("../../svg/animals/hyena.svg"),
	fox: require("../../svg/animals/fox.svg"),
	duck: require("../../svg/animals/duck.svg"),
	dog: require("../../svg/animals/dog.svg"),
	crow: require("../../svg/animals/crow.svg"),
	cat: require("../../svg/animals/cat.svg"),
	bear: require("../../svg/animals/bear.svg"),
	turtle: require("../../svg/animals/turtle.svg"),
	gull: require("../../svg/animals/gull.svg"),
	bat: require("../../svg/animals/bat.svg"),
	ape: require("../../svg/animals/ape.svg")
}
let animals = Object.keys(animalImages)

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}



export default props => {
	let [showPassword, setShowPassword] = React.useState(false)
	let [animalRows, setAnimalRows] = React.useState([])
	let [modal, setModal] = React.useGlobal("modal")
	let [isWaiting, setIsWaiting] = React.useState(false)
	let [error, setError] = React.useState(null)

	React.useEffect(() => {
		let randomAnimals = [[], [], [], []]
		shuffle(animals).forEach((name, i) => {
			randomAnimals[Math.ceil((i + 1) / 5) - 1].push(name)
		})
		setAnimalRows(randomAnimals)
	}, [])


	let confirm = (animal) => {

		let req_nsr 		= new PostUserGenerateRequest();
		req_nsr.header 		= global_data.request_header;
		req_nsr.metadataId	= props.metadataId;

	
		let masterKey_hash			   = fhash(global_data.session_params.hshAlg,
			etc.fg_hex_to_ui8arr(global_data.session_params.hshSalt),
			etc.fg_str_to_ui8arr(props.master));
		req_nsr.masterKey				= etc.fg_encrypt_for_session(masterKey_hash);

		req_nsr.visualConfirmation	= animal;
	
		// renewalDate ??

		setIsWaiting(true)
		// Push for generation

		global_data.user_api.postUserGenerate({
			'postUserGenerateRequest': req_nsr
		}, (error, postUserGenerateResponse, response) => {

			let operationResult = postUserGenerateResponse.result;

			// PostUserGenerateResponse
			if (operationResult.error != null) {
				setError(operationResult.error);
				setIsWaiting(false);
			} else {

				
				let val = postUserGenerateResponse.generatedPassword;
							
				let password_encrypted_ui8arr = etc.fg_hex_to_ui8arr(val);

				let password_plain = 
					etc.fg_ui8arr_to_str(
					etc.fg_hex_to_ui8arr(
					etc.fg_decrypt_for_session(password_encrypted_ui8arr)));

				if (showPassword) {
					setModal(<PasswordView password={password_plain} />)
				}
				else {
					setModal(<PasswordCopied password={password_plain} />)
				}				
			}

		});
	
	}

	return (<Modal title={isWaiting ? "Generating" : "Visual Confirmation"} 
								desc={isWaiting ? "Processing metadatas.." : "Please choose your favourite animal."} >
		{isWaiting &&
			<div className="panel-block">
				<div className="progress">
						<div className="spinner"></div>
				</div>
			</div>}
		{error && <ErrorField close={() => setError(null)} >{error}</ErrorField>}

		{(!error && !isWaiting) && <>
			{animalRows.map((row,i)=>
				<div key={i} className="columns" style={{margin: 3}}>
					{row.map((name, i) =>
						<div onClick={() => confirm(name)} key={name} className="column" style={{padding: 0}}>
							<ReactSVG className="animal" src={animalImages[name]}></ReactSVG>
						</div>)}
				</div>)}
			<label className="checkbox">
				<input type="checkbox" value={showPassword}
					onChange={e => setShowPassword(e.target.value)} />
				<div className="checkmark" onClick={() => setShowPassword(!showPassword)} ></div>
				Show generated password
			</label>
		</>}
	</Modal>)
}