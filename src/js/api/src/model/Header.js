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

/**
 * The Header model module.
 * @module model/Header
 * @version 1.0
 */
class Header {
    /**
     * Constructs a new <code>Header</code>.
     * @alias module:model/Header
     */
    constructor() { 
        
        Header.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Header</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Header} obj Optional instance to populate.
     * @return {module:model/Header} The populated <code>Header</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Header();

            if (data.hasOwnProperty('sessionId')) {
                obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
            }
            if (data.hasOwnProperty('clientAgent')) {
                obj['clientAgent'] = ApiClient.convertToType(data['clientAgent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} sessionId
 */
Header.prototype['sessionId'] = undefined;

/**
 * @member {String} clientAgent
 */
Header.prototype['clientAgent'] = undefined;






export default Header;

