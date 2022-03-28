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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IntegratorApi);
  }
}(this, function(expect, IntegratorApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IntegratorApi.PostAdminResourceusageResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PostAdminResourceusageResponse', function() {
    it('should create an instance of PostAdminResourceusageResponse', function() {
      // uncomment below and update the code to test PostAdminResourceusageResponse
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be.a(IntegratorApi.PostAdminResourceusageResponse);
    });

    it('should have the property cpuUsagePercentage (base name: "cpuUsagePercentage")', function() {
      // uncomment below and update the code to test the property cpuUsagePercentage
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalMemory (base name: "totalMemory")', function() {
      // uncomment below and update the code to test the property totalMemory
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property usedMemory (base name: "usedMemory")', function() {
      // uncomment below and update the code to test the property usedMemory
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalDiskspace (base name: "totalDiskspace")', function() {
      // uncomment below and update the code to test the property totalDiskspace
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property usedDiskspace (base name: "usedDiskspace")', function() {
      // uncomment below and update the code to test the property usedDiskspace
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property cpuUsageByHour (base name: "cpuUsageByHour")', function() {
      // uncomment below and update the code to test the property cpuUsageByHour
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property cpuUsageByDay (base name: "cpuUsageByDay")', function() {
      // uncomment below and update the code to test the property cpuUsageByDay
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalUsers (base name: "totalUsers")', function() {
      // uncomment below and update the code to test the property totalUsers
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalUniqueHosts (base name: "totalUniqueHosts")', function() {
      // uncomment below and update the code to test the property totalUniqueHosts
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property databaseSize (base name: "databaseSize")', function() {
      // uncomment below and update the code to test the property databaseSize
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property averagePasswordGenerationTime (base name: "averagePasswordGenerationTime")', function() {
      // uncomment below and update the code to test the property averagePasswordGenerationTime
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property serverPingTime (base name: "serverPingTime")', function() {
      // uncomment below and update the code to test the property serverPingTime
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

    it('should have the property averageDatabaseResponseTime (base name: "averageDatabaseResponseTime")', function() {
      // uncomment below and update the code to test the property averageDatabaseResponseTime
      //var instane = new IntegratorApi.PostAdminResourceusageResponse();
      //expect(instance).to.be();
    });

  });

}));
