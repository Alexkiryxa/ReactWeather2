let React = require('react');
let Nav = require('Nav');

/*
    this.props.children
    loads children from app.jsx IndexRoute
*/
let Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
