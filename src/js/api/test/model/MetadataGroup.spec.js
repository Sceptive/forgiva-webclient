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
    instance = new IntegratorApi.MetadataGroup();
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

  describe('MetadataGroup', function() {
    it('should create an instance of MetadataGroup', function() {
      // uncomment below and update the code to test MetadataGroup
      //var instane = new IntegratorApi.MetadataGroup();
      //expect(instance).to.be.a(IntegratorApi.MetadataGroup);
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instane = new IntegratorApi.MetadataGroup();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "groupName")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new IntegratorApi.MetadataGroup();
      //expect(instance).to.be();
    });

    it('should have the property parentGroupId (base name: "parentGroupId")', function() {
      // uncomment below and update the code to test the property parentGroupId
      //var instane = new IntegratorApi.MetadataGroup();
      //expect(instance).to.be();
    });

    it('should have the property groupDescription (base name: "groupDescription")', function() {
      // uncomment below and update the code to test the property groupDescription
      //var instane = new IntegratorApi.MetadataGroup();
      //expect(instance).to.be();
    });

  });

}));
