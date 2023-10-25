let valor = 3 //variável
let valor2 = "3"
let nome = "Victor Sousa"

const url = "http://google.com.br"

console.log(valor)
console.log(typeof(valor))

console.log(typeof(valor2))

console.log(url)

function ola(){
  console.log("Olá Mundo!")
}

ola()

function soma(numero1, numero2){
  return numero1+numero2
}

console.log(soma(5,3))

//arrow function
const olaMundo = () => console.log("Olá mundo2")
olaMundo()

const somaNum = (num1, num2) => num1+num2
console.log(somaNum(55,35))