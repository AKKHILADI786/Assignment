const {db,students}=require('../database/model')



async function createlist(data){
    const dat=await students.bulkCreate(data);
    return dat;
}

module.exports={
    createlist
}