//buscando os inputs
const w1 = document.querySelector("input#w1")
const w2 = document.querySelector("input#w2")
const button = document.querySelector("input#button")
//criando variáveis para os valores dos inputs
let fw;
let sw;

//vinculando o evento ao botão
button.addEventListener("click", () => {
    //buscando o valor dos inputs
    fw = w1.value
    sw = w2.value
    //trocando os valores dentro dos inputs
    w1.value = sw
    w2.value = fw
    //deixando em foco o primeiro input
    w1.focus()
})