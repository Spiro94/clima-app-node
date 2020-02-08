const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c5776f7f406e0358dd7eb3fc63ae1126&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};