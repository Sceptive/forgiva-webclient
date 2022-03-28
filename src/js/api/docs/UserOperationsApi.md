# IntegratorApi.UserOperationsApi

All URIs are relative to *https://localhost:8443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postUserBackupExport**](UserOperationsApi.md#postUserBackupExport) | **POST** /user/backup/export | Exports metadatas as backup file
[**postUserBackupImport**](UserOperationsApi.md#postUserBackupImport) | **POST** /user/backup/import | Imports metadatas from backup file
[**postUserGenerate**](UserOperationsApi.md#postUserGenerate) | **POST** /user/generate | Generating password
[**postUserMetadataAdd**](UserOperationsApi.md#postUserMetadataAdd) | **POST** /user/metadata/add | Adding metadata
[**postUserMetadataBygroup**](UserOperationsApi.md#postUserMetadataBygroup) | **POST** /user/metadata/by_group | Retrieving metadata
[**postUserMetadataGroupAdd**](UserOperationsApi.md#postUserMetadataGroupAdd) | **POST** /user/metadata/group/add | Adding metadata group
[**postUserMetadataGroupRemove**](UserOperationsApi.md#postUserMetadataGroupRemove) | **POST** /user/metadata/group/remove | Removing metadata group
[**postUserMetadataGroups**](UserOperationsApi.md#postUserMetadataGroups) | **POST** /user/metadata/groups | Retrieving metadata groups
[**postUserMetadataHost**](UserOperationsApi.md#postUserMetadataHost) | **POST** /user/metadata/host | Retrieving metadata host
[**postUserMetadataRemove**](UserOperationsApi.md#postUserMetadataRemove) | **POST** /user/metadata/remove | Removing metadata
[**postUserMetadataSearch**](UserOperationsApi.md#postUserMetadataSearch) | **POST** /user/metadata/search | Searching metadata
[**postUserPasswordChange**](UserOperationsApi.md#postUserPasswordChange) | **POST** /user/password/change | Changing user&#39;s password
[**postUserSettingsGet**](UserOperationsApi.md#postUserSettingsGet) | **POST** /user/settings/get | Getting user&#39;s choices
[**postUserSettingsSet**](UserOperationsApi.md#postUserSettingsSet) | **POST** /user/settings/set | Setting user&#39;s choices



## postUserBackupExport

> OperationResult postUserBackupExport(opts)

Exports metadatas as backup file

This service exports metadatas both as group and whole. If succeeds returns base64 encoded string of JSON  data in resultData field in operationResult object. If no metadata group ID is specified then  returns all of user&#39;s metadatas. 

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserBackupExportRequest': new IntegratorApi.PostUserBackupExportRequest() // PostUserBackupExportRequest | 
};
apiInstance.postUserBackupExport(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserBackupExportRequest** | [**PostUserBackupExportRequest**](PostUserBackupExportRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserBackupImport

> OperationResult postUserBackupImport(opts)

Imports metadatas from backup file

This service imports metadatas exported from /user/backup/export service. 

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserBackupImportRequest': new IntegratorApi.PostUserBackupImportRequest() // PostUserBackupImportRequest | 
};
apiInstance.postUserBackupImport(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserBackupImportRequest** | [**PostUserBackupImportRequest**](PostUserBackupImportRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserGenerate

> PostUserGenerateResponse postUserGenerate(opts)

Generating password

Generates password specified with metadata, master password and visual confirmation data.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserGenerateRequest': new IntegratorApi.PostUserGenerateRequest() // PostUserGenerateRequest | 
};
apiInstance.postUserGenerate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserGenerateRequest** | [**PostUserGenerateRequest**](PostUserGenerateRequest.md)|  | [optional] 

### Return type

[**PostUserGenerateResponse**](PostUserGenerateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataAdd

> OperationResult postUserMetadataAdd(opts)

Adding metadata

Adds metadata to the specified group.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataAddRequest': new IntegratorApi.PostUserMetadataAddRequest() // PostUserMetadataAddRequest | 
};
apiInstance.postUserMetadataAdd(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataAddRequest** | [**PostUserMetadataAddRequest**](PostUserMetadataAddRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataBygroup

> PostUserMetadataBygroupResponse postUserMetadataBygroup(opts)

Retrieving metadata

Returns metadatas for the user.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataBygroupRequest': new IntegratorApi.PostUserMetadataBygroupRequest() // PostUserMetadataBygroupRequest | 
};
apiInstance.postUserMetadataBygroup(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataBygroupRequest** | [**PostUserMetadataBygroupRequest**](PostUserMetadataBygroupRequest.md)|  | [optional] 

### Return type

[**PostUserMetadataBygroupResponse**](PostUserMetadataBygroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataGroupAdd

> OperationResult postUserMetadataGroupAdd(opts)

Adding metadata group

Adds metadata group specified within the body

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataGroupAddRequest': new IntegratorApi.PostUserMetadataGroupAddRequest() // PostUserMetadataGroupAddRequest | 
};
apiInstance.postUserMetadataGroupAdd(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataGroupAddRequest** | [**PostUserMetadataGroupAddRequest**](PostUserMetadataGroupAddRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataGroupRemove

> OperationResult postUserMetadataGroupRemove(opts)

Removing metadata group

Removes metadata group specified with group id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataGroupRemoveRequest': new IntegratorApi.PostUserMetadataGroupRemoveRequest() // PostUserMetadataGroupRemoveRequest | 
};
apiInstance.postUserMetadataGroupRemove(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataGroupRemoveRequest** | [**PostUserMetadataGroupRemoveRequest**](PostUserMetadataGroupRemoveRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataGroups

> PostUserMetadataGroupsResponse postUserMetadataGroups(opts)

Retrieving metadata groups

Returns metadata groups for the user.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataGroupsRequest': new IntegratorApi.PostUserMetadataGroupsRequest() // PostUserMetadataGroupsRequest | 
};
apiInstance.postUserMetadataGroups(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataGroupsRequest** | [**PostUserMetadataGroupsRequest**](PostUserMetadataGroupsRequest.md)|  | [optional] 

### Return type

[**PostUserMetadataGroupsResponse**](PostUserMetadataGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataHost

> PostUserMetadataHostResponse postUserMetadataHost(opts)

Retrieving metadata host

Returns hosts (if specified) filtered

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataHostRequest': new IntegratorApi.PostUserMetadataHostRequest() // PostUserMetadataHostRequest | 
};
apiInstance.postUserMetadataHost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataHostRequest** | [**PostUserMetadataHostRequest**](PostUserMetadataHostRequest.md)|  | [optional] 

### Return type

[**PostUserMetadataHostResponse**](PostUserMetadataHostResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataRemove

> OperationResult postUserMetadataRemove(opts)

Removing metadata

Removes metadata specified with metadata id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataRemoveRequest': new IntegratorApi.PostUserMetadataRemoveRequest() // PostUserMetadataRemoveRequest | 
};
apiInstance.postUserMetadataRemove(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataRemoveRequest** | [**PostUserMetadataRemoveRequest**](PostUserMetadataRemoveRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserMetadataSearch

> PostUserMetadataSearchResponse postUserMetadataSearch(opts)

Searching metadata

Returns metadatas searched with &#39;criteria&#39;.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserMetadataSearchRequest': new IntegratorApi.PostUserMetadataSearchRequest() // PostUserMetadataSearchRequest | 
};
apiInstance.postUserMetadataSearch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserMetadataSearchRequest** | [**PostUserMetadataSearchRequest**](PostUserMetadataSearchRequest.md)|  | [optional] 

### Return type

[**PostUserMetadataSearchResponse**](PostUserMetadataSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserPasswordChange

> OperationResult postUserPasswordChange(opts)

Changing user&#39;s password

Changes user&#39;s password with specified ones and invalidates all active sessions.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserPasswordChangeRequest': new IntegratorApi.PostUserPasswordChangeRequest() // PostUserPasswordChangeRequest | 
};
apiInstance.postUserPasswordChange(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserPasswordChangeRequest** | [**PostUserPasswordChangeRequest**](PostUserPasswordChangeRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserSettingsGet

> PostUserSettingsGetResponse postUserSettingsGet(opts)

Getting user&#39;s choices

Getting user&#39;s custom settings set by user

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserSettingsGetRequest': new IntegratorApi.PostUserSettingsGetRequest() // PostUserSettingsGetRequest | 
};
apiInstance.postUserSettingsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserSettingsGetRequest** | [**PostUserSettingsGetRequest**](PostUserSettingsGetRequest.md)|  | [optional] 

### Return type

[**PostUserSettingsGetResponse**](PostUserSettingsGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUserSettingsSet

> OperationResult postUserSettingsSet(opts)

Setting user&#39;s choices

Setting user&#39;s custom setting value

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.UserOperationsApi();
let opts = {
  'postUserSettingsSetRequest': new IntegratorApi.PostUserSettingsSetRequest() // PostUserSettingsSetRequest | 
};
apiInstance.postUserSettingsSet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserSettingsSetRequest** | [**PostUserSettingsSetRequest**](PostUserSettingsSetRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

