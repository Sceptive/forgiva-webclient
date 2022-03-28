# IntegratorApi.DefaultApi

All URIs are relative to *https://localhost:8443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postLogin**](DefaultApi.md#postLogin) | **POST** /login | Login
[**postLogin2fa**](DefaultApi.md#postLogin2fa) | **POST** /login2fa | Login with two-factor-authentication
[**postLogout**](DefaultApi.md#postLogout) | **POST** /logout | Logout
[**postNewSession**](DefaultApi.md#postNewSession) | **POST** /new_session | Initialization or validation of a session
[**postUser2faDisable**](DefaultApi.md#postUser2faDisable) | **POST** /user/2fa/disable | Disables 2FA
[**postUser2faEnable**](DefaultApi.md#postUser2faEnable) | **POST** /user/2fa/enable | Enables 2FA



## postLogin

> PostLoginResponse postLogin(opts)

Login

Actual logging-in web service holds single point authentication mechanism.

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.DefaultApi();
let opts = {
  'postLoginRequest': new IntegratorApi.PostLoginRequest() // PostLoginRequest | 
};
apiInstance.postLogin(opts, (error, data, response) => {
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
 **postLoginRequest** | [**PostLoginRequest**](PostLoginRequest.md)|  | [optional] 

### Return type

[**PostLoginResponse**](PostLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postLogin2fa

> PostLogin2faResponse postLogin2fa(opts)

Login with two-factor-authentication

Two-factor-authentication (2FA) code delivery web service. Not required by default if did not configured  on server side. 

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.DefaultApi();
let opts = {
  'postLogin2faRequest': new IntegratorApi.PostLogin2faRequest() // PostLogin2faRequest | 
};
apiInstance.postLogin2fa(opts, (error, data, response) => {
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
 **postLogin2faRequest** | [**PostLogin2faRequest**](PostLogin2faRequest.md)|  | [optional] 

### Return type

[**PostLogin2faResponse**](PostLogin2faResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postLogout

> postLogout(opts)

Logout

Logs out (and invalidates) session with sessionId

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.DefaultApi();
let opts = {
  'postLogoutRequest': new IntegratorApi.PostLogoutRequest() // PostLogoutRequest | 
};
apiInstance.postLogout(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postLogoutRequest** | [**PostLogoutRequest**](PostLogoutRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postNewSession

> PostNewSessionResponse postNewSession(opts)

Initialization or validation of a session

This service initializes session or validates it (by checking header object) and provides server  configuration values to the client. 

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.DefaultApi();
let opts = {
  'postNewSessionRequest': new IntegratorApi.PostNewSessionRequest() // PostNewSessionRequest | 
};
apiInstance.postNewSession(opts, (error, data, response) => {
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
 **postNewSessionRequest** | [**PostNewSessionRequest**](PostNewSessionRequest.md)|  | [optional] 

### Return type

[**PostNewSessionResponse**](PostNewSessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUser2faDisable

> OperationResult postUser2faDisable(opts)

Disables 2FA

Disables 2FA login with relating validation code. 

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.DefaultApi();
let opts = {
  'postUser2faDisableRequest': new IntegratorApi.PostUser2faDisableRequest() // PostUser2faDisableRequest | 
};
apiInstance.postUser2faDisable(opts, (error, data, response) => {
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
 **postUser2faDisableRequest** | [**PostUser2faDisableRequest**](PostUser2faDisableRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postUser2faEnable

> OperationResult postUser2faEnable(opts)

Enables 2FA

Enables 2FA login with setup key and relating validation code. Validation code is generated with soft token  generator app. such as Google Authenticator. 

### Example

```javascript
import IntegratorApi from 'integrator_api';

let apiInstance = new IntegratorApi.DefaultApi();
let opts = {
  'postUser2faEnableRequest': new IntegratorApi.PostUser2faEnableRequest() // PostUser2faEnableRequest | 
};
apiInstance.postUser2faEnable(opts, (error, data, response) => {
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
 **postUser2faEnableRequest** | [**PostUser2faEnableRequest**](PostUser2faEnableRequest.md)|  | [optional] 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

