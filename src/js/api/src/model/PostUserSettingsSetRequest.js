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
 * The PostUserSettingsSetRequest model module.
 * @module model/PostUserSettingsSetRequest
 * @version 1.0
 */
class PostUserSettingsSetRequest {
    /**
     * Constructs a new <code>PostUserSettingsSetRequest</code>.
     * @alias module:model/PostUserSettingsSetRequest
     */
    constructor() { 
        
        PostUserSettingsSetRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUserSettingsSetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserSettingsSetRequest} obj Optional instance to populate.
     * @return {module:model/PostUserSettingsSetRequest} The populated <code>PostUserSettingsSetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserSettingsSetRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostUserSettingsSetRequest.prototype['header'] = undefined;

/**
 * Setting key
 * @member {String} key
 */
PostUserSettingsSetRequest.prototype['key'] = undefined;

/**
 * Setting value to get saved
 * @member {String} value
 */
PostUserSettingsSetRequest.prototype['value'] = undefined;






export default PostUserSettingsSetRequest;

