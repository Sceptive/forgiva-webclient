import React from 'reactn'
import { ErrorField, Modal, AsyncSelect, Slider } from '../components'

import global_data from '../global'
import { PostUserMetadataAddRequest, Metadata } from '../api/src'

export default props => {
	let [complexity, setComplexity]     = React.useState(1)
	let [length, setLength]             = React.useState(16)

    let setSetting = (key,value) => {

    }

    let getSetting = (key) => {

    }


    


    return (<>
    <div style={{ margin: '10px', width: '100%', height: '299px'}}>
                    <div className="columns checkbox">
                        <div className="field" >
                            <label className="checkbox">
                            <input type="checkbox" value={getSetting('amko')}
                                onChange={e => setSetting('amko',true)}  />
                            <div className="checkmark" onClick={() => setSetting('amko','a')}></div>
                            Ask master key once when regenerating password
                            </label>
                        </div>
                    </div>
                    <div className="columns checkbox">
                        <div className="field" >
                        <label className="checkbox">
                            <input type="checkbox" value={getSetting('amko')}
                                onChange={e => setSetting('amko',true)}  />
                            <div className="checkmark" onClick={() => setSetting('amko','a')}></div>
                            Use my login password as master key (Less secure)
                        </label>
                        </div>
                    </div>
                    <div className="columns checkbox">
                        <div className="field" >
                        <label className="checkbox">
                            <input type="checkbox" value={getSetting('amko')}
                                onChange={e => setSetting('amko',true)}  />
                            <div className="checkmark" onClick={() => setSetting('amko','a')}></div>
                            Do not scramble animal positions randomly (Less secure)
                        </label>
                        </div>
                    </div>
                    <div className="columns checkbox">
                        <div className="field" >
                        <label className="checkbox">
                            <input type="checkbox" value={getSetting('amko')}
                                onChange={e => setSetting('amko',true)}  />
                            <div className="checkmark" onClick={() => setSetting('amko','a')}></div>
                            Always show passwords rather than copying to clipboard
                        </label>
                        </div>
                    </div>           
                    <div className="columns">

                    </div>
                    <div className="columns">
                        <div className="field column is-half">
                            <label className="label">Default Complexity</label>
                            <div className="has-text-centered">
                                <div className="steps editable">
                                    <div onClick={() => setComplexity(1)} className={"step " + (complexity >= 1 ? "active" : "")}></div>
                                    <div onClick={() => setComplexity(2)} className={"step " + (complexity >= 2 ? "active" : "")}></div>
                                    <div onClick={() => setComplexity(3)} className={"step " + (complexity >= 3 ? "active" : "")}></div>
                                </div>
                            </div>
                        </div>
                        <div className="field column is-two-fifths">
                            <label className="label">Default Password Length</label>
                            <div className="has-text-centered">
                                <label style={{ float: 'left', marginLeft: -15, marginTop: 2, fontSize: 12 }} >1</label>
                                <label style={{ float: 'right', marginRight: -16, marginTop: 2, fontSize: 12 }} >32</label>
                                <Slider min={1} max={32} value={length} onChange={e => setLength(e)}
                                    handleStyle={{ backgroundColor: '#3D70B2', border: 'none', width: 24, height: 24 }}
                                    railStyle={{ backgroundColor: '#8897A2', marginTop: 4 }}
                                    trackStyle={{ backgroundColor: '#3D70B2', marginTop: 4 }} />

                            </div>
                        </div>
                        <div className="field column">
                            <label className="label"
                                style={{ borderBottom: "1px solid grey", height: 50, paddingTop: 25, textAlign: 'center' }}>
                                {length}
                            </label>
                        </div>
                    </div>        
                    </div>                 
                    </> 
         );
}