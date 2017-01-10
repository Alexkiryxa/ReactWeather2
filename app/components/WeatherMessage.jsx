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
        <h3 className="text-center">It is {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;
