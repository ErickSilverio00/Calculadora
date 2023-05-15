const acMaisMenosPorcentagem = ['#ac', '#mais-menos-inicio', '#porcentagem']

acMaisMenosPorcentagem.forEach(button => {
    document.querySelector(button).addEventListener('click', function() {
        this.classList.add('clicked')
        setTimeout(() => this.classList.remove('clicked'), 250)
    })
})


const numeros = ['#numero-sete', '#numero-oito', '#numero-nove', '#numero-quatro', '#numero-cinco', '#numero-seis', 
'#numero-um', '#numero-dois', '#numero-tres', '#numero-zero', '#virgula']

numeros.forEach(button => {
    document.querySelector(button).addEventListener('click', function() {
        this.classList.add('clicked')
        setTimeout(() => this.classList.remove('clicked'), 250)
    })
})

const operacoes = ['#operacao-divisao', '#operacao-vezes', '#operacao-menos', '#operacao-mais']
const todosOsBotoes = document.querySelectorAll('button')

todosOsBotoes.forEach(button => {
  button.addEventListener('click', event => {
    todosOsBotoes.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')
  })
})