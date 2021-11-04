const express = require('express');
const { connectionDB } = require('./database/config');
const User = require('./models/user');
require('colors');
const app = express();

async function callConnectDB() {
    await connectionDB();
}

callConnectDB();

// middlewares
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        name: 'manuel',
        lastName: 'victoria',
        age: 20
    });
});

// post de prueba para probar la creación de un registro con mongoose
app.post('/user', async (req, res) => {

    console.log(req.body);

    const user = new User(req.body);
    await user.save();

    console.log(user);

    res.json({
        msg: 'post api users'
    });
});

app.listen(8080, () => {
    console.log('**** Server listening on port 8080 ****'.green);
    console.log(`*********** ${new Date().toDateString()} ***********`.green);
});