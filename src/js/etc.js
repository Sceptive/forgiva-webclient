import global_data  from './global'
import assert       from 'minimalistic-assert'
import nacl         from './crypto/nacl.min'
import React, { useEffect, useState } from "react";

function fg_ui8arr_to_hex(uint8arr) {
    if (!uint8arr) {
        return '';
    }
        
    var hexStr = '';
    for (var i = 0; i < uint8arr.length; i++) {
        var hex = (uint8arr[i] & 0xff).toString(16);
        hex = (hex.length === 1) ? '0' + hex : hex;
        hexStr += hex;
    }
    
    return hexStr.toLowerCase();
}

function fg_ui8arr_to_str(uint8arr) {

    return new TextDecoder("utf-8").decode(uint8arr);
}

function fg_hex_to_ui8arr(hex_string) {
    return Uint8Array.from(Buffer.from(hex_string,'hex'));
}

function fg_str_to_ui8arr(plain_string) {
    return Uint8Array.from(Buffer.from(plain_string, 'utf-8'));
}

function fg_encrypt_for_session(data) {

    assert(data instanceof Uint8Array,
        "Invalid types for encryption");


    let session_server_public_key  = fg_hex_to_ui8arr(global_data.session_params.sessionPk);
    let session_client_private_key = global_data.nacl_keys.secretKey;

  
    let empty_nonce 	= new Uint8Array(24);
    empty_nonce.fill(0);
    let nonce_header 	= "00000000000000000000000000000000";

    // crypto_box'ed password
    let ret_data		= nonce_header+fg_ui8arr_to_hex(nacl.box(data,empty_nonce, session_server_public_key, session_client_private_key))
    

    // console.log("Server public key: "+fg_ui8arr_to_hex(session_server_public_key)+"\n"
    //             +"Client pr. key   : "+fg_ui8arr_to_hex(session_client_private_key)+"\n"
    //             +"Client pub. key  : "+fg_ui8arr_to_hex(global_data.nacl_keys.publicKey));

    return ret_data;
}

function fg_decrypt_for_session(data) {

    assert(data instanceof Uint8Array,
        "Invalid types for encryption");


    // TODO Nonces will be set and security should get improved 

    let session_server_public_key  = fg_hex_to_ui8arr(global_data.session_params.sessionPk);
    let session_client_private_key = global_data.nacl_keys.secretKey;

  
    let empty_nonce 	= new Uint8Array(24);
    empty_nonce.fill(0);
                            
    
    let ret_data		= fg_ui8arr_to_hex(nacl.box.open(data.subarray(16)
                                ,empty_nonce, 
                                session_server_public_key,
                                session_client_private_key))
    
    // console.log("From: "+fg_ui8arr_to_hex(data)+"\n"+
    //             "To:   "+ret_data    
    // );

    // console.log("Server public key: "+fg_ui8arr_to_hex(session_server_public_key)+"\n"
    //             +"Client pr. key   : "+fg_ui8arr_to_hex(session_client_private_key)+"\n"
    //             +"Client pub. key  : "+fg_ui8arr_to_hex(global_data.nacl_keys.publicKey));

    return ret_data;
}


function logout() {
    localStorage["session_id"] = null;
    global_data.request_header = null;
    global_data.session_params = null;
    global_data.nacl_keys      = null;
    global_data.is_admin       = false;

    
    window.location.reload(false);
}

function get_window_dimensions() {

    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height
    };
  }
  
function window_dimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        get_window_dimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(get_window_dimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
  

exports.window_dimensions       = window_dimensions;
exports.fg_hex_to_ui8arr        = fg_hex_to_ui8arr;
exports.fg_ui8arr_to_hex        = fg_ui8arr_to_hex;
exports.fg_str_to_ui8arr        = fg_str_to_ui8arr;
exports.fg_encrypt_for_session  = fg_encrypt_for_session;
exports.fg_decrypt_for_session  = fg_decrypt_for_session;
exports.fg_ui8arr_to_str        = fg_ui8arr_to_str;
exports.logout                  = logout;
