//advance or modern
import express from 'express';

const app=express()
const port = process.env.PORT||3000

app.get('/',(req,res)=>{
    res.send('hello')
});

app.listen(port,()=>{
    console.log(`port is listening to port ${port}`)
})
 