const mapeandoChaves = {
    "7": "numero-sete",
    "8": "numero-oito",
    "9": "numero-nove",
    "4": "numero-quatro",
    "5": "numero-cinco",
    "6": "numero-seis",
    "1": "numero-um",
    "2": "numero-dois",
    "3": "numero-tres",
    "0": "numero-zero",
    ",": "virgula",
    "%": "porcentagem",
    "/": "operacao-divisao",
    "x": "operacao-vezes",
    "-": "operacao-menos",
    "+": "operacao-mais"
}

document.addEventListener('keydown', function(event) {
    if (event.key in mapeandoChaves) {
        document.querySelector(`#${mapeandoChaves[event.key]}`).click()
    }

    if (event.key === "=" || event.key === "Enter") {
        document.querySelector("#igual").click()
    }
})