document.addEventListener('DOMContentLoaded',async function(){
    var response=await fetch('https://bioaurea.vercel.app/dados')
    if(response.ok){
        var res_=await response.json()
        return
    }
    var prod_m=document.getElementById('prod_m')
    var prod_p=document.getElementById('prod_p')
    var prod_g=document.getElementById('prod_s')
    var jsond=res
    var letra=Number(jsond.length)-1
    console.log(letra)

    while(letra>0){
        var data=jsond[letra]
        var tipo=data.tipo
        var nome=data.nome
        var nome_2=String(data.nome).replace("_"," ").replace("_"," ")
        var preco=data.preco
        console.log(data)

        var produto_img=document.createElement('img')
        var produto_nome=document.createElement('h2')
        var produto_tipo=document.createElement('h2')
        var produto_preco=document.createElement('h2')
        produto_img.src=`${tipo}_${nome}.png`
        produto_nome.innerText=`${nome_2}`
        produto_tipo.innerText=`${tipo}`
        produto_preco.innerText=`${preco}$$`
        produto_img.className='p_img'
        produto_nome.className='p_nome'
        produto_tipo.className='p_tipo'
        produto_preco.className='p_preco'

        var div_texto=document.createElement('div')
        
        div_texto.appendChild(produto_tipo)
        div_texto.appendChild(produto_nome)
        div_texto.appendChild(produto_preco)
        div_texto.className='div_textos'

        var div=document.createElement('div')
        div.className='d_p'
        div.appendChild(produto_img)
        div.appendChild(div_texto)

        if(jsond[letra].tipo=='maquiagem'){
            prod_m.appendChild(div)
        }
        else if(jsond[letra].tipo=='perfume'){
            prod_p.appendChild(div)
        }
        else if(jsond[letra].tipo=='gel' || jsond[letra].tipo=='shampoo'){
            prod_g.appendChild(div)
        }


        letra-=1
    }

})
