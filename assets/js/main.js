let display = document.querySelector('.display')
const botoes = document.querySelectorAll('.numero')
const operadores = document.querySelectorAll('.operador')
let somaArr = []
let subArr = []
let multArr = []
let divArr = []
let porcentArr = []

for(let i = 0; i < botoes.length; i++) {
    const botao = botoes[i]
    botao.addEventListener('click', () => {
        display.value += botao.textContent
    })
}

for(let i = 0; i < operadores.length; i++) {
    const operador = operadores[i]
    operador.addEventListener('click', () => {
        if(operador.textContent == '+') {
            operacao(somaArr)
        }

        if(operador.textContent == '-') {
            operacao(subArr)
        }

        if(operador.textContent == '×') {
            operacao(multArr)
        }

        if(operador.textContent == '/') {
            operacao(divArr)
        }

        if(operador.textContent == '%') {
            display.value /= 100
            porcentArr.push(Number(display.value))
        }

        if(operador.textContent == '+/-') {
            display.value *= -1
        }

        if(operador.textContent == 'CE') {
            somaArr = []
            subArr = []
            multArr = []
            divArr = []
            display.value = ''
        }

        if(operador.textContent == 'C') {
            display.value = ''
        }

        if(operador.textContent == '=' && somaArr.length > 0) {
            let soma = somaArr.reduce((total, atual) => {
                return total + atual
            })
            soma += Number(display.value)
            display.value = soma
        }

        if(operador.textContent == '=' && subArr.length > 0) {
            let sub = subArr.reduce((total, atual) => {
                return total - atual
            })
            sub -= Number(display.value)
            display.value = sub
        }

        if(operador.textContent == '=' && multArr.length > 0) {
            let mult = multArr.reduce((total, atual) => {
                return total * atual
            })
            mult *= Number(display.value)
            display.value = mult
        }

        if(operador.textContent == '=' && divArr.length > 0) {
            let div = divArr.reduce((total, atual) => {
                return total / atual
            })
            div /= Number(display.value)
            display.value = div
        }

        if(operador.textContent == '=' && porcentArr.length > 0) {
            let porcentArr = porcentArr.reduce((total, atual) => {
                return total / atual
            })
        }
    })

    function operacao(array) {
        array.push(Number(display.value))
        display.value = ''
    }
}
