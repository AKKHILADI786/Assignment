const express=require('express');
const multer=require('multer')
const app=express();
const reader=require('xlsx')
const upload=multer({dest:'uploads/'})
const fs=require('fs').promises

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))

app.post('/s',upload.single('student'),async (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const old_path=__dirname+'/uploads/'+req.file.filename;
    const new_path=__dirname+'/files/'+req.file.originalname;

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
    console.log(data);
    res.status(200).send(data)
})

app.listen(8888,()=>{
    console.log('server is running on http://localhost:8888')
})