const output = document.querySelector('#principal')
const numerosOperacoes = ['#numero-sete', '#numero-oito', '#numero-nove', '#numero-quatro', '#numero-cinco', '#numero-seis', '#numero-um', '#numero-dois', '#numero-tres', '#numero-zero', '#virgula']

const listaDeNumeros = document.querySelectorAll('.numero')

    for (let i = 0; i < listaDeNumeros.length; i++) {
        const numero = listaDeNumeros[i]
        const numeroEscolhido = parseInt(numero.textContent)
    
        numero.onclick = function() {
            const numeroDeDigitos = output.textContent.replace(/[^0-9]/g, '').length
            if (numeroDeDigitos < 9) {
                if (output.textContent === "0") {
                    output.innerHTML = parseInt(numeroEscolhido)
                } else if (output.textContent != "0"){
                    output.innerHTML += parseInt(numeroEscolhido)
                }
                formatarOutput()
                diminuirTamanhoDaFonte()
            }
        }
    }

function formatarOutput() {
    if (output.textContent.includes(',')) {
        const partes = output.textContent.split(',')
        const parteInteira = parseInt(partes[0].replace(/\./g, ''))
        output.textContent = parteInteira.toLocaleString('pt-BR') + ',' + partes[1]
      } else {
        const formatar = parseInt(output.textContent.replace(/\./g, ''))
        output.textContent = formatar.toLocaleString('pt-BR')
      }
}

function diminuirTamanhoDaFonte() {
    const elementos = document.querySelectorAll('.principal')
    if (output.textContent.length > 7) {
        elementos.forEach(elemento => {
            elemento.style.fontSize = '3.5em'
        })
    }
}

function voltarTamanhoFonteOriginal() {
    const elementos = document.querySelectorAll('.principal')
    elementos.forEach(elemento => {
        elemento.style.fontSize = '5em'
    })
}

function mudarAcParaC() {
    numerosOperacoes.forEach(botao => {
        document.querySelector(botao).addEventListener('click', function() {
            document.querySelector('#ac').innerHTML = 'C'
        })
    })
}

function limpaTela() {
    document.querySelector('#ac').addEventListener('click', function() {
        if (document.querySelector('#ac').textContent == 'C') {
            output.innerHTML = 0
            voltarTamanhoFonteOriginal()
            document.querySelector('#ac').innerHTML = 'AC'
        } 
        
        else {
            output.innerHTML = 0
            voltarTamanhoFonteOriginal()
        }
    })
}

function permitirNumeroDecimal() {
    document.querySelector('#virgula').addEventListener('click', function() {
        const numeroDeDigitos = output.textContent.replace(/[^0-9]/g, '').length
        if (output.textContent != "0" && !output.textContent.includes(',') && numeroDeDigitos < 9) {
            output.innerHTML += ","
        }
    })
}

function permitirNumeroNegativo() {
    document.querySelector('#mais-menos-inicio').addEventListener('click', function() {
        if (!output.textContent.includes('-')) {
            output.innerHTML = '-' + output.textContent
        } else {
            output.innerHTML = output.textContent.replace('-', '')
        }
    })
}

mudarAcParaC()
limpaTela()
permitirNumeroDecimal()
permitirNumeroNegativo()