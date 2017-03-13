'use strict';

var _firebaseFunctions = require('firebase-functions');

var _database = require('./database');

var Database = _interopRequireWildcard(_database);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.hello = _firebaseFunctions.https.onRequest(function (req, res) {
  res.status(404).send('wowookosdoksdoksodkaosc,aos,cao' + Database.echo());
});