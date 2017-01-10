let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=80abde095f956e9b6548f44ce39595ab';

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if ( res.data.cod && res.data.message ) {
                console.log('herre');
                throw new Error('City not found');
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error('City not found');
        });
    }
}
