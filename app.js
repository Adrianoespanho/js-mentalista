function Chutar(){
    let numeroSecreto = Math.floor(8* Math.random())
    console.log(numeroSecreto)
    let chute = document. getElementById("valor"). value

    if(chute == numeroSecreto){
    //verdadeiro 
    document.getElementById("resultado").innerHTML =  "Acertou"
   
}
else{
    //falso
    document.getElementById("resultado").innerHTML = "Errou"
  }
}

//1 - Gerar número aleatório entre 0 e 10 com número secreto 
//2 - Substituir o texto por imagens (carinha feliz e carinha triste)
//3 - Mudar o layout (cores , fundo , fontes )