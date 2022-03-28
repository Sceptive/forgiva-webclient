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
import Header from './Header';

/**
 * The PostUserMetadataGroupsRequest model module.
 * @module model/PostUserMetadataGroupsRequest
 * @version 1.0
 */
class PostUserMetadataGroupsRequest {
    /**
     * Constructs a new <code>PostUserMetadataGroupsRequest</code>.
     * @alias module:model/PostUserMetadataGroupsRequest
     */
    constructor() { 
        
        PostUserMetadataGroupsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUserMetadataGroupsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserMetadataGroupsRequest} obj Optional instance to populate.
     * @return {module:model/PostUserMetadataGroupsRequest} The populated <code>PostUserMetadataGroupsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserMetadataGroupsRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostUserMetadataGroupsRequest.prototype['header'] = undefined;






export default PostUserMetadataGroupsRequest;

