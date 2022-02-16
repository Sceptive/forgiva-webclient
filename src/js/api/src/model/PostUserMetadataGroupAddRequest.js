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
import MetadataGroup from './MetadataGroup';

/**
 * The PostUserMetadataGroupAddRequest model module.
 * @module model/PostUserMetadataGroupAddRequest
 * @version 1.0
 */
class PostUserMetadataGroupAddRequest {
    /**
     * Constructs a new <code>PostUserMetadataGroupAddRequest</code>.
     * @alias module:model/PostUserMetadataGroupAddRequest
     */
    constructor() { 
        
        PostUserMetadataGroupAddRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUserMetadataGroupAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserMetadataGroupAddRequest} obj Optional instance to populate.
     * @return {module:model/PostUserMetadataGroupAddRequest} The populated <code>PostUserMetadataGroupAddRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserMetadataGroupAddRequest();

            if (data.hasOwnProperty('group')) {
                obj['group'] = MetadataGroup.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MetadataGroup} group
 */
PostUserMetadataGroupAddRequest.prototype['group'] = undefined;

/**
 * @member {module:model/Header} header
 */
PostUserMetadataGroupAddRequest.prototype['header'] = undefined;






export default PostUserMetadataGroupAddRequest;

