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
 * The LogonState model module.
 * @module model/LogonState
 * @version 1.0
 */
class LogonState {
    /**
     * Constructs a new <code>LogonState</code>.
     * @alias module:model/LogonState
     */
    constructor() { 
        
        LogonState.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogonState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogonState} obj Optional instance to populate.
     * @return {module:model/LogonState} The populated <code>LogonState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogonState();

            if (data.hasOwnProperty('authenticated')) {
                obj['authenticated'] = ApiClient.convertToType(data['authenticated'], 'Boolean');
            }
            if (data.hasOwnProperty('isAdmin')) {
                obj['isAdmin'] = ApiClient.convertToType(data['isAdmin'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * If client is already authenticated returns true.
 * @member {Boolean} authenticated
 */
LogonState.prototype['authenticated'] = undefined;

/**
 * Return true if user has administrator rights.
 * @member {Boolean} isAdmin
 */
LogonState.prototype['isAdmin'] = undefined;






export default LogonState;
