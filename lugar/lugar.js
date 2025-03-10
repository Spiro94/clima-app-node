const axios = require('axios');

const getLugarLatLang = async(dir) => {
    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key': '8f92111e63mshf991117ca592e06p1f1ccfjsn2cbe4d619399',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Region': 'AWS - us-east-1'

        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLang
}