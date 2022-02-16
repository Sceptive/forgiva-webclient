import JSSHA    from './sha/jssha'
import BLAKE2B  from './blake2b/blake2b'
import SM3      from './sm3/sm3'
import assert   from 'minimalistic-assert'
import { string } from 'prop-types'
import etc      from '../etc'


var hash = (_algorithm,_salt,_in) => {

    if (_algorithm.toUpperCase() === "SHA-512"
        || _algorithm.toUpperCase() === "SHA-384"
        || _algorithm.toUpperCase() === "SHA-256"
        || _algorithm.toUpperCase() === "SHA3-256" 
        || _algorithm.toUpperCase() === "SHA3-384"
        || _algorithm.toUpperCase() === "SHA3-512") {
        var jssha = new JSSHA(_algorithm.toUpperCase(), "UINT8ARRAY");
        jssha.update(_salt);
        jssha.update(_in);
        return jssha.getHash('UINT8ARRAY');
    }
    else if (_algorithm.toUpperCase() === "BLAKE2B-256" 
        || _algorithm.toUpperCase() === "BLAKE2B-384"
        || _algorithm.toUpperCase() === "BLAKE2B-512") {

        const o_len = Number(_algorithm.split("-")[1])/8;

        var blake2b_ctx  = BLAKE2B.blake2bInit(o_len);
        BLAKE2B.blake2bUpdate(blake2b_ctx, _salt);
        BLAKE2B.blake2bUpdate(blake2b_ctx, _in);
        return BLAKE2B.blake2bFinal(blake2b_ctx);
    }
    else if (_algorithm.toUpperCase() === "SM3") {
        return new SM3().update(_salt).update(_in).digest();
    }
}



export default (alg, alg_salt, input) => {

    assert(typeof alg === 'string' &&
    alg_salt instanceof Uint8Array &&
        input   instanceof Uint8Array,
        "Invalid types for hashing");


    var tmp_input = input;
    alg.split('+').forEach(element => {

        tmp_input = hash(alg,alg_salt,tmp_input);

    });


    return tmp_input;

}