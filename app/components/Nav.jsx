let React = require('react');
let {Link, IndexLink} = require('react-router');

/*
    When use index route in Route,
    we need to use IndexLink in
    order to show active style
    correctly
*/

let Nav = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Navigation Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;
