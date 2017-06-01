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

function grabarItem(user, categoria) {
    if (user.value.length != 0 && categoria.value.length != 0) {
        sessionStorage.setItem(user.value, categoria.value);
		alert(user.value + " -> " + categoria.value);
    } else {
        alert("Rellena el nombre y selecciona la categoría para almacenarlo");
    }
}

function leerItem(user) {
	var sw = false, i;
	if (user.value.length != 0) {
		for (i=0; i<sessionStorage.length; i++) {
			if (sessionStorage.key(i) == user.value) {
				alert(user.value + " -> " + sessionStorage.getItem(sessionStorage.key(i)));
				sw = true;
				break;
			}
	    }
        (!sw) ? alert("No se encontro el nombre") : "";
	} else {
		alert("Rellena el nombre para buscar sus datos");
	}
}

function leerTodo() {
    if (sessionStorage.length != 0) {
		var datos = "";
        for (var i=0; i<sessionStorage.length; i++) {
			datos += sessionStorage.key(i) + " -> " + sessionStorage.getItem(sessionStorage.key(i)) + "\n";
        }
		alert(datos);
    } else {
        alert("No hay datos guardados");
    }
}

function borrarItem(user) {
    if (user.value.length != 0) {
        var sw = false;
        for (var i=0; i<sessionStorage.length; i++) {
            if (sessionStorage.key(i) == user.value) {
                sessionStorage.removeItem(user.value);
                sw = true;
                break;
            }
        }
        (sw) ? alert("Datos de " + user.value + " eliminados") : alert("No se encontró el nombre");
    } else {
        alert("Rellena el Nombre para borrar sus datos");
    }
}

function borrarTodo() {
    sessionStorage.clear();
    alert("Eliminados todos los datos");
}
