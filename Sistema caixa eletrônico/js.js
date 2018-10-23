var op, saldo, saque, dep;
saldo=1000
op=prompt("Selecione a operação: (1) -SALDO | (2) - SAQUE | (3) -DEPÓSITO");

switch(op){
    case "1":
    document.write("SEU SALDO ATUAL É : " + "<br>" + saldo);
    break;

    case "2":
    saque=prompt("DIGITE O VALOR DO SAQUE");
    if(saque>saldo){
        alert("SALDO INSUFICIENTE!!!!");
    }else{
        saldo-=saque
        document.write("SEU SAQUE FOI :" + "<br>" + saque + '<br>');
        document.write('SEU SALDO ATUAL É :' + '<br>' + saldo);
    }
    break;

    case "3":
    dep=prompt("DIGITE SEU DEPÓSITO");
    saldo+=parseInt(dep);
    document.write('SEU DEPÓSITO FOI :' + '<br>' + dep);
    document.write('SEU SALDO È DE : ' +'<br>' + saldo);
    break;

    default:
    document.write("Erro: SÓ HÀ 3 OPIÇÕES. ")
}