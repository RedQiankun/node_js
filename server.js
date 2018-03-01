/**
 * Created by web-01 on 2018/3/1.
 */
const express=require('express');
const mysql=require('mysql');
let app=new express();
app.use(express.static(__dirname+'/public'));
// app.get('*',(req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-methods','PUT,POST,GET,DELETE,OPTIONS');
//     res.header('Content-type','application/json');
//     next();
// });
app.get('/demo01',(req,res)=>{
    res.send('this is not 跨域')
});
app.listen(4400)