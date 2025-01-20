let inteiros=[1,2,3,5,6,7,8,9]
inteiros.forEach(element => {
    console.log(element)
});
inteiros.push(10)
console.log(inteiros)
inteiros.pop()
console.log(inteiros)
inteiros[8]=10
console.log(inteiros)
inteiros.splice(1,2)
console.log(inteiros)
let novointeiros=inteiros.filter(item=>item%2!=0)
console.log(novointeiros)