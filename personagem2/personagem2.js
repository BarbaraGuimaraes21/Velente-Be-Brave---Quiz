function faseDoisElinor() {
    var escolha = prompt('Digite a alternativa escolhida através da letra:')
    var contador = 2

    while (contador >= 1) {
        if (escolha == 'b') {
            alert("Uhul, você passou de fase!");
            return location = "./segundafasee.html"
        } else if (escolha == 'a' || escolha == 'c') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite as opções 'a' 'b' ou 'c'")
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        }
    }
    return location = "./gameoverelinor.html"
}

function faseTresElinor() {
    var escolha = prompt('Digite a alternativa escolhida através da letra:')
    var contador = 2

    while (contador >= 1) {
        if (escolha == 'c') {
            alert("Uhul, você passou de fase!");
            return location = "./terceirafasee.html"
        } else if (escolha == 'a' || escolha == 'b') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite as opções 'a' 'b' ou 'c'")
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        }
    }
    return location = "./gameoverelinor.html"
}

function faseFinalElinor() {
    var escolha = prompt('Digite a alternativa escolhida através da letra:')
    var contador = 2

    while (contador >= 1) {
        if (escolha == 'c') {
            alert("Uhul, você G-A-N-H-O-U!");
            return location = "./ganhoue.html"
        } else if (escolha == 'a' || escolha == 'b') {
            contador--;
            alert(`Resposta incorreta, tente novamente!\n Você tem ${contador} tentativas!`);
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        } else {
            alert("Resposta inválida! Digite as opções 'a' 'b' ou 'c'")
            escolha = prompt('Digite a alternativa escolhida através da letra:')
        }
    }
    return location = "./gameoverelinor.html"
}