function converte(){
    var temperaturaInicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(document.getElementById("cf").checked){
        resultado = (temperaturaInicial * 9/5) +32
    }
    else if(document.getElementById("fc").checked){
        resultado = (temperaturaInicial  -32) * (5/9)
    }
    //Fazer as demais else if com sus respectivas fórmulas
    else if(document.getElementById("kc").checked){
        resultado = (temperaturaInicial - 273.15) 
    }
    else if(document.getElementById("ck").checked){
        resultado = (temperaturaInicial + 273.15) 
    }
    else if(document.getElementById("kf").checked){
        resultado = (temperaturaInicial - 273.15)*(9/5)+32
    }
    else if(document.getElementById("fk").checked){
        resultado = (temperaturaInicial - 32)*(5/9)+273.15
    }

    document.getElementById("r").innerHTML = resultado
}