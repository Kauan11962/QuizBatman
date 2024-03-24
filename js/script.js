var tempo = 10;

function iniciar(){
    time =  setInterval(function() {
        tempo--


        document.getElementById("tempo").innerHTML = tempo;

        if(tempo == "0"){
            document.getElementById("tempo").innerHTML = "0";
            clearInterval(time);
            document.getElementById("triste").style = "display: flex;"
            document.getElementById("display").style = "display: none;"
            document.getElementById("none").style = "display: none;"
            document.getElementById("none2").style = "display: none;"
        }
    }, 1000);
}

function resposta(){
    var checkboxes = document.querySelectorAll('input[name="resposta1"]');

    var respostaCorreta;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked && checkbox.value === "certa") {
            respostaCorreta = 1;
        }else if(checkbox.checked && checkbox.value === "errado"){
            respostaCorreta = 0;
        }

        if(respostaCorreta == 1){
            document.getElementById("altera1").innerHTML = "Você acertou a primeira pergunta";
            document.getElementById("altera1").style = "color: rgb(55 117 213);"
        }else if(respostaCorreta == 0)
        {
            document.getElementById("altera1").innerHTML = "Você errou a segunda pergunta";
            document.getElementById("altera1").style = "color: #fd76b4;"
        }
    });

    console.log(respostaCorreta);

    document.getElementById("label").style = "color : green;"
    document.getElementById("label").style = "color : green;"
    document.getElementById("label2").style = "color : red;"
    document.getElementById("label3").style = "color : red;"
    document.getElementById("label4").style = "color : red;"
    setInterval(() => {
        document.getElementById("display").style = "display : none;"
        document.getElementById("display2").style = "display : flex;"
    }, 1000);
}

function resposta2(){
    var checkboxes2 = document.querySelectorAll('input[name="resposta2"]');

    var respostaCorreta2;
    checkboxes2.forEach(function(checkbox2) {
        if (checkbox2.checked && checkbox2.value === "certa") {
            respostaCorreta2 = 1;
        }else if(checkbox2.checked && checkbox2.value === "errado"){
            respostaCorreta2 = 0;
        }

        if(respostaCorreta2 == 1){
            document.getElementById("altera2").innerHTML = "Você acertou a segunda pergunta";
            document.getElementById("altera2").style = "color: rgb(55 117 213)"
        }else if(respostaCorreta2 == 0)
        {
            document.getElementById("altera2").innerHTML = "Você errou a segunda pergunta";
            document.getElementById("altera2").style = "color: #fd76b4;"
        }
    });

    console.log(respostaCorreta2);

    document.getElementById("label7").style = "color : green;"
    document.getElementById("label6").style = "color : red;"
    document.getElementById("label8").style = "color : red;"
    document.getElementById("label5").style = "color : red;"
    setInterval(() => {
        document.getElementById("none").style = "display : none;"
        document.getElementById("display3").style = "display : flex;"
    }, 1000);
}


function resposta3(){
    var checkboxes3 = document.querySelectorAll('input[name="resposta3"]');

    var respostaCorreta3;
    checkboxes3.forEach(function(checkbox3) {
        if (checkbox3.checked && checkbox3.value === "certa") {
            respostaCorreta3 = 1;
        }else if(checkbox3.checked && checkbox3.value === "errado"){
            respostaCorreta3 = 0;
        }
    });

    console.log(respostaCorreta3);

    clearInterval(time);
    document.getElementById("label9").style = "color : red;"
    document.getElementById("label10").style = "color : green;"
    document.getElementById("label11").style = "color : red;"
    document.getElementById("label12").style = "color : red;"
    setInterval(() => {
        document.getElementById("none2").style = "display : none;"
        document.getElementById("resul").style = "display : flex;"
    }, 1000);

    if(respostaCorreta3 == 1){
        document.getElementById("altera3").innerHTML = "Você acertou a terceira pergunta";
        document.getElementById("altera3").style = "color: rgb(55 117 213)"
    }else
    {
        document.getElementById("altera3").innerHTML = "Você errou a terceira pergunta";
        document.getElementById("altera3").style = "color: #fd76b4;"
    }
}

