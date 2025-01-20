const{gets,print}=require('./functions');


(function(){
let alunos=5
let vetor=[]
let maior=-Infinity
let max=100
let min=1
for(i=0;i<alunos;i++){
    vetor[i]=Math.floor((Math.random()*(max-min+1)))+min
    if(vetor[i]>maior){
        maior=vetor[i]
    }
}
print("O maior numero foi : "+maior)

})()