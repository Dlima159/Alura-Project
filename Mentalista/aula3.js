var numeroSecreto = parseInt(Math.random()*11);


function find(){
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if(chute===numeroSecreto){
        elementoResultado.innerHTML = "Você acertou, o número é "+chute;
    }
    else if(chute>10 || chute<0){
        elementoResultado.innerHTML = "Coloque um número entre 0 e 10";
    }
    else if(chute > numeroSecreto){
        elementoResultado.innerHTML = "Você errou, o número é menor";
    }
    else{
        elementoResultado.innerHTML = "Você errou, o número é maior"
    }
}
