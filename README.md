# Gestión SessionStorage

Demo en JavaScript y HTML que muestra el uso básico de la API `sessionStorage` del navegador para persistir datos clave-valor durante la sesión de la pestaña.

## Características

- Guardar un dato asociando un nombre de usuario a una categoría (Administrador, Editor o Usuario) mediante `sessionStorage.setItem`.
- Leer el valor asociado a un nombre concreto.
- Listar todos los pares clave-valor almacenados actualmente en `sessionStorage`.
- Borrar el dato asociado a un nombre concreto (`sessionStorage.removeItem`).
- Vaciar por completo el almacenamiento de la sesión (`sessionStorage.clear`).
- Mensajes de aviso (`alert`) para validar que los campos requeridos estén rellenos antes de operar.

A diferencia de `localStorage`, los datos guardados aquí desaparecen al cerrar la pestaña o ventana del navegador.

## Tecnologías

- HTML5
- JavaScript vanilla (API `sessionStorage`, sin frameworks ni dependencias externas)

## Instalación / Cómo ejecutarlo

No requiere instalación ni servidor:

1. Clona el repositorio.
2. Abre `public/index.html` directamente en un navegador (Chrome, Firefox, Edge, etc.).

Ejercicio académico que practica el uso de la API `sessionStorage` para almacenar datos temporales en el navegador durante la sesión de la pestaña.

## Licencia

GPL versión 3 (ver archivo [LICENSE](LICENSE)).
