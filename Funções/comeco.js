function Calcularimc(peso,altura){
    let imcvalor=peso/Math.pow(altura,2)
    ImprimirResultados(imcvalor)
}

function ImprimirResultados(imcvalor){

    if(imcvalor<18.5){
        console.log("Abaixo do peso")
    }else if(imcvalor>=18.5&&imcvalor<25){
        console.log("Peso normal")
    }//.... tem mais coisa mas deu preguiça

}
//main
(function (){
    let peso=72.5
    let altura=1.77
    Calcularimc(peso,altura)
})()
