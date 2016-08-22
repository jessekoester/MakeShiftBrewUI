var keyMirror = require('react/lib/keyMirror');

module.exports = {
  ActionTypes: keyMirror({
    RECEIVE_TEMPERATURE: null,
    RECEIVE_PWM: null,
    RECEIVE_WATER: null
  })
};
