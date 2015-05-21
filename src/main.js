var React = require('react');

var view = require('./view.jsx');

(function() {
  'use strict';
  
  React.render(
    React.createElement(view),
    document.getElementById('content')
  );
})();
