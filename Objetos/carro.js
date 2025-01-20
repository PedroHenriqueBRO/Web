class carro{
    marca 
    cor 
    gastodecombustivel
    constructor(marca,cor,gastodecombustivel){
        this.marca=marca
        this.cor=cor
        this.gastodecombustivel=gastodecombustivel
    }
    gasto(kms,valorcombustivel){
        const gastoemreais=(kms/this.gastodecombustivel)*valorcombustivel
        console.log( "Gasto em reais : "+ gastoemreais.toFixed(2))
    }
}

(function(){
let fiat=new carro("Fiat","Azul",9)
fiat.gasto(400,6.20)

})()

