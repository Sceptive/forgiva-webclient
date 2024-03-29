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
 * The PostUserMetadataBygroupRequest model module.
 * @module model/PostUserMetadataBygroupRequest
 * @version 1.0
 */
class PostUserMetadataBygroupRequest {
    /**
     * Constructs a new <code>PostUserMetadataBygroupRequest</code>.
     * @alias module:model/PostUserMetadataBygroupRequest
     */
    constructor() { 
        
        PostUserMetadataBygroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostUserMetadataBygroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostUserMetadataBygroupRequest} obj Optional instance to populate.
     * @return {module:model/PostUserMetadataBygroupRequest} The populated <code>PostUserMetadataBygroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostUserMetadataBygroupRequest();

            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
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
PostUserMetadataBygroupRequest.prototype['header'] = undefined;

/**
 * Group id contains metadatas.
 * @member {String} groupId
 */
PostUserMetadataBygroupRequest.prototype['groupId'] = undefined;

/**
 * Start index of the records. (Default is 0)
 * @member {Number} startIdx
 */
PostUserMetadataBygroupRequest.prototype['startIdx'] = undefined;

/**
 * Amount of records to return starting from startIdx. (Default is 100)
 * @member {Number} count
 */
PostUserMetadataBygroupRequest.prototype['count'] = undefined;






export default PostUserMetadataBygroupRequest;

