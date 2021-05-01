const route=require('express').Router()
const multer=require('multer')
const reader=require('xlsx')
const upload=multer({dest:'uploads/'})
const {createlist,getRN,getall,getRorN}=require('../controlers/student')
const fs=require('fs').promises



route.post('/',upload.single('student'),async (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const old_path='./uploads/'+req.file.filename;
    const new_path='./files/'+req.file.originalname;

    console.log(old_path)
    console.log(new_path)
    
    await fs.rename(old_path,new_path,()=>{
        // for removing file from upload folder
        try{
            fs.uplink(old_path)
        }
        catch(err){
            console.log(err)
        }
        //
    });

    const file=reader.readFile(new_path)
    let data=[];
    const sheets=file.SheetNames

    for(let i=0;i<sheets.length;i++){
        const temp=reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach((abc)=>{
            data.push(abc)
            //console.log(abc)
        })
    }
    console.log(data)
    //console.log(data[5]);
    const abc= await createlist(data);
    res.status(200).redirect('/');
})
route.get('/',async (req,res)=>{
    const data=await getall();
    res.status(200).send(data);
})
route.post('/rorn',async (req,res)=>{
    const data=await getRorN(req.body.name);
    res.status(200).send(data);
    
})
route.post('/randn',async (req,res)=>{
    const data=await getRN(req.body.name,req.body.roll);
    res.status(200).send(data);
    
})


module.exports={
    route
}