var vez = 'O';

var mecher = document.querySelector('.Turn')

var numO = 0
var numX = 0


function limpar() {
    document.getElementById('um').innerHTML = ''
    document.getElementById('dois').innerHTML = ''
    document.getElementById('tres').innerHTML = ''
    document.getElementById('quatro').innerHTML = ''
    document.getElementById('cinco').innerHTML = ''
    document.getElementById('seis').innerHTML = ''
    document.getElementById('sete').innerHTML = ''
    document.getElementById('oito').innerHTML = ''
    document.getElementById('nove').innerHTML = ''
}



var button = document.getElementById('mecher').style
setInterval(() => {
    if (vez === 'O') {

        button.marginLeft = '0px'

    }
    else if (vez === 'X') {

        button.marginLeft = '80px'

    }
}, 1000);

var quadrado = document.querySelector('.quadrado')

function jogo(numero) {

    var numero2 = document.getElementById(numero)


    if (numero2.innerHTML !== '') {

    } else {
        if (vez === 'O') {

            numero2.innerHTML = 'O'
            vez = 'X'

        }
        else if (vez === 'X') {

            numero2.innerHTML = 'X'
            vez = 'O'

        }



    }
}



function reset() {
    limpar()
}




function contador(){
    document.querySelector('.score').innerHTML = 'SCORE: O = ' + numO + '   X = ' + numX
}



setInterval(() => {
    var um = document.getElementById('um').innerHTML
    var dois = document.getElementById('dois').innerHTML
    var tres = document.getElementById('tres').innerHTML
    var quatro = document.getElementById('quatro').innerHTML
    var cinco = document.getElementById('cinco').innerHTML
    var seis = document.getElementById('seis').innerHTML
    var sete = document.getElementById('sete').innerHTML
    var oito = document.getElementById('oito').innerHTML
    var nove = document.getElementById('nove').innerHTML


    if (um == 'O' && dois == 'O' && tres == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()

    } else if (um == 'O' && cinco == 'O' && nove == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    } else if (um == 'O' && quatro == 'O' && sete == 'O') {
        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    } else if (dois == 'O' && cinco == 'O' && oito == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    } else if (tres == 'O' && seis == 'O' && nove == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    } else if (quatro == 'O' && cinco == 'O' && seis == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    } else if (tres == 'O' && cinco == 'O' && sete == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    } else if (nove == 'O' && oito == 'O' && sete == 'O') {

        alert('O ganhou')
        limpar()
        numO += 1
        contador()
    }else if (um == 'X' && dois == 'X' && tres == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()

    } else if (um == 'X' && cinco == 'X' && nove == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    } else if (um == 'X' && quatro == 'X' && sete == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    } else if (dois == 'X' && cinco == 'X' && oito == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    } else if (tres == 'X' && seis == 'X' && nove == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    } else if (quatro == 'X' && cinco == 'X' && seis == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    } else if (tres == 'X' && cinco == 'X' && sete == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    } else if (nove == 'X' && oito == 'X' && sete == 'X') {

        alert('X ganhou')
        limpar()
        numX += 1
        contador()
    }






}, 1000)



