/**
 * IntegratorAPI
 * Forgiva Integrator API containing whole operations between Forgiva SuperClient and Integrator server traffic. It  can be used by any 3rd party clients. 
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
 * The PostNewSessionRequest model module.
 * @module model/PostNewSessionRequest
 * @version 1.0
 */
class PostNewSessionRequest {
    /**
     * Constructs a new <code>PostNewSessionRequest</code>.
     * @alias module:model/PostNewSessionRequest
     */
    constructor() { 
        
        PostNewSessionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostNewSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostNewSessionRequest} obj Optional instance to populate.
     * @return {module:model/PostNewSessionRequest} The populated <code>PostNewSessionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostNewSessionRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('clientPk')) {
                obj['clientPk'] = ApiClient.convertToType(data['clientPk'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostNewSessionRequest.prototype['header'] = undefined;

/**
 * Client public key for server to encrypt critical data to be sent to client.
 * @member {String} clientPk
 */
PostNewSessionRequest.prototype['clientPk'] = undefined;






export default PostNewSessionRequest;

