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
import LogonState from './LogonState';

/**
 * The PostNewSessionResponse model module.
 * @module model/PostNewSessionResponse
 * @version 1.0
 */
class PostNewSessionResponse {
    /**
     * Constructs a new <code>PostNewSessionResponse</code>.
     * @alias module:model/PostNewSessionResponse
     */
    constructor() { 
        
        PostNewSessionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostNewSessionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostNewSessionResponse} obj Optional instance to populate.
     * @return {module:model/PostNewSessionResponse} The populated <code>PostNewSessionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostNewSessionResponse();

            if (data.hasOwnProperty('logonState')) {
                obj['logonState'] = LogonState.constructFromObject(data['logonState']);
            }
            if (data.hasOwnProperty('hshAlg')) {
                obj['hshAlg'] = ApiClient.convertToType(data['hshAlg'], 'String');
            }
            if (data.hasOwnProperty('hshSalt')) {
                obj['hshSalt'] = ApiClient.convertToType(data['hshSalt'], 'String');
            }
            if (data.hasOwnProperty('sessionPk')) {
                obj['sessionPk'] = ApiClient.convertToType(data['sessionPk'], 'String');
            }
            if (data.hasOwnProperty('newSessionId')) {
                obj['newSessionId'] = ApiClient.convertToType(data['newSessionId'], 'String');
            }
            if (data.hasOwnProperty('ldapEnabled')) {
                obj['ldapEnabled'] = ApiClient.convertToType(data['ldapEnabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LogonState} logonState
 */
PostNewSessionResponse.prototype['logonState'] = undefined;

/**
 * Hashing algorithm chosen by server required to get used by client to provide hashed data to  the server. 
 * @member {String} hshAlg
 */
PostNewSessionResponse.prototype['hshAlg'] = undefined;

/**
 * Unique salt value tied with session which will be required to get used with hash algorithm  on the client side. 
 * @member {String} hshSalt
 */
PostNewSessionResponse.prototype['hshSalt'] = undefined;

/**
 * Session public key to encrypt critical data.
 * @member {String} sessionPk
 */
PostNewSessionResponse.prototype['sessionPk'] = undefined;

/**
 * Returns null if sessionId is valid or new sessionId for renewal or initialization.
 * @member {String} newSessionId
 */
PostNewSessionResponse.prototype['newSessionId'] = undefined;

/**
 * Returns whether LDAP login is enabled or not
 * @member {Boolean} ldapEnabled
 */
PostNewSessionResponse.prototype['ldapEnabled'] = undefined;






export default PostNewSessionResponse;

