/* jshint ignore:start */

var React = require('react/addons');
var NavLink = require('flux-router-component').NavLink;

var Nav = React.createClass({

  /*
   * Get initial state
   *
   * @method getInitialState
   * @return {Object}
   */
  getInitialState: function () {
    return {
      selected: 'dashboard',
      links: {}
    };
  },


  /*
   * Render
   *
   * @method render
   */
  render: function () {
    var selected = this.props.selected || this.state.selected;
    var links = this.props.links || this.state.links;
    var context = this.props.context;

    var linkHTML = Object.keys(links).map(function (name) {
        var link = links[name];

        return (
          <li className={selected === name ? 'active' : '' } key={name}>
            <NavLink routeName={link.route} context={context}>{link.text}</NavLink>
          </li>
        );
      });
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">MakeShift Aleworks</a>
          </div>
          <div className="navbar-collapse collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav">
                {linkHTML}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
