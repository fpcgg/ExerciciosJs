//buscando os campos de input
let n1 = document.querySelector("input#n1")
let n2 = document.querySelector("input#n2")
//variaveis vazias para receber o valor dos inputs
let fn = "" 
let sn = ""
//buscando o botão
const button = document.querySelector("input#button")

//adicionando a funcionalidade do botão
button.addEventListener('click', () => {
    //buscando o valor dentro dos campos de input
    fn = Number(n1.value)
    sn = Number(n2.value)
    window.alert(`A soma dos números resulta em: ${fn + sn}`)
    window.alert(`A subtração dos números resulta em: ${fn - sn}`)
    window.alert(`A multiplicação dos números resulta em: ${fn * sn}`)
    window.alert(`A divisão dos números resulta em: ${fn / sn}`)
    window.alert(`O resto da divisão dos números resulta em: ${fn % sn}`)
    
})