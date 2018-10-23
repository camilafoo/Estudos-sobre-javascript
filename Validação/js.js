function validar(){
    var nome = formulario.nome.value;
    var email = formulario.email.value;
    var senha = formulario.senha.value;

    if(nome==""){
        alert("Preencha o campo nome");
        formulario.nome.focus();
        return false;
    }

    if(email==""){
        alert("Preencha o campo de email");
        formulario.email.focus();
        return false;
    }

    if(senha==""){
        alert("Preencha o campo senha");
        formulario.senha.focus();
        return false;
    }
}