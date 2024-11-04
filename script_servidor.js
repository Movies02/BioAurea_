var express=require('express')
var helmet=require('helmet')
var cors=require("cors")
var fs=require('fs')

var app=express()
app.use(express.json())
app.use(cors())


app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", 'https:'],
        scriptSrc: ["'self'", 'https:']
    }
}));

app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy({ policy: "same-origin" }));
app.use(helmet.dnsPrefetchControl({ allow: false }));
// Removido o helmet.expectCt
app.use(helmet.frameguard({ action: 'deny' })); // Impede o carregamento em iframe
app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true })); // Força HTTPS
app.use(helmet.xssFilter()); // Ativa o filtro XSS

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

var porta=8000
app.listen(porta,err=>{
    if(err){
        console.error('Erro na conexão\n'+err)
        return
    }
    console.log("Servidor rodando na porta "+porta)
})