let inteiros=[]
for(i=0;i<10;i++){
    inteiros.push(i)
}
console.log(inteiros)
var nome="pedro"
var tamanho=nome.length
var auxtamanho=tamanho
var letras=[]
for(i=0;i<tamanho;i++){
    letras.push(nome[i])
}
for(i=0;i<tamanho/2;i++){
    aux=letras[i]
    letras[i]=letras[auxtamanho-1]
    letras[auxtamanho-1]=aux
    auxtamanho--
}
console.log(letras)