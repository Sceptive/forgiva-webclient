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


import ApiClient from "../ApiClient";
import OperationResult from '../model/OperationResult';
import PostUserGenerateRequest from '../model/PostUserGenerateRequest';
import PostUserGenerateResponse from '../model/PostUserGenerateResponse';
import PostUserMetadataAddRequest from '../model/PostUserMetadataAddRequest';
import PostUserMetadataBygroupRequest from '../model/PostUserMetadataBygroupRequest';
import PostUserMetadataBygroupResponse from '../model/PostUserMetadataBygroupResponse';
import PostUserMetadataGroupAddRequest from '../model/PostUserMetadataGroupAddRequest';
import PostUserMetadataGroupRemoveRequest from '../model/PostUserMetadataGroupRemoveRequest';
import PostUserMetadataGroupsRequest from '../model/PostUserMetadataGroupsRequest';
import PostUserMetadataGroupsResponse from '../model/PostUserMetadataGroupsResponse';
import PostUserMetadataHostRequest from '../model/PostUserMetadataHostRequest';
import PostUserMetadataHostResponse from '../model/PostUserMetadataHostResponse';
import PostUserMetadataRemoveRequest from '../model/PostUserMetadataRemoveRequest';
import PostUserMetadataSearchRequest from '../model/PostUserMetadataSearchRequest';
import PostUserMetadataSearchResponse from '../model/PostUserMetadataSearchResponse';
import PostUserPasswordChangeRequest from '../model/PostUserPasswordChangeRequest';
import PostUserSettingsGetRequest from '../model/PostUserSettingsGetRequest';
import PostUserSettingsGetResponse from '../model/PostUserSettingsGetResponse';
import PostUserSettingsSetRequest from '../model/PostUserSettingsSetRequest';

/**
* UserOperations service.
* @module api/UserOperationsApi
* @version 1.0
*/
export default class UserOperationsApi {

    /**
    * Constructs a new UserOperationsApi. 
    * @alias module:api/UserOperationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postUserGenerate operation.
     * @callback module:api/UserOperationsApi~postUserGenerateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserGenerateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generating password
     * Generates password specified with metadata, master password and visual confirmation data.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserGenerateRequest} opts.postUserGenerateRequest 
     * @param {module:api/UserOperationsApi~postUserGenerateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserGenerateResponse}
     */
    postUserGenerate(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserGenerateRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostUserGenerateResponse;
      return this.apiClient.callApi(
        '/user/generate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataAdd operation.
     * @callback module:api/UserOperationsApi~postUserMetadataAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adding metadata
     * Adds metadata to the specified group.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataAddRequest} opts.postUserMetadataAddRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResult}
     */
    postUserMetadataAdd(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataAddRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResult;
      return this.apiClient.callApi(
        '/user/metadata/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataBygroup operation.
     * @callback module:api/UserOperationsApi~postUserMetadataBygroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserMetadataBygroupResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieving metadata
     * Returns metadatas for the user.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataBygroupRequest} opts.postUserMetadataBygroupRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataBygroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserMetadataBygroupResponse}
     */
    postUserMetadataBygroup(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataBygroupRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostUserMetadataBygroupResponse;
      return this.apiClient.callApi(
        '/user/metadata/by_group', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataGroupAdd operation.
     * @callback module:api/UserOperationsApi~postUserMetadataGroupAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adding metadata group
     * Adds metadata group specified within the body
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataGroupAddRequest} opts.postUserMetadataGroupAddRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataGroupAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResult}
     */
    postUserMetadataGroupAdd(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataGroupAddRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResult;
      return this.apiClient.callApi(
        '/user/metadata/group/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataGroupRemove operation.
     * @callback module:api/UserOperationsApi~postUserMetadataGroupRemoveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removing metadata group
     * Removes metadata group specified with group id.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataGroupRemoveRequest} opts.postUserMetadataGroupRemoveRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataGroupRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResult}
     */
    postUserMetadataGroupRemove(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataGroupRemoveRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResult;
      return this.apiClient.callApi(
        '/user/metadata/group/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataGroups operation.
     * @callback module:api/UserOperationsApi~postUserMetadataGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserMetadataGroupsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieving metadata groups
     * Returns metadata groups for the user.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataGroupsRequest} opts.postUserMetadataGroupsRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserMetadataGroupsResponse}
     */
    postUserMetadataGroups(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataGroupsRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostUserMetadataGroupsResponse;
      return this.apiClient.callApi(
        '/user/metadata/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataHost operation.
     * @callback module:api/UserOperationsApi~postUserMetadataHostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserMetadataHostResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieving metadata host
     * Returns hosts (if specified) filtered
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataHostRequest} opts.postUserMetadataHostRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataHostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserMetadataHostResponse}
     */
    postUserMetadataHost(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataHostRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostUserMetadataHostResponse;
      return this.apiClient.callApi(
        '/user/metadata/host', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataRemove operation.
     * @callback module:api/UserOperationsApi~postUserMetadataRemoveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removing metadata
     * Removes metadata specified with metadata id.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataRemoveRequest} opts.postUserMetadataRemoveRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResult}
     */
    postUserMetadataRemove(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataRemoveRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResult;
      return this.apiClient.callApi(
        '/user/metadata/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserMetadataSearch operation.
     * @callback module:api/UserOperationsApi~postUserMetadataSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserMetadataSearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searching metadata
     * Returns metadatas searched with 'criteria'.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserMetadataSearchRequest} opts.postUserMetadataSearchRequest 
     * @param {module:api/UserOperationsApi~postUserMetadataSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserMetadataSearchResponse}
     */
    postUserMetadataSearch(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserMetadataSearchRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostUserMetadataSearchResponse;
      return this.apiClient.callApi(
        '/user/metadata/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserPasswordChange operation.
     * @callback module:api/UserOperationsApi~postUserPasswordChangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Changing user's password
     * Changes user's password with specified ones and invalidates all active sessions.
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserPasswordChangeRequest} opts.postUserPasswordChangeRequest 
     * @param {module:api/UserOperationsApi~postUserPasswordChangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResult}
     */
    postUserPasswordChange(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserPasswordChangeRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResult;
      return this.apiClient.callApi(
        '/user/password/change', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserSettingsGet operation.
     * @callback module:api/UserOperationsApi~postUserSettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostUserSettingsGetResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Getting user's choices
     * Getting user's custom settings set by user
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserSettingsGetRequest} opts.postUserSettingsGetRequest 
     * @param {module:api/UserOperationsApi~postUserSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostUserSettingsGetResponse}
     */
    postUserSettingsGet(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserSettingsGetRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PostUserSettingsGetResponse;
      return this.apiClient.callApi(
        '/user/settings/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postUserSettingsSet operation.
     * @callback module:api/UserOperationsApi~postUserSettingsSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setting user's choices
     * Setting user's custom setting value
     * @param {Object} opts Optional parameters
     * @param {module:model/PostUserSettingsSetRequest} opts.postUserSettingsSetRequest 
     * @param {module:api/UserOperationsApi~postUserSettingsSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationResult}
     */
    postUserSettingsSet(opts, callback) {
      opts = opts || {};
      let postBody = opts['postUserSettingsSetRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OperationResult;
      return this.apiClient.callApi(
        '/user/settings/set', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
