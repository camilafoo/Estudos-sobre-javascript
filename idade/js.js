function validar (){
    var nome= formuser.nome.value;
    var idade= formuser.idade.value;
    if(idade>=18){
      
        document.getElementById('resultado').textContent="Você é maior de idade";
    }else{
        document.getElementById("resultado").textContent="Você é menor de idade";
    }
    
}