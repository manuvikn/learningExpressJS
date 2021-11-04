const mongoose = require('mongoose');

const connectionDB = async () => {

    try {

        await mongoose.connect(
            'mongodb+srv://adminMongo:mongo1234@cluster0.gcfb5.mongodb.net/test?authSource=admin&replicaSet=atlas-p918ab-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
            );
        
        console.log('Conexión con base de datos');

    } catch (error) {
        console.error(error);
        throw new Error('Error en la conexión con la base de datos');
    }

};

module.exports = {
    connectionDB
}