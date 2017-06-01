window.onload = function() {
    var user = document.getElementById("usuario");
    var categoria = document.getElementById("categoria");
    document.getElementById("grabar").addEventListener("click", function(){ grabarItem(user, categoria) });
    document.getElementById("leer").addEventListener("click", function(){ leerItem(user) });
    document.getElementById("leerTodo").addEventListener("click", function(){ leerTodo() });
    document.getElementById("borrar").addEventListener("click", function(){ borrarItem(user) });
    document.getElementById("borrarTodo").addEventListener("click", function(){ borrarTodo() });
	document.getElementById("categoria").options[0].disabled = true;
}
