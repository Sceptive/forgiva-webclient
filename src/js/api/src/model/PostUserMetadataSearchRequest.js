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
 * The PostUserMetadataSearchRequest model module.
 * @module model/PostUserMetadataSearchRequest
 * @version 1.0
 */
class PostUserMetadataSearchRequest {
    /**
     * Constructs a new <code>PostUserMetadataSearchRequest</code>.
     * @alias module:model/PostUserMetadataSearchRequest
     * @param criteria {String} Criteria to search within metadatas.
     */
    constructor(criteria) { 
        
        PostUserMetadataSearchRequest.initialize(this, criteria);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, criteria) { 
        obj['criteria'] = criteria;
    }

    /**
     * Constructs a <code>PostUserMetadataSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserMetadataSearchRequest} obj Optional instance to populate.
     * @return {module:model/PostUserMetadataSearchRequest} The populated <code>PostUserMetadataSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserMetadataSearchRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Header} header
 */
PostUserMetadataSearchRequest.prototype['header'] = undefined;

/**
 * Criteria to search within metadatas.
 * @member {String} criteria
 */
PostUserMetadataSearchRequest.prototype['criteria'] = undefined;






export default PostUserMetadataSearchRequest;
