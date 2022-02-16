# IntegratorApi.PostAdminResourceusageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpuUsagePercentage** | **String** |  | [optional] 
**totalMemory** | **String** | Total memory in MB. | [optional] 
**usedMemory** | **String** | Used memory in MB. | [optional] 
**totalDiskspace** | **String** | Total disk space in MB. | [optional] 
**usedDiskspace** | **String** | Used disk space in MB. | [optional] 
**cpuUsageByHour** | [**[PostAdminResourceusageResponseCpuUsageByHour]**](PostAdminResourceusageResponseCpuUsageByHour.md) |  | [optional] 
**cpuUsageByDay** | [**[PostAdminResourceusageResponseCpuUsageByDay]**](PostAdminResourceusageResponseCpuUsageByDay.md) |  | [optional] 
**totalUsers** | **String** | Total users of Forgiva Enterprise including LDAP users. | [optional] 
**totalUniqueHosts** | **String** | Total unique host count recorded in the database. | [optional] 
**databaseSize** | **String** | Total database size in MB. | [optional] 
**averagePasswordGenerationTime** | **String** | Average password generation time in seconds. | [optional] 
**serverPingTime** | **String** | Forgiva Server ping time in MS. | [optional] 
**averageDatabaseResponseTime** | **String** | If database is on remote average response time in MS. | [optional] 


