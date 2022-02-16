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
import User from './User';

/**
 * The PostAdminUserAddRequest model module.
 * @module model/PostAdminUserAddRequest
 * @version 1.0
 */
class PostAdminUserAddRequest {
    /**
     * Constructs a new <code>PostAdminUserAddRequest</code>.
     * @alias module:model/PostAdminUserAddRequest
     * @param user {module:model/User} 
     */
    constructor(user) { 
        
        PostAdminUserAddRequest.initialize(this, user);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user) { 
        obj['user'] = user;
    }

    /**
     * Constructs a <code>PostAdminUserAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdminUserAddRequest} obj Optional instance to populate.
     * @return {module:model/PostAdminUserAddRequest} The populated <code>PostAdminUserAddRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdminUserAddRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = User.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('userGroupId')) {
                obj['userGroupId'] = ApiClient.convertToType(data['userGroupId'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostAdminUserAddRequest.prototype['header'] = undefined;

/**
 * @member {module:model/User} user
 */
PostAdminUserAddRequest.prototype['user'] = undefined;

/**
 * User group id to add into.
 * @member {Number} userGroupId
 */
PostAdminUserAddRequest.prototype['userGroupId'] = undefined;

/**
 * Hash of password encrypted with session public key.
 * @member {String} password
 */
PostAdminUserAddRequest.prototype['password'] = undefined;






export default PostAdminUserAddRequest;

