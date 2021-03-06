// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-05-01', '*')
  .reply(201, "{\"id\":\"my_application_id\",\"displayName\":\"my_application_name\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '96',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'request-id': '146bc470-adba-4ef7-9e4c-fd959b57cc92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9aaefc14-ca57-4622-9886-4e37589ca239',
  'x-ms-correlation-request-id': '9aaefc14-ca57-4622-9886-4e37589ca239',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160243Z:9aaefc14-ca57-4622-9886-4e37589ca239',
  date: 'Fri, 26 May 2017 16:02:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-05-01', '*')
  .reply(201, "{\"id\":\"my_application_id\",\"displayName\":\"my_application_name\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '96',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'request-id': '146bc470-adba-4ef7-9e4c-fd959b57cc92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9aaefc14-ca57-4622-9886-4e37589ca239',
  'x-ms-correlation-request-id': '9aaefc14-ca57-4622-9886-4e37589ca239',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160243Z:9aaefc14-ca57-4622-9886-4e37589ca239',
  date: 'Fri, 26 May 2017 16:02:43 GMT',
  connection: 'close' });
 return result; }]];