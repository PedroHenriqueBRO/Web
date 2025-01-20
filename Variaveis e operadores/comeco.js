const prompt=require('prompt-sync')()

const combustivelprecoetanol=5.20
const combustivelprecogasolina=6.20
const tipocombustivel=prompt("Tipo combustive :(E=etanol , G=gasolina) ")==="G"?true:false
let gastodocarro=prompt("Digite quantos km seu carro faz por litro ")
let distanciakm=prompt("Digite a distancia em km ")
if(tipocombustivel){
    let gastototal=(distanciakm/gastodocarro)*combustivelprecogasolina
    console.log("O gasto total para fazer essa viagem foi :"+gastototal.toFixed(2))
}else{
    let gastototal=(distanciakm/gastodocarro)*combustivelprecoetanol
    console.log("O gasto total para fazer essa viagem foi :"+gastototal.toFixed(2))
}

