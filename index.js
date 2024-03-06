const fs = require('fs')
const abrirArquivo = (nomeArquivo) => {
    const exibirConteudo = (erro, conteudo) => {
            if(erro){
                console.log(`Erro: ${erro}`)
            }
            else{
                console.log(conteudo.toString())
                const resultado = +conteudo.toString() * 10 //+conteudo.toString, transforma a string em int
                const finalizar = (erro) => {
                    if(!erro) {
                        console.log('Conteúdo escrito com sucesso')
                    }
                    else{
                        console.log('Escrita Falhou')
                    }
                }
                fs.writeFile('resultado.txt', resultado.toString(), finalizar)
            }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo('arquivo.txt')


// function demorada (){
//     //pegar o horário atual do sistema, e deslocar ele 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP: No Operation
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 5
// const b = 5 + 9
// setTimeout(function(){  //Colocamos a execução dessa função na fila para execuções, dando um tempo de 500ms
//     const d = demorada()
//     console.log('d: ' + d)
// }, 500)

// const e = 2 + a + b
// console.log('e: '+ e)


// function demorada (){
//     //pegar o horário atual do sistema, e deslocar ele 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP: No Operation
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 5
// const b = 5 + 9
// const d = demorada () //Mesmo não sendo necessária ela deve ser executada, atrasando o resto da execução

// const e = 2 + a + b
// console.log(e)



// const a = 2 + 7
// const b = 5
// console.log (a+b)

// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a última...')


// //uma pessoa chamada João que tem 17 anos de idade
// let pessoa = {
//     nome: 'João',    //nome é uma chave e Joao é o valor dessa chave
//     idade: 17
// }  //Para acessar os membros podemos usar . ou []
// console.log(pessoa.nome)  
// console.log(pessoa['idade'])

// let pessoa1 = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 14
//     }
// }
// console.log(pessoa1['endereco']['logradouro'], pessoa1.endereco.numero)

// let concessionaria = {
//     CPNJ: '837428472',
//     endereco: {
//         logradouro: 'Rua J',
//         numero: 50
//     },
//     carro: [
//         {
//             marca: 'Honda',
//             modelo: 'Civic',
//             ano: 2015
//         },
//         {
//             marca:'Ford',
//             modelo: 'Fiesta',
//             ano: 2015
//         }
//     ]
// }

// console.log(concessionaria.carro[1].marca)

//CALCULADORA QUE FAZ SOMA E SUBTRAÇÃO CADA OPERAÇÃO ENVOLVE DOIS OPERANDOS
// let calculadora = {
//     soma: (a , b) => a+b,
//     subtracao: function (a,b){
//         return (a - b)
//     }
// }


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


// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// eAgoraResult.f1()
// eAgoraResult.f2()

// function saudacoesFactory (saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('Ola', 'Jão')
// let tchauJoao = saudacoesFactory('Tchau', 'Jão')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'João'
//     return function (){
//         console.log(`Ola, ${nome}`)
//     }
// }

// let olaResult = ola()
// olaResult ()

// 
// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome) //g tem acesso a variável "nome" pois é uma função interna a F e tem acesso as variáveis da função mãe, porém a mãe não tem acesso as variaveis da função filha
//     }
//     g()
// }
// f()


// let umaFuncao = function (){
//     console.log ("Fui armazenada em uma variável")
// }
// umaFuncao()

// f(function(){
//     console.log("Estou sendo passada para f...")
// })

// function f(funcao){  //FUNÇÃO DE ALTA ORDEM POR RECEBER UMA FUNÇÃO COMO PARAMETRO
//     funcao()
// }


// function g(){   //função de alta ordem tb pois define uma função dentro dela
//     function outrafuncao(){
//         console.log ("Fui definida por g")
//     }
//     return outrafuncao
// }

// g()() //Chama a função "outrafuncao" (pois é o retorno da expressão g()) e o segundo () executa

// f(g()) //f chama a outra função

// function produzUmaFuncao(a, b, operador){
//     if (operador === '+') return function (a, b){
//         a + b
//     }
//     else if (operador === '-') return (a, b) => a - b
// }

// function executa(f){
//     f()
// }

// executa(function(a,b){return a + b})


// public class Teste{
//     public void m(){

//     }
//     public void testando(){
//         var meuMetodo = m;
//     }
// }


//FUNÇÕES

// const hello = () => console.log("Hello")
// hello()

// const dobro = valor => valor * 2

// let triplo = (valor) => {
//     return valor * 3
// }

// function f3 () {

// }

// const ehPar = n => n % 2 === 0
// console.log(ehPar(10))

// const ehPar2 = n => {n % 2 === 0}
// console.log(ehPar2(10))

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