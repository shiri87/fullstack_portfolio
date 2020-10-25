const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const morgan = require('morgan')
const router = require('./routes/routes');
const {sequelize} = require('./models')
const config = require('./config/config');

// start express and server up
const app = express();

//middleware
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('combined'))
//using router
app.use(router)

// sequelize needs to be sync before server start up
sequelize.sync().then(()=>{
    app.listen(config.port);
//     console.log(`server is running ${config.port}`);
});


// app.listen(process.env.PORT || 8085);
// console.log(`Server is running on ${process.env.PORT || 8085}`);