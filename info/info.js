const lugar = require('../lugar/lugar'); //importa el archivo js
const clima = require('../clima/clima'); //importa el archivo js



const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLang(direccion);

        const temp = await clima.getClima(coord.lat, coord.lng);

        return `La temperatura de ${coord.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
};



module.exports = {
    getInfo
};