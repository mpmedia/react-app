/**
 *
 * @jsx React.DOM
 *
 */

var React = require('react-tools/build/modules/React'),
    Page = require('./page.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Page title="Index">
        <h1>Hello, index!</h1>
        <a href="/pages/about">About page</a>
      </Page>
    );
  }
});
