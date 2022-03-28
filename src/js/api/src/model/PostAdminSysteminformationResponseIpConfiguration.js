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
 * The PostAdminSysteminformationResponseIpConfiguration model module.
 * @module model/PostAdminSysteminformationResponseIpConfiguration
 * @version 1.0
 */
class PostAdminSysteminformationResponseIpConfiguration {
    /**
     * Constructs a new <code>PostAdminSysteminformationResponseIpConfiguration</code>.
     * @alias module:model/PostAdminSysteminformationResponseIpConfiguration
     */
    constructor() { 
        
        PostAdminSysteminformationResponseIpConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAdminSysteminformationResponseIpConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdminSysteminformationResponseIpConfiguration} obj Optional instance to populate.
     * @return {module:model/PostAdminSysteminformationResponseIpConfiguration} The populated <code>PostAdminSysteminformationResponseIpConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdminSysteminformationResponseIpConfiguration();

            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
            if (data.hasOwnProperty('ipv4')) {
                obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
            }
            if (data.hasOwnProperty('ipv6')) {
                obj['ipv6'] = ApiClient.convertToType(data['ipv6'], 'String');
            }
            if (data.hasOwnProperty('mac')) {
                obj['mac'] = ApiClient.convertToType(data['mac'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} device
 */
PostAdminSysteminformationResponseIpConfiguration.prototype['device'] = undefined;

/**
 * @member {String} ipv4
 */
PostAdminSysteminformationResponseIpConfiguration.prototype['ipv4'] = undefined;

/**
 * @member {String} ipv6
 */
PostAdminSysteminformationResponseIpConfiguration.prototype['ipv6'] = undefined;

/**
 * @member {String} mac
 */
PostAdminSysteminformationResponseIpConfiguration.prototype['mac'] = undefined;






export default PostAdminSysteminformationResponseIpConfiguration;

