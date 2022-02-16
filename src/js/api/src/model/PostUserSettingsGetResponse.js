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
 * The PostUserSettingsGetResponse model module.
 * @module model/PostUserSettingsGetResponse
 * @version 1.0
 */
class PostUserSettingsGetResponse {
    /**
     * Constructs a new <code>PostUserSettingsGetResponse</code>.
     * @alias module:model/PostUserSettingsGetResponse
     * @param value {String} Value of the setting queried by the key in request
     */
    constructor(value) { 
        
        PostUserSettingsGetResponse.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>PostUserSettingsGetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserSettingsGetResponse} obj Optional instance to populate.
     * @return {module:model/PostUserSettingsGetResponse} The populated <code>PostUserSettingsGetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserSettingsGetResponse();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Value of the setting queried by the key in request
 * @member {String} value
 */
PostUserSettingsGetResponse.prototype['value'] = undefined;






export default PostUserSettingsGetResponse;

