/*
 * Resource brew
 *
 * @module brew
 */

var url = require('rising-url');

var request = require('superagent');
var APIConstants = require('../constants/APIConstants');

var STATE = {
  paused: 'paused'
};


/*
 * Read
 *
 * @method read
 */
function read() {
  return new Promise(function (resolve, reject) {
    var URL = url.format(APIConstants.Host, APIConstants.Endpoints.Brew.read);

    request
      .get(URL)
      .set('Accept', 'application/json')
      .end(function (res) {
        if (!res.ok || !res.body.brews) {
          return reject();
        }

        resolve(res.body.brews);
      });
  });
}


/*
 * Create
 *
 * @method create
 * @param {Object} brew
 */
function create(options) {
  options = options || {};

  var brew = options.brew;

  return new Promise(function (resolve, reject) {
    var URL = url.format(APIConstants.Host, APIConstants.Endpoints.Brew.create);

    request
      .post(URL)
      .send({
        name: brew.name,
        water: brew.water,
        startTime: brew.startTime,
        phases: brew.phases
      })
      .set('Accept', 'application/json')
      .end(function (res) {
        if (!res.ok) {
          return reject();
        }

        resolve();
      });
  });
}


/*
 * Pause
 *
 * @method pause
 */
function pause() {

  return new Promise(function (resolve, reject) {
    var URL = url.format(APIConstants.Host, APIConstants.Endpoints.Brew.pause);

    request
        .patch(URL)
        .set('Accept', 'application/json')
        .end(function (res) {
          if (!res.ok) {
            return reject();
          }

          resolve();
        });
  });
}


/*
 * Stop
 *
 * @method pause
 */
function stop() {

  return new Promise(function (resolve, reject) {
    var URL = url.format(APIConstants.Host, APIConstants.Endpoints.Brew.stop);

    request
        .patch(URL)
        .set('Accept', 'application/json')
        .end(function (res) {
          if (!res.ok) {
            return reject();
          }

          resolve();
        });
  });
}

// Public
exports.read = read;
exports.create = create;
exports.pause = pause;
exports.stop = stop;
exports.STATE = STATE;
