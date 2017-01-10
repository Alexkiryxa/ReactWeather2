let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');

// Load foundation
/*
    css! using css loader
    in webpack.config script! is a script loader
*/
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>//children of main.jsx which is loaded in Main.jsx
        </Route>
    </Router>,
    document.getElementById('app')
);
