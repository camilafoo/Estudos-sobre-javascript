function addIngrediente() {
    var ingrediente = document.getElementById("ingrediente").value;

    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ingrediente+"</li>"

    document.getElementById("lista").innerHTML = listahtml;
}