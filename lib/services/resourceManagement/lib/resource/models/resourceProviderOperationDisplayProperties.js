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
 * Initializes a new instance of the ResourceProviderOperationDisplayProperties class.
 * @constructor
 * Resource provider operation's display properties.
 *
 * @member {string} [publisher] Operation description.
 *
 * @member {string} [provider] Operation provider.
 *
 * @member {string} [resource] Operation resource.
 *
 * @member {string} [operation] Operation.
 *
 * @member {string} [description] Operation description.
 *
 */
class ResourceProviderOperationDisplayProperties {
  constructor() {
  }

  /**
   * Defines the metadata of ResourceProviderOperationDisplayProperties
   *
   * @returns {object} metadata of ResourceProviderOperationDisplayProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceProviderOperationDisplayProperties',
      type: {
        name: 'Composite',
        className: 'ResourceProviderOperationDisplayProperties',
        modelProperties: {
          publisher: {
            required: false,
            serializedName: 'publisher',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: false,
            serializedName: 'provider',
            type: {
              name: 'String'
            }
          },
          resource: {
            required: false,
            serializedName: 'resource',
            type: {
              name: 'String'
            }
          },
          operation: {
            required: false,
            serializedName: 'operation',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceProviderOperationDisplayProperties;
