const app = require('./app');
const swaggerDocs = require('../swagger');
require('dotenv').config();

const PORT = process.env.PORT || 3000;


const server = app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app, PORT)
})

module.exports = server