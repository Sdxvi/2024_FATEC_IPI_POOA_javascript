//LET
// let nome = "Rodrigo"
// console.log(nome)
// nome = "Pedro"
// console.log(nome)

// let a = 2  //javascript dinamicamente tipado, feito pelo interpretador, em tempo de execução
// console.log(typeof(a))
// a = "abc"
// console.log((typeof(a)))

//VAR
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//     var nome = 'João'
//     console.log(`Parabéns, ${nome}. Você pode dirigir`)
// }
// console.log(`Até mais, ${nome}`)


// //declaração de constantes em Java Script
// const nome = `José`
// console.log(nome)
// //nome = "Pedro"
// const endereco = 'Rua B, 21'
// console.log(endereco)
// const sobrenome = `Bossini`
// console.log(sobrenome)
// //Me chamo Vinicius. Meu sobrenome é Camargo.
// console.log('Me chamo ' + nome + '. Meu sobrenome é ' + sobrenome + '.')
// console.log(`Me chamo ${nome}. Meu sobrenome é ${sobrenome}`) //usando CRASE é possível concatenar dessa maneira

// //Coerção Implicita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)  //É feito implicitamente a concatenação pois não foi deixado claro se era pra ser feito uma soma ou concatenação

// //Coerção Explícita
// const n4 = n1 + Number(n2)
// console.log(n4) //agora foi explicitado que n2 deve ser um NUMBER, para assim ser realizada a soma

//teste de == e ===
// console.log(1 == 1)
// console.log (1 == '1')
// console.log(1 === 1)
// console.log (1 === '1')
// console.log(1 == true)
// console.log(1 == [1])
// console.log(1 == [2])
// console.log(1 == [1, 2])
// console.log(1 == [1, 1])
// console.log(null == null)
// console.log (null == undefined)
// console.log([] == false)
// console.log([] == [])

//declaração de vetor
// v1 =[]
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// console.log(v1)
// for (let i=0; i <v1.length; i++){
//     console.log(v1[i])
// }



//FUNÇÕES

// function hello(nome){
//     console.log('oi, ' + nome)
// }
// hello('Vinicius')

// function hello(){
//     console.log('tchau')
// }
// hello()
// function hello(){
//     console.log('oi')
// }
// hello()


//FUNÇÕES

// const hello = () => console.log("Hello")
// hello()

// const dobro = valor => valor * 2

// let triplo = (valor) => {
//     return valor * 3
// }

function f3 () {
    
}

const ehPar = n => n % 2 === 0
console.log(ehPar(10))

const ehPar2 = n => {n % 2 === 0}
console.log(ehPar2(10))

// const f = () => {}
// const umArgumento = n => {
// 	console.log(n)
// }

// const soUmaLinha = () => console.log("oi")

// const teste1 = (a, b) => {
// 	return a + b
// }

// const teste2 = (a, b) => a + b


// const dobro = function (n){
// 	return 2 * n
// }

// const result = dobro(6)
// console.log(result)

// //valor padrão para um parâmetro
// const triplo = function (n = 5){
// 	return 3 * n
// }

// console.log(triplo())
// console.log(triplo(10))