/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UserGetMemberGroupsParameters class.
 * @constructor
 * Request parameters for GetMemberGroups API call
 * @member {boolean} securityEnabledOnly If true only membership in security
 * enabled groups should be checked. Otherwise membership in all groups
 * should be checked
 * 
 */
function UserGetMemberGroupsParameters() {
}

/**
 * Defines the metadata of UserGetMemberGroupsParameters
 *
 * @returns {object} metadata of UserGetMemberGroupsParameters
 *
 */
UserGetMemberGroupsParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UserGetMemberGroupsParameters',
    type: {
      name: 'Composite',
      className: 'UserGetMemberGroupsParameters',
      modelProperties: {
        securityEnabledOnly: {
          required: true,
          serializedName: 'securityEnabledOnly',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = UserGetMemberGroupsParameters;