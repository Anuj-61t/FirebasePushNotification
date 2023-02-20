const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:1863@localhost:5432/notifications',{
    logging:false
});

//check connection
sequelize.authenticate().then(()=>{
    console.log('Database authenticated Successfully!!');
}).catch(error=>{
    console.error(error);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//connecting to models
db.users = require('./userModel')(sequelize, DataTypes);

//export db
module.exports = db

