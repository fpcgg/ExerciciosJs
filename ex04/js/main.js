//buscando os inputs
const n1 = document.querySelector("input#n1")
const n2 = document.querySelector("input#n2")
const button = document.querySelector("input#button")
//criando variáveis para os valores dos inputs
let fn;
let sn;

//vinculando o evento ao botão
button.addEventListener("click", () => {
    //buscando o valor dos inputs
    fn = Number(n1.value)
    sn = Number(n2.value)
    //buscando a div de resposta
    let result = document.querySelector("div#res")
    //fazendo a div aparecer
    result.style.display = "block"
    //colocando o resultado da soma dentro da div
    result.innerHTML = `A soma dos números selecionados resulta em ${fn + sn}.`
    //deixando em foco o primeiro input
    n1.focus()
})