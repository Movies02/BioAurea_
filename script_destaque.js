function escolha(id){
    console.log(id)

    var img=document.getElementById(id).getAttribute("src")
    var img_v=document.getElementById('img_vendo')
    console.log(img)
    img_v.style.backgroundImage=`url("${img}")`

    var texto=document.getElementById('texto_vendo')

    if(id=="d1_"){
        var tt="<h1 class='nome'>Sublime</h1><p class='texto_js'>Lançado em 10/5/2024, Sublime hidrata os lábios com manteiga de karité e óleo de coco, oferecendo textura leve e aroma delicado para lábios radiantes e protegidos. Experimente para um brilho irresistível!</p>"
    }
    else if(id=="d2_"){
        var tt="<h1 class='nome'>Rose Essence</h1><p class='texto_js'>Lançado em 14/5/2024,Rose Essence combina rosa fresca e frutas para uma fragrância sofisticada. Com notas de cítricos, coração de rosa, é ideal para qualquer ocasião, exalando confiança e charme.</p>"
    }
    else if(id=="d3_"){
        var tt="<h1 class='nome'>Aurora Gold</h1><p class='texto_js'>Lançado em 23/6/2024, Aurora Gold combina flores douradas e frutas, resultando em uma fragrância deslumbrante. Com notas de bergamota, jasmim e base de sândalo, é ideal para tornar momentos comuns em experiências memoráveis, irradiando glamour e confiança.</p>"
    }
    else if(id=="d4_"){
        var tt="<h1 class='nome'>Golden Sunset</h1><p class='texto_js'>Lançado em 30/7/2024, Golden Sunset combina frutas cítricas e flores, criando uma fragrância envolvente. Com notas de laranja e uma base de âmbar, é perfeito para iluminar cada momento e exalar charme.</p>"
    }
    else if(id=='d5_'){
        var tt="<h1 class='nome'>Aloe Vera Bliss</h1><p class='texto_js'>Lançado em 23/8/2024, Aloe Vera Bliss é um shampoo que revitaliza e nutre seus cabelos com extrato de babosa. Proporciona suavidade e brilho, sendo ideal para todos os tipos de cabelo. Sinta a diferença com uma limpeza delicada e eficaz!</p>"
    }
    else if(id=="d6_"){
        var tt="<h1 class='nome'>Floral Kiss</h1><p class='texto_js'>Lançado em 19/9/2024, Floral Kiss é um creme labial que transforma seus lábios com hidratação e frescor. Com extratos de flores, oferece um toque aveludado e brilho natural, ideal para proteger contra o ressecamento. Encante-se com cada aplicação!</p>"
    }

    texto.innerHTML=tt
}
