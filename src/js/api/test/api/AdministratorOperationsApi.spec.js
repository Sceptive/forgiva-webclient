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
    instance = new IntegratorApi.AdministratorOperationsApi();
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

  describe('AdministratorOperationsApi', function() {
    describe('postAdminApplicationAdd', function() {
      it('should call postAdminApplicationAdd successfully', function(done) {
        //uncomment below and update the code to test postAdminApplicationAdd
        //instance.postAdminApplicationAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminApplicationRemove', function() {
      it('should call postAdminApplicationRemove successfully', function(done) {
        //uncomment below and update the code to test postAdminApplicationRemove
        //instance.postAdminApplicationRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminApplicationUpdate', function() {
      it('should call postAdminApplicationUpdate successfully', function(done) {
        //uncomment below and update the code to test postAdminApplicationUpdate
        //instance.postAdminApplicationUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminApplications', function() {
      it('should call postAdminApplications successfully', function(done) {
        //uncomment below and update the code to test postAdminApplications
        //instance.postAdminApplications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminHostAdd', function() {
      it('should call postAdminHostAdd successfully', function(done) {
        //uncomment below and update the code to test postAdminHostAdd
        //instance.postAdminHostAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminHostRemove', function() {
      it('should call postAdminHostRemove successfully', function(done) {
        //uncomment below and update the code to test postAdminHostRemove
        //instance.postAdminHostRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminHostUpdate', function() {
      it('should call postAdminHostUpdate successfully', function(done) {
        //uncomment below and update the code to test postAdminHostUpdate
        //instance.postAdminHostUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminHosts', function() {
      it('should call postAdminHosts successfully', function(done) {
        //uncomment below and update the code to test postAdminHosts
        //instance.postAdminHosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminReports', function() {
      it('should call postAdminReports successfully', function(done) {
        //uncomment below and update the code to test postAdminReports
        //instance.postAdminReports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminResourceusage', function() {
      it('should call postAdminResourceusage successfully', function(done) {
        //uncomment below and update the code to test postAdminResourceusage
        //instance.postAdminResourceusage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminSysteminformation', function() {
      it('should call postAdminSysteminformation successfully', function(done) {
        //uncomment below and update the code to test postAdminSysteminformation
        //instance.postAdminSysteminformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUserAdd', function() {
      it('should call postAdminUserAdd successfully', function(done) {
        //uncomment below and update the code to test postAdminUserAdd
        //instance.postAdminUserAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUserByusergroup', function() {
      it('should call postAdminUserByusergroup successfully', function(done) {
        //uncomment below and update the code to test postAdminUserByusergroup
        //instance.postAdminUserByusergroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUserRemove', function() {
      it('should call postAdminUserRemove successfully', function(done) {
        //uncomment below and update the code to test postAdminUserRemove
        //instance.postAdminUserRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUserUpdate', function() {
      it('should call postAdminUserUpdate successfully', function(done) {
        //uncomment below and update the code to test postAdminUserUpdate
        //instance.postAdminUserUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUsergroupAdd', function() {
      it('should call postAdminUsergroupAdd successfully', function(done) {
        //uncomment below and update the code to test postAdminUsergroupAdd
        //instance.postAdminUsergroupAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUsergroupRemove', function() {
      it('should call postAdminUsergroupRemove successfully', function(done) {
        //uncomment below and update the code to test postAdminUsergroupRemove
        //instance.postAdminUsergroupRemove(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUsergroupUpdate', function() {
      it('should call postAdminUsergroupUpdate successfully', function(done) {
        //uncomment below and update the code to test postAdminUsergroupUpdate
        //instance.postAdminUsergroupUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postAdminUsergroups', function() {
      it('should call postAdminUsergroups successfully', function(done) {
        //uncomment below and update the code to test postAdminUsergroups
        //instance.postAdminUsergroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
