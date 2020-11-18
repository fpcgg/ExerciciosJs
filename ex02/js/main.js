//buscando os dados de input
let fname = document.querySelector("input#nome") //CUIDADO!! O input é captado como objeto
let sname = document.querySelector("input#sobrenome")
let button = document.querySelector("input#button")

//adicionando o evento ao botão
button.addEventListener('click', () => {
    window.alert(`Olá, ${fname.value} ${sname.value}, seja bem vindo!`)
})