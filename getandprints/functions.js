function print(texto){
    console.log(texto)
}
function gets(texto){
    let prompt=require('prompt-sync')()
    if(texto!=undefined){
        console.log(texto)
    }
    let aux=prompt()
    return aux

}
module.exports={gets:gets
             ,print:print}