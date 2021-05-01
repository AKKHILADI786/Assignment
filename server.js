const express=require('express');
const app=express();

const {db,students}=require('./database/model')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))
app.use('/s',require('./routes/student').route)

let PORT=process.env.PORT||8888;



db.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server is running on http://localhost:${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
