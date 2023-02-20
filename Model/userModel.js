module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('USER',{
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true
    },)
    return User;
}