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
 * The MetadataGroup model module.
 * @module model/MetadataGroup
 * @version 1.0
 */
class MetadataGroup {
    /**
     * Constructs a new <code>MetadataGroup</code>.
     * Contains metadata group data specified with tree model.
     * @alias module:model/MetadataGroup
     */
    constructor() { 
        
        MetadataGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MetadataGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetadataGroup} obj Optional instance to populate.
     * @return {module:model/MetadataGroup} The populated <code>MetadataGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetadataGroup();

            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('groupName')) {
                obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
            }
            if (data.hasOwnProperty('parentGroupId')) {
                obj['parentGroupId'] = ApiClient.convertToType(data['parentGroupId'], 'String');
            }
            if (data.hasOwnProperty('groupDescription')) {
                obj['groupDescription'] = ApiClient.convertToType(data['groupDescription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique group id.
 * @member {String} groupId
 */
MetadataGroup.prototype['groupId'] = undefined;

/**
 * Group name such as 'Mail Accounts' or 'CRM Accounts'.
 * @member {String} groupName
 */
MetadataGroup.prototype['groupName'] = undefined;

/**
 * Parent group id.
 * @member {String} parentGroupId
 */
MetadataGroup.prototype['parentGroupId'] = undefined;

/**
 * Description of the group such as 'Internal mail accounts' or '3rd party CRM application accounts'.
 * @member {String} groupDescription
 */
MetadataGroup.prototype['groupDescription'] = undefined;






export default MetadataGroup;
