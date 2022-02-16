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

/**
 * The PostLogin2faResponse model module.
 * @module model/PostLogin2faResponse
 * @version 1.0
 */
class PostLogin2faResponse {
    /**
     * Constructs a new <code>PostLogin2faResponse</code>.
     * @alias module:model/PostLogin2faResponse
     */
    constructor() { 
        
        PostLogin2faResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLogin2faResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLogin2faResponse} obj Optional instance to populate.
     * @return {module:model/PostLogin2faResponse} The populated <code>PostLogin2faResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLogin2faResponse();

            if (data.hasOwnProperty('authenticated')) {
                obj['authenticated'] = ApiClient.convertToType(data['authenticated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Points out whether authentication is succedded or not.
 * @member {Boolean} authenticated
 */
PostLogin2faResponse.prototype['authenticated'] = undefined;






export default PostLogin2faResponse;

