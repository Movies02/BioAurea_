var express=require('express')
var cors=require("cors")
var fs=require('fs')

var app=express()
app.use(express.json())
app.use(cors())


app.get('/dados',(req,res)=>{
    fs.readFile('produtos.json',"utf-8",(err,data)=>{
        if(err){
            console.error('Tivermos um pequeno erro na conexão, veja:\n'+err)
            return
        }
        var obj=JSON.parse(data)
        console.log(obj)
        res.json(obj)
    })
})

const porta = process.env.PORT || 3000
module.exports = app
