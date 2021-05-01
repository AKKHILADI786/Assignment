  
const Sequelize=require('sequelize')
const data=Sequelize.DataTypes

const db=new Sequelize({
    dialect:'sqlite',
    storage:__dirname+'/database.db'
})

if(process.env.DATABASE_URL){
    db=new Sequelize(process.env.DATABASE_URL)
}

const students=db.define('student',{
    id:{
        type:data.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Name:{
        type:data.STRING(30),
        allowNull:false
    },
    Roll_no:{
        type:data.STRING(20),
        allowNull:false
    },
    Class:{
        type:data.STRING(10),
        allowNull:false
    }

})


module.exports={db,students}