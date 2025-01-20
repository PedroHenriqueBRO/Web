//classe pessoa
class pessoa{
    constructor(nome,idade,altura){
        this.nome=nome
        this.idade=idade
        this.altura=altura
    }
    static pessoawhitoutaltura(nome,idade){
        let novapessoa = new pessoa(nome,idade)
        delete novapessoa.altura,novapessoa.saymyheight
        return novapessoa
    }
    saymyname() {
        console.log(this.nome)
    }
    saymyage(){
        console.log(this.idade)
    }
    saymyheight(){
        console.log(this.altura)
    }
}


//criando objeto pedro
let pedro={
    nome:"Pedro Henrique Braga",
    idade:18,
    imprimenome:function (){
        console.log(this.nome)
    }
}
//editando pedro
pedro.idade=20
//adicionando infos
pedro.altura=1.77
//delete nome
delete pedro.idade
//printando informações
pedro.imprimenome()
console.log(pedro['altura'])

//criando objeto da classe pessoa
let novapessoa=pessoa.pessoawhitoutaltura("Pedro",17)
console.log(novapessoa)
//testando function com objeto
function testecompessoa(teste){
    console.log(teste.idade+" anos de idade")
}
testecompessoa(novapessoa)


