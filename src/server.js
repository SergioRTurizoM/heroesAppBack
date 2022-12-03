const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8000;


const server = app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = server