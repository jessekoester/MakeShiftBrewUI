/** @jsx React.DOM */

/* jshint ignore:start */

var React = require('react/addons');
var debug = require('debug')('BrewUI:Dashboard');
var navigateAction = require('flux-router-component').navigateAction;

var Home = React.createClass({

  /*
   * Get initial state
   *
   * @method getInitialState
   * @return {Object} state
   */
  getInitialState: function () {
    return {};
  },

  /*
   * Render
   *
   * @method render
   */
  render: function () {
    return (
      <div className="row">
        <h1>Dashboard</h1>
        <p className="bg-warning"> TODO </p>
      </div>
    );
  }
});

module.exports = Home;
