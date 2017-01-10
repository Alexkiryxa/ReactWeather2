let React = require('react');

// let WeatherMessage = React.createClass({
//     render: function() {
//         let {location, temp} = this.props;
//
//         return (
//             <p>It is {temp} in {location}</p>
//         );
//     }
// });

// let WeatherMessage = (props) => {
//     let {location, temp} = props;
//
//     return (
//         <p>It is {temp} in {location}</p>
//     );
// };

let WeatherMessage = ({location, temp}) => {
    return (
        <p>It is {temp} in {location}</p>
    );
};

module.exports = WeatherMessage;
