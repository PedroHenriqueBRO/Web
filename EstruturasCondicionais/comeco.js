let teste=true
let teste1=false
//testando if e booleanos
if(teste==true){
    console.log("verdadeiro")
}
if(teste1==true){
    console.log("verdadeiro")
}else if(1+1==2){
    console.log("Certo")
}
//ver se é par modo 1
let par=20
if(par%2===0){
    console.log("É par")
}
//ver se é par modo dois
let testandoternario=par%2==0?true:false
console.log(testandoternario)
//ver se é par modo tres
if(testandoternario){
console.log("Par")
}
else if(!testandoternario){
    console.log("impar")
}
let testeigual=5
if(testeigual=='5'){
    console.log("funciona")
}
if(testeigual==='5'){
    console.log("Nao funciona")
}