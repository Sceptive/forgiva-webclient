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
import Host from './Host';

/**
 * The PostAdminHostAddRequest model module.
 * @module model/PostAdminHostAddRequest
 * @version 1.0
 */
class PostAdminHostAddRequest {
    /**
     * Constructs a new <code>PostAdminHostAddRequest</code>.
     * @alias module:model/PostAdminHostAddRequest
     */
    constructor() { 
        
        PostAdminHostAddRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAdminHostAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAdminHostAddRequest} obj Optional instance to populate.
     * @return {module:model/PostAdminHostAddRequest} The populated <code>PostAdminHostAddRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAdminHostAddRequest();

            if (data.hasOwnProperty('host')) {
                obj['host'] = Host.constructFromObject(data['host']);
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = Header.constructFromObject(data['header']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Host} host
 */
PostAdminHostAddRequest.prototype['host'] = undefined;

/**
 * @member {module:model/Header} header
 */
PostAdminHostAddRequest.prototype['header'] = undefined;






export default PostAdminHostAddRequest;

