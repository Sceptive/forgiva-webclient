# IntegratorApi.PostNewSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logonState** | [**LogonState**](LogonState.md) |  | [optional] 
**hshAlg** | **String** | Hashing algorithm chosen by server required to get used by client to provide hashed data to  the server.  | [optional] 
**hshSalt** | **String** | Unique salt value tied with session which will be required to get used with hash algorithm  on the client side.  | [optional] 
**sessionPk** | **String** | Session public key to encrypt critical data. | [optional] 
**newSessionId** | **String** | Returns null if sessionId is valid or new sessionId for renewal or initialization. | [optional] 
**ldapEnabled** | **Boolean** | Returns whether LDAP login is enabled or not | [optional] 


