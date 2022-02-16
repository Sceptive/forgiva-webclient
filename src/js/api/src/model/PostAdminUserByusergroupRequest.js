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
 * The PostAdminUserByusergroupRequest model module.
 * @module model/PostAdminUserByusergroupRequest
 * @version 1.0
 */
class PostAdminUserByusergroupRequest {
    /**
     * Constructs a new <code>PostAdminUserByusergroupRequest</code>.
     * @alias module:model/PostAdminUserByusergroupRequest
     */
    constructor() { 
        
        PostAdminUserByusergroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAdminUserByusergroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdminUserByusergroupRequest} obj Optional instance to populate.
     * @return {module:model/PostAdminUserByusergroupRequest} The populated <code>PostAdminUserByusergroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdminUserByusergroupRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('userGroupId')) {
                obj['userGroupId'] = ApiClient.convertToType(data['userGroupId'], 'String');
            }
            if (data.hasOwnProperty('startIdx')) {
                obj['startIdx'] = ApiClient.convertToType(data['startIdx'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostAdminUserByusergroupRequest.prototype['header'] = undefined;

/**
 * User groupId contains other groups
 * @member {String} userGroupId
 */
PostAdminUserByusergroupRequest.prototype['userGroupId'] = undefined;

/**
 * Start index of the records. (Default is 0)
 * @member {Number} startIdx
 */
PostAdminUserByusergroupRequest.prototype['startIdx'] = undefined;

/**
 * Amount of records to return starting from startIdx. (Default is 100)
 * @member {Number} count
 */
PostAdminUserByusergroupRequest.prototype['count'] = undefined;






export default PostAdminUserByusergroupRequest;
