function verificar(){
    var n1 = document.querySelector("#n1").innerHTML;
    var n2 = document.querySelector("#n2").value;

    if(n1 == n2){
        alert("Você acertou!!!!"); 
       } else{
           alert("Você errou!");
       }
       resertar();
}
function resertar(){
    document.querySelector("#n2").value="";
    var r = Math.floor(Math.random()*100 );
    document.querySelector("#n1").innerHTML=r;

}