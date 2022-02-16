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
 * The PostAdminResourceusageResponseCpuUsageByHour model module.
 * @module model/PostAdminResourceusageResponseCpuUsageByHour
 * @version 1.0
 */
class PostAdminResourceusageResponseCpuUsageByHour {
    /**
     * Constructs a new <code>PostAdminResourceusageResponseCpuUsageByHour</code>.
     * @alias module:model/PostAdminResourceusageResponseCpuUsageByHour
     */
    constructor() { 
        
        PostAdminResourceusageResponseCpuUsageByHour.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAdminResourceusageResponseCpuUsageByHour</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdminResourceusageResponseCpuUsageByHour} obj Optional instance to populate.
     * @return {module:model/PostAdminResourceusageResponseCpuUsageByHour} The populated <code>PostAdminResourceusageResponseCpuUsageByHour</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdminResourceusageResponseCpuUsageByHour();

            if (data.hasOwnProperty('hour')) {
                obj['hour'] = ApiClient.convertToType(data['hour'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date-time in YYYY-mm-dd HH:MM format.
 * @member {String} hour
 */
PostAdminResourceusageResponseCpuUsageByHour.prototype['hour'] = undefined;

/**
 * @member {Number} percentage
 */
PostAdminResourceusageResponseCpuUsageByHour.prototype['percentage'] = undefined;






export default PostAdminResourceusageResponseCpuUsageByHour;

