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
import Header from './Header';

/**
 * The PostUserGenerateRequest model module.
 * @module model/PostUserGenerateRequest
 * @version 1.0
 */
class PostUserGenerateRequest {
    /**
     * Constructs a new <code>PostUserGenerateRequest</code>.
     * @alias module:model/PostUserGenerateRequest
     * @param metadataId {String} 
     * @param masterKey {String} Hex of encrypted master key with session public key.
     * @param visualConfirmation {String} Hex of the encrypted visual confirmation data with public session key.
     */
    constructor(metadataId, masterKey, visualConfirmation) { 
        
        PostUserGenerateRequest.initialize(this, metadataId, masterKey, visualConfirmation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, metadataId, masterKey, visualConfirmation) { 
        obj['metadataId'] = metadataId;
        obj['masterKey'] = masterKey;
        obj['visualConfirmation'] = visualConfirmation;
    }

    /**
     * Constructs a <code>PostUserGenerateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserGenerateRequest} obj Optional instance to populate.
     * @return {module:model/PostUserGenerateRequest} The populated <code>PostUserGenerateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserGenerateRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('metadataId')) {
                obj['metadataId'] = ApiClient.convertToType(data['metadataId'], 'String');
            }
            if (data.hasOwnProperty('masterKey')) {
                obj['masterKey'] = ApiClient.convertToType(data['masterKey'], 'String');
            }
            if (data.hasOwnProperty('visualConfirmation')) {
                obj['visualConfirmation'] = ApiClient.convertToType(data['visualConfirmation'], 'String');
            }
            if (data.hasOwnProperty('renewalDate')) {
                obj['renewalDate'] = ApiClient.convertToType(data['renewalDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostUserGenerateRequest.prototype['header'] = undefined;

/**
 * @member {String} metadataId
 */
PostUserGenerateRequest.prototype['metadataId'] = undefined;

/**
 * Hex of encrypted master key with session public key.
 * @member {String} masterKey
 */
PostUserGenerateRequest.prototype['masterKey'] = undefined;

/**
 * Hex of the encrypted visual confirmation data with public session key.
 * @member {String} visualConfirmation
 */
PostUserGenerateRequest.prototype['visualConfirmation'] = undefined;

/**
 * @member {String} renewalDate
 */
PostUserGenerateRequest.prototype['renewalDate'] = undefined;






export default PostUserGenerateRequest;

