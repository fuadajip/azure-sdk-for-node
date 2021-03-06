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
 * Initializes a new instance of the DataLakeAnalyticsCatalogCredentialCreateParameters class.
 * @constructor
 * Data Lake Analytics catalog credential creation parameters.
 *
 * @member {string} password the password for the credential and user with
 * access to the data source.
 *
 * @member {string} uri the URI identifier for the data source this credential
 * can connect to in the format <hostname>:<port>
 *
 * @member {string} userId the object identifier for the user associated with
 * this credential with access to the data source.
 *
 */
class DataLakeAnalyticsCatalogCredentialCreateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of DataLakeAnalyticsCatalogCredentialCreateParameters
   *
   * @returns {object} metadata of DataLakeAnalyticsCatalogCredentialCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataLakeAnalyticsCatalogCredentialCreateParameters',
      type: {
        name: 'Composite',
        className: 'DataLakeAnalyticsCatalogCredentialCreateParameters',
        modelProperties: {
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          uri: {
            required: true,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: true,
            serializedName: 'userId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DataLakeAnalyticsCatalogCredentialCreateParameters;
