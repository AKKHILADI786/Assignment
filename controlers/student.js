const {db,students}=require('../database/model')
const { Op } = require("sequelize");


async function createlist(data){
    const dat=await students.bulkCreate(data);
    return dat;
}

async function getall(){
    const data=await students.findAll({})
    return data;
}
async function getRorN(stu){
    const data=await students.findAll({
        where:{
            [Op.or]: [
                { Name:stu },
                { Roll_no:stu}
              ]
        }
        
    })
    return data;
}
async function getRN(name,roll_no){
    const data=await students.findAll({
        where:{
            [Op.and]: [
                { Name:name },
                { Roll_no:roll_no }
              ]
        }
    })
    return data;
}
module.exports={
    createlist,getRN,getRorN,getall
}