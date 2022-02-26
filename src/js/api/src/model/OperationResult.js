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
 * The OperationResult model module.
 * @module model/OperationResult
 * @version 1.0
 */
class OperationResult {
    /**
     * Constructs a new <code>OperationResult</code>.
     * @alias module:model/OperationResult
     */
    constructor() { 
        
        OperationResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OperationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OperationResult} obj Optional instance to populate.
     * @return {module:model/OperationResult} The populated <code>OperationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OperationResult();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
            if (data.hasOwnProperty('resultData')) {
                obj['resultData'] = ApiClient.convertToType(data['resultData'], 'String');
            }
            if (data.hasOwnProperty('affectedRecords')) {
                obj['affectedRecords'] = ApiClient.convertToType(data['affectedRecords'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * In case of any error returns error message.
 * @member {String} error
 */
OperationResult.prototype['error'] = undefined;

/**
 * For any additional info message may need to get shown to the user
 * @member {String} info
 */
OperationResult.prototype['info'] = undefined;

/**
 * Any data related with operation result if available
 * @member {String} resultData
 */
OperationResult.prototype['resultData'] = undefined;

/**
 * In case of any data operation this returns id's of records. On adding new data this returns new record ids
 * @member {Array.<String>} affectedRecords
 */
OperationResult.prototype['affectedRecords'] = undefined;






export default OperationResult;

