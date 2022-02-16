/**
 * IntegratorAPI
 * Forgiva Integrator API containing whole operations between Forgiva SuperClient and Integrator server traffic. It can be used by any 3rd party clients.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: root@sceptive.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OperationResult from './OperationResult';

/**
 * The PostUserGenerateResponse model module.
 * @module model/PostUserGenerateResponse
 * @version 1.0
 */
class PostUserGenerateResponse {
    /**
     * Constructs a new <code>PostUserGenerateResponse</code>.
     * @alias module:model/PostUserGenerateResponse
     * @param result {module:model/OperationResult} 
     * @param generatedPassword {String} Generated password in hex representation.
     */
    constructor(result, generatedPassword) { 
        
        PostUserGenerateResponse.initialize(this, result, generatedPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, result, generatedPassword) { 
        obj['result'] = result;
        obj['generatedPassword'] = generatedPassword;
    }

    /**
     * Constructs a <code>PostUserGenerateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserGenerateResponse} obj Optional instance to populate.
     * @return {module:model/PostUserGenerateResponse} The populated <code>PostUserGenerateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserGenerateResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = OperationResult.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('generatedPassword')) {
                obj['generatedPassword'] = ApiClient.convertToType(data['generatedPassword'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OperationResult} result
 */
PostUserGenerateResponse.prototype['result'] = undefined;

/**
 * Generated password in hex representation.
 * @member {String} generatedPassword
 */
PostUserGenerateResponse.prototype['generatedPassword'] = undefined;






export default PostUserGenerateResponse;

