let primeiroNumero = null;

function botaoSomarFoiClicado() {
    document.querySelector('#operacao-mais').addEventListener('click', function() {
        primeiroNumero = parseFloat(output.textContent.replace(/\./g, '').replace(',', '.'))
        output.innerHTML = 0
        operacaoAtual = 'soma'
    })
}

function botaoSubtrairFoiClicado() {
    document.querySelector('#operacao-menos').addEventListener('click', function() {
        primeiroNumero = parseFloat(output.textContent.replace(/\./g, '').replace(',', '.'))
        output.innerHTML = 0
        operacaoAtual = 'subtracao'
    })
}

function botaoMultiplicarFoiClicado() {
    document.querySelector('#operacao-vezes').addEventListener('click', function() {
        primeiroNumero = parseFloat(output.textContent.replace(/\./g, '').replace(',', '.'))
        output.innerHTML = 0
        operacaoAtual = 'multiplicacao'
    })
}

function botaoDividirFoiClicado() {
    document.querySelector('#operacao-divisao').addEventListener('click', function() {
        primeiroNumero = parseFloat(output.textContent.replace(/\./g, '').replace(',', '.'))
        output.innerHTML = 0
        operacaoAtual = 'divisao'
    })
}

function botaoPorcentagemFoiClicado() {
    document.querySelector('#porcentagem').addEventListener('click', function() {
        primeiroNumero = parseFloat(output.textContent.replace(/\./g, '').replace(',', '.'))
        const resultado = primeiroNumero / 100
        output.innerHTML = resultado.toLocaleString('pt-BR')
    })
}


function calcularResultados() {
    document.querySelector('#igual').addEventListener('click', function() {
        if (primeiroNumero != null) {
            const segundoNumero = parseFloat(output.textContent.replace(/\./g, '').replace(',', '.'))

            if (operacaoAtual == 'soma') {
                const resultado = primeiroNumero + segundoNumero
                output.innerHTML = resultado.toLocaleString('pt-BR')
                primeiroNumero = null
            }

            else if (operacaoAtual == 'subtracao') {
                const resultado = primeiroNumero - segundoNumero
                output.innerHTML = resultado.toLocaleString('pt-BR')
                primeiroNumero = null
            }

            else if (operacaoAtual == 'multiplicacao') {
                const resultado = primeiroNumero * segundoNumero
                output.innerHTML = resultado.toLocaleString('pt-BR')
                primeiroNumero = null
            }

            else if (operacaoAtual == 'divisao') {
                const resultado = primeiroNumero / segundoNumero
                output.innerHTML = resultado.toLocaleString('pt-BR')
                primeiroNumero = null
            }
        }
    })
}

botaoSomarFoiClicado()
botaoSubtrairFoiClicado()
botaoMultiplicarFoiClicado()
botaoDividirFoiClicado()
botaoPorcentagemFoiClicado()
calcularResultados()

