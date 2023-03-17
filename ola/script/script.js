var array = ['img/robotron-azul.png',
'img/robotron-amarelo.png',
'img/robotron-branco.png',
'img/robotron-preto.png',
'img/robotron-rosa.png',
'img/robotron-vermelho.png']

var i = 0;

function voltar() {
    if (i < 5) {
        i++;
    }

    else {
        i = 0;
    }

    document.getElementById("robotron").src = array[i];
}

function avançar() {
    if (i > 0) {
        i--;
    }

    else {
        i = 5;
    }

    document.getElementById("robotron").src = array[i];
}

var botoesMenos = Array.from(document.getElementsByClassName("controle-ajuste-menos"))
var botoesMais = Array.from(document.getElementsByClassName("controle-ajuste-mais"))

console.log(botoesMenos);
console.log(botoesMais);

botoesMenos.forEach(botão => {
    botão.addEventListener('click', function diminuirAtributo(){
        if (botão.nextElementSibling.value == "00"){
            botão.nextElementSibling.value = "00"
        } else {
            if (botão.nextElementSibling.value == 10){
                botão.nextElementSibling.value = "00"
            } else {
                botão.nextElementSibling.value -= 10;
            }
        }
    })
})

botoesMais.forEach(botão => {
    botão.addEventListener('click', function aumentarAtributos() {
        if (botão.previousElementSibling.value == "00") {
            botão.previousElementSibling.value = 10;
        } else {
            if (botão.previousElementSibling.value < 100) {
                botão.previousElementSibling.value = Number(botão.previousElementSibling.value) + 10;
            } else {
                botão.previousElementSibling.value = 100;
            }
        }
    })
})
