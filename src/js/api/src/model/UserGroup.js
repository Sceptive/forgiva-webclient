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
 * The UserGroup model module.
 * @module model/UserGroup
 * @version 1.0
 */
class UserGroup {
    /**
     * Constructs a new <code>UserGroup</code>.
     * Contains users group data specified with tree model.
     * @alias module:model/UserGroup
     */
    constructor() { 
        
        UserGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserGroup} obj Optional instance to populate.
     * @return {module:model/UserGroup} The populated <code>UserGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroup();

            if (data.hasOwnProperty('userGroupId')) {
                obj['userGroupId'] = ApiClient.convertToType(data['userGroupId'], 'String');
            }
            if (data.hasOwnProperty('userGroupName')) {
                obj['userGroupName'] = ApiClient.convertToType(data['userGroupName'], 'String');
            }
            if (data.hasOwnProperty('parentUserGroupId')) {
                obj['parentUserGroupId'] = ApiClient.convertToType(data['parentUserGroupId'], 'String');
            }
            if (data.hasOwnProperty('userGroupDescription')) {
                obj['userGroupDescription'] = ApiClient.convertToType(data['userGroupDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} userGroupId
 */
UserGroup.prototype['userGroupId'] = undefined;

/**
 * @member {String} userGroupName
 */
UserGroup.prototype['userGroupName'] = undefined;

/**
 * @member {String} parentUserGroupId
 */
UserGroup.prototype['parentUserGroupId'] = undefined;

/**
 * @member {String} userGroupDescription
 */
UserGroup.prototype['userGroupDescription'] = undefined;






export default UserGroup;

