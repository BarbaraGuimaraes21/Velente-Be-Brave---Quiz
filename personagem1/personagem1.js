function faseDoisMerida() {
    var escolha = prompt('Digite a alternativa escolhida através da letra:')
    var contador = 2

    while (contador >= 1) {
        if (escolha == 'b') {
            alert("Uhul, você passou de fase!");
            return location = "./segundafase.html"
        } else if (escolha == 'a' || escolha == 'c') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite as opções 'a' 'b' ou 'c'")
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        }
    }
    return location = "./gameovermerida.html"
}

function faseTresMerida() {
    var escolha = prompt('Digite a alternativa escolhida através da letra:')
    var contador = 2

    while (contador >= 1) {
        if (escolha == 'c') {
            alert("Uhul, você passou de fase!");
            return location = "./terceirafase.html"
        } else if (escolha == 'a' || escolha == 'b') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite as opções 'a' 'b' ou 'c'")
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        }
    }
    return location = "./gameovermerida.html"
}

function faseFinalMerida() {
    var escolha = prompt('Digite a alternativa escolhida através da letra:')
    var contador = 2

    while (contador >= 1) {
        if (escolha == 'a') {
            alert("Uhul, você G-A-N-H-O-U!");
            return location = "./ganhou.html"
        } else if (escolha == 'b' || escolha == 'c') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite as opções 'a' 'b' ou 'c'")
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        }
    }
    return location = "./gameovermerida.html"
}