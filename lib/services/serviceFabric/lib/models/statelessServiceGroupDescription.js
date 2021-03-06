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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the StatelessServiceGroupDescription class.
 * @constructor
 * The description of the stateless service group
 *
 * @member {number} [instanceCount]
 *
 */
class StatelessServiceGroupDescription extends models['ServiceGroupDescription'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StatelessServiceGroupDescription
   *
   * @returns {object} metadata of StatelessServiceGroupDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stateless',
      type: {
        name: 'Composite',
        className: 'StatelessServiceGroupDescription',
        modelProperties: {
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: false,
            serializedName: 'ServiceName',
            type: {
              name: 'String'
            }
          },
          serviceTypeName: {
            required: false,
            serializedName: 'ServiceTypeName',
            type: {
              name: 'String'
            }
          },
          partitionDescription: {
            required: false,
            serializedName: 'PartitionDescription',
            type: {
              name: 'Composite',
              className: 'PartitionDescription'
            }
          },
          placementConstraints: {
            required: false,
            serializedName: 'PlacementConstraints',
            type: {
              name: 'String'
            }
          },
          correlationScheme: {
            required: false,
            serializedName: 'CorrelationScheme',
            type: {
              name: 'Composite',
              className: 'ServiceCorrelationDescription'
            }
          },
          serviceLoadMetrics: {
            required: false,
            serializedName: 'ServiceLoadMetrics',
            type: {
              name: 'Composite',
              className: 'ServiceCorrelationDescription'
            }
          },
          servicePlacementPolicies: {
            required: false,
            serializedName: 'ServicePlacementPolicies',
            type: {
              name: 'Composite',
              className: 'ServiceCorrelationDescription'
            }
          },
          flags: {
            required: false,
            serializedName: 'Flags',
            type: {
              name: 'Number'
            }
          },
          serviceGroupMemberDescription: {
            required: false,
            serializedName: 'ServiceGroupMemberDescription',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceGroupMemberDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceGroupMemberDescription'
                  }
              }
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          },
          instanceCount: {
            required: false,
            serializedName: 'InstanceCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = StatelessServiceGroupDescription;
