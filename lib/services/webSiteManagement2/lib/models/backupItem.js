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
 * Initializes a new instance of the BackupItem class.
 * @constructor
 * Backup description.
 *
 * @member {number} [backupId] Id of the backup.
 *
 * @member {string} [storageAccountUrl] SAS URL for the storage account
 * container which contains this backup.
 *
 * @member {string} [blobName] Name of the blob which contains data for this
 * backup.
 *
 * @member {string} [backupItemName] Name of this backup.
 *
 * @member {string} [status] Backup status. Possible values include:
 * 'InProgress', 'Failed', 'Succeeded', 'TimedOut', 'Created', 'Skipped',
 * 'PartiallySucceeded', 'DeleteInProgress', 'DeleteFailed', 'Deleted'
 *
 * @member {number} [sizeInBytes] Size of the backup in bytes.
 *
 * @member {date} [created] Timestamp of the backup creation.
 *
 * @member {string} [log] Details regarding this backup. Might contain an error
 * message.
 *
 * @member {array} [databases] List of databases included in the backup.
 *
 * @member {boolean} [scheduled] True if this backup has been created due to a
 * schedule being triggered.
 *
 * @member {date} [lastRestoreTimeStamp] Timestamp of a last restore operation
 * which used this backup.
 *
 * @member {date} [finishedTimeStamp] Timestamp when this backup finished.
 *
 * @member {string} [correlationId] Unique correlation identifier. Please use
 * this along with the timestamp while communicating with Azure support.
 *
 * @member {number} [websiteSizeInBytes] Size of the original web app which has
 * been backed up.
 *
 */
class BackupItem extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BackupItem
   *
   * @returns {object} metadata of BackupItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupItem',
      type: {
        name: 'Composite',
        className: 'BackupItem',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          backupId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.id',
            type: {
              name: 'Number'
            }
          },
          storageAccountUrl: {
            required: false,
            readOnly: true,
            serializedName: 'properties.storageAccountUrl',
            type: {
              name: 'String'
            }
          },
          blobName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.blobName',
            type: {
              name: 'String'
            }
          },
          backupItemName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'InProgress', 'Failed', 'Succeeded', 'TimedOut', 'Created', 'Skipped', 'PartiallySucceeded', 'DeleteInProgress', 'DeleteFailed', 'Deleted' ]
            }
          },
          sizeInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.sizeInBytes',
            type: {
              name: 'Number'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          log: {
            required: false,
            readOnly: true,
            serializedName: 'properties.log',
            type: {
              name: 'String'
            }
          },
          databases: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DatabaseBackupSettingElementType',
                  type: {
                    name: 'Composite',
                    className: 'DatabaseBackupSetting'
                  }
              }
            }
          },
          scheduled: {
            required: false,
            readOnly: true,
            serializedName: 'properties.scheduled',
            type: {
              name: 'Boolean'
            }
          },
          lastRestoreTimeStamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastRestoreTimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          finishedTimeStamp: {
            required: false,
            readOnly: true,
            serializedName: 'properties.finishedTimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          correlationId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.correlationId',
            type: {
              name: 'String'
            }
          },
          websiteSizeInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.websiteSizeInBytes',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupItem;
