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
 * The PostUserMetadataRemoveRequest model module.
 * @module model/PostUserMetadataRemoveRequest
 * @version 1.0
 */
class PostUserMetadataRemoveRequest {
    /**
     * Constructs a new <code>PostUserMetadataRemoveRequest</code>.
     * @alias module:model/PostUserMetadataRemoveRequest
     * @param metadataId {String} 
     */
    constructor(metadataId) { 
        
        PostUserMetadataRemoveRequest.initialize(this, metadataId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, metadataId) { 
        obj['metadataId'] = metadataId;
    }

    /**
     * Constructs a <code>PostUserMetadataRemoveRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserMetadataRemoveRequest} obj Optional instance to populate.
     * @return {module:model/PostUserMetadataRemoveRequest} The populated <code>PostUserMetadataRemoveRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserMetadataRemoveRequest();

            if (data.hasOwnProperty('metadataId')) {
                obj['metadataId'] = ApiClient.convertToType(data['metadataId'], 'String');
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} metadataId
 */
PostUserMetadataRemoveRequest.prototype['metadataId'] = undefined;

/**
 * @member {module:model/Header} header
 */
PostUserMetadataRemoveRequest.prototype['header'] = undefined;






export default PostUserMetadataRemoveRequest;

