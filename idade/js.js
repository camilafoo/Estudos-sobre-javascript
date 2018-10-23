function validar (){
    var nome= formuser.nome.value;
    var idade= formuser.idade.value;
    if(idade>=18){
        document.write('Nome: ' + nome + "<br>" + "Idade: " + idade + "<br>" + "Você é maior de idade.");
    }else{
        document.write('Nome: ' + nome + "<br>" + "Idade: " + idade + "<br>" + "Você é menor de idade.");
    }
    
}