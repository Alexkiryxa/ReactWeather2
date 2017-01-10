let React = require('react');

// let About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

let About = (props) => (
    <div>
        <h1 className="text-center">About</h1>
        <p>Welcome to about page</p>
    </div>
);

module.exports = About;
