# IntegratorApi.AdministratorOperationsApi

All URIs are relative to *https://localhost:8443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAdminApplicationAdd**](AdministratorOperationsApi.md#postAdminApplicationAdd) | **POST** /admin/application/add | Adding a new application
[**postAdminApplicationRemove**](AdministratorOperationsApi.md#postAdminApplicationRemove) | **POST** /admin/application/remove | Removing application
[**postAdminApplicationUpdate**](AdministratorOperationsApi.md#postAdminApplicationUpdate) | **POST** /admin/application/update | Updating application
[**postAdminApplications**](AdministratorOperationsApi.md#postAdminApplications) | **POST** /admin/applications/by_host | Getting applications
[**postAdminHostAdd**](AdministratorOperationsApi.md#postAdminHostAdd) | **POST** /admin/host/add | Adding host
[**postAdminHostRemove**](AdministratorOperationsApi.md#postAdminHostRemove) | **POST** /admin/host/remove | Removing host
[**postAdminHostUpdate**](AdministratorOperationsApi.md#postAdminHostUpdate) | **POST** /admin/host/update | Updating host
[**postAdminHosts**](AdministratorOperationsApi.md#postAdminHosts) | **POST** /admin/hosts | Getting hosts
[**postAdminReports**](AdministratorOperationsApi.md#postAdminReports) | **POST** /admin/reports | Listing available reports
[**postAdminResourceusage**](AdministratorOperationsApi.md#postAdminResourceusage) | **POST** /admin/resource_usage | Getting resource usage data
[**postAdminSysteminformation**](AdministratorOperationsApi.md#postAdminSysteminformation) | **POST** /admin/system_information | Getting server system information
[**postAdminUserAdd**](AdministratorOperationsApi.md#postAdminUserAdd) | **POST** /admin/user/add | Adding a new user
[**postAdminUserByusergroup**](AdministratorOperationsApi.md#postAdminUserByusergroup) | **POST** /admin/user/by_user_group | Getting users by user group id
[**postAdminUserRemove**](AdministratorOperationsApi.md#postAdminUserRemove) | **POST** /admin/user/remove | Removing user
[**postAdminUserUpdate**](AdministratorOperationsApi.md#postAdminUserUpdate) | **POST** /admin/user/update | Updating user
[**postAdminUsergroupAdd**](AdministratorOperationsApi.md#postAdminUsergroupAdd) | **POST** /admin/user_group/add | Adding user group
[**postAdminUsergroupRemove**](AdministratorOperationsApi.md#postAdminUsergroupRemove) | **POST** /admin/user_group/remove | Removing user group
[**postAdminUsergroupUpdate**](AdministratorOperationsApi.md#postAdminUsergroupUpdate) | **POST** /admin/user_group/update | Updating user group
[**postAdminUsergroups**](AdministratorOperationsApi.md#postAdminUsergroups) | **POST** /admin/user_groups | Getting user groups



## postAdminApplicationAdd

> OperationResult postAdminApplicationAdd(opts)

Adding a new application

Adds a new application described within the post body.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminApplicationAddRequest': new IntegratorApi.PostAdminApplicationAddRequest() // PostAdminApplicationAddRequest | 
};
apiInstance.postAdminApplicationAdd(opts, (error, data, response) => {
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
 **postAdminApplicationAddRequest** | [**PostAdminApplicationAddRequest**](PostAdminApplicationAddRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminApplicationRemove

> OperationResult postAdminApplicationRemove(opts)

Removing application

Removes application given in the body with application id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminApplicationRemoveRequest': new IntegratorApi.PostAdminApplicationRemoveRequest() // PostAdminApplicationRemoveRequest | 
};
apiInstance.postAdminApplicationRemove(opts, (error, data, response) => {
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
 **postAdminApplicationRemoveRequest** | [**PostAdminApplicationRemoveRequest**](PostAdminApplicationRemoveRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminApplicationUpdate

> OperationResult postAdminApplicationUpdate(opts)

Updating application

Updates application specified within the body tagged with application id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminApplicationUpdateRequest': new IntegratorApi.PostAdminApplicationUpdateRequest() // PostAdminApplicationUpdateRequest | 
};
apiInstance.postAdminApplicationUpdate(opts, (error, data, response) => {
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
 **postAdminApplicationUpdateRequest** | [**PostAdminApplicationUpdateRequest**](PostAdminApplicationUpdateRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminApplications

> PostAdminApplicationsResponse postAdminApplications(opts)

Getting applications

Return applications.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminApplicationsRequest': new IntegratorApi.PostAdminApplicationsRequest() // PostAdminApplicationsRequest | 
};
apiInstance.postAdminApplications(opts, (error, data, response) => {
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
 **postAdminApplicationsRequest** | [**PostAdminApplicationsRequest**](PostAdminApplicationsRequest.md)|  | [optional] 

### Return type

[**PostAdminApplicationsResponse**](PostAdminApplicationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminHostAdd

> OperationResult postAdminHostAdd(opts)

Adding host

Adds host specified within the body

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminHostAddRequest': new IntegratorApi.PostAdminHostAddRequest() // PostAdminHostAddRequest | 
};
apiInstance.postAdminHostAdd(opts, (error, data, response) => {
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
 **postAdminHostAddRequest** | [**PostAdminHostAddRequest**](PostAdminHostAddRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminHostRemove

> OperationResult postAdminHostRemove(opts)

Removing host

Removes host specified with host id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminHostRemoveRequest': new IntegratorApi.PostAdminHostRemoveRequest() // PostAdminHostRemoveRequest | 
};
apiInstance.postAdminHostRemove(opts, (error, data, response) => {
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
 **postAdminHostRemoveRequest** | [**PostAdminHostRemoveRequest**](PostAdminHostRemoveRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminHostUpdate

> OperationResult postAdminHostUpdate(opts)

Updating host

Updates host specified within the body tagged with host id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminHostUpdateRequest': new IntegratorApi.PostAdminHostUpdateRequest() // PostAdminHostUpdateRequest | 
};
apiInstance.postAdminHostUpdate(opts, (error, data, response) => {
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
 **postAdminHostUpdateRequest** | [**PostAdminHostUpdateRequest**](PostAdminHostUpdateRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminHosts

> PostAdminHostsResponse postAdminHosts(opts)

Getting hosts

Return hosts.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminHostsRequest': new IntegratorApi.PostAdminHostsRequest() // PostAdminHostsRequest | 
};
apiInstance.postAdminHosts(opts, (error, data, response) => {
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
 **postAdminHostsRequest** | [**PostAdminHostsRequest**](PostAdminHostsRequest.md)|  | [optional] 

### Return type

[**PostAdminHostsResponse**](PostAdminHostsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminReports

> PostAdminReportsResponse postAdminReports(opts)

Listing available reports

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminReportsRequest': new IntegratorApi.PostAdminReportsRequest() // PostAdminReportsRequest | 
};
apiInstance.postAdminReports(opts, (error, data, response) => {
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
 **postAdminReportsRequest** | [**PostAdminReportsRequest**](PostAdminReportsRequest.md)|  | [optional] 

### Return type

[**PostAdminReportsResponse**](PostAdminReportsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminResourceusage

> PostAdminResourceusageResponse postAdminResourceusage(opts)

Getting resource usage data

Returns resource usage data on the fly

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminResourceusageRequest': new IntegratorApi.PostAdminResourceusageRequest() // PostAdminResourceusageRequest | 
};
apiInstance.postAdminResourceusage(opts, (error, data, response) => {
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
 **postAdminResourceusageRequest** | [**PostAdminResourceusageRequest**](PostAdminResourceusageRequest.md)|  | [optional] 

### Return type

[**PostAdminResourceusageResponse**](PostAdminResourceusageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminSysteminformation

> PostAdminSysteminformationResponse postAdminSysteminformation(opts)

Getting server system information

Returns system information data

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminSysteminformationRequest': new IntegratorApi.PostAdminSysteminformationRequest() // PostAdminSysteminformationRequest | 
};
apiInstance.postAdminSysteminformation(opts, (error, data, response) => {
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
 **postAdminSysteminformationRequest** | [**PostAdminSysteminformationRequest**](PostAdminSysteminformationRequest.md)|  | [optional] 

### Return type

[**PostAdminSysteminformationResponse**](PostAdminSysteminformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUserAdd

> OperationResult postAdminUserAdd(opts)

Adding a new user

Adds a new user described within the post body.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUserAddRequest': new IntegratorApi.PostAdminUserAddRequest() // PostAdminUserAddRequest | 
};
apiInstance.postAdminUserAdd(opts, (error, data, response) => {
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
 **postAdminUserAddRequest** | [**PostAdminUserAddRequest**](PostAdminUserAddRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUserByusergroup

> PostAdminUserByusergroupResponse postAdminUserByusergroup(opts)

Getting users by user group id

Returns user data by group id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUserByusergroupRequest': new IntegratorApi.PostAdminUserByusergroupRequest() // PostAdminUserByusergroupRequest | 
};
apiInstance.postAdminUserByusergroup(opts, (error, data, response) => {
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
 **postAdminUserByusergroupRequest** | [**PostAdminUserByusergroupRequest**](PostAdminUserByusergroupRequest.md)|  | [optional] 

### Return type

[**PostAdminUserByusergroupResponse**](PostAdminUserByusergroupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUserRemove

> OperationResult postAdminUserRemove(opts)

Removing user

Removes user given in the body with user id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUserRemoveRequest': new IntegratorApi.PostAdminUserRemoveRequest() // PostAdminUserRemoveRequest | 
};
apiInstance.postAdminUserRemove(opts, (error, data, response) => {
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
 **postAdminUserRemoveRequest** | [**PostAdminUserRemoveRequest**](PostAdminUserRemoveRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUserUpdate

> OperationResult postAdminUserUpdate(opts)

Updating user

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUserUpdateRequest': new IntegratorApi.PostAdminUserUpdateRequest() // PostAdminUserUpdateRequest | 
};
apiInstance.postAdminUserUpdate(opts, (error, data, response) => {
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
 **postAdminUserUpdateRequest** | [**PostAdminUserUpdateRequest**](PostAdminUserUpdateRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUsergroupAdd

> OperationResult postAdminUsergroupAdd(opts)

Adding user group

Adds group specified within the body

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUsergroupAddRequest': new IntegratorApi.PostAdminUsergroupAddRequest() // PostAdminUsergroupAddRequest | 
};
apiInstance.postAdminUsergroupAdd(opts, (error, data, response) => {
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
 **postAdminUsergroupAddRequest** | [**PostAdminUsergroupAddRequest**](PostAdminUsergroupAddRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUsergroupRemove

> OperationResult postAdminUsergroupRemove(opts)

Removing user group

Removes user group specified with group id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUsergroupRemoveRequest': new IntegratorApi.PostAdminUsergroupRemoveRequest() // PostAdminUsergroupRemoveRequest | 
};
apiInstance.postAdminUsergroupRemove(opts, (error, data, response) => {
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
 **postAdminUsergroupRemoveRequest** | [**PostAdminUsergroupRemoveRequest**](PostAdminUsergroupRemoveRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUsergroupUpdate

> OperationResult postAdminUsergroupUpdate(opts)

Updating user group

Updates user group specified within the body tagged with group id.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUsergroupUpdateRequest': new IntegratorApi.PostAdminUsergroupUpdateRequest() // PostAdminUsergroupUpdateRequest | 
};
apiInstance.postAdminUsergroupUpdate(opts, (error, data, response) => {
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
 **postAdminUsergroupUpdateRequest** | [**PostAdminUsergroupUpdateRequest**](PostAdminUsergroupUpdateRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postAdminUsergroups

> PostAdminUsergroupsResponse postAdminUsergroups(opts)

Getting user groups

Return user groups.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.AdministratorOperationsApi();
let opts = {
  'postAdminUsergroupsRequest': new IntegratorApi.PostAdminUsergroupsRequest() // PostAdminUsergroupsRequest | 
};
apiInstance.postAdminUsergroups(opts, (error, data, response) => {
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
 **postAdminUsergroupsRequest** | [**PostAdminUsergroupsRequest**](PostAdminUsergroupsRequest.md)|  | [optional] 

### Return type

[**PostAdminUsergroupsResponse**](PostAdminUsergroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

