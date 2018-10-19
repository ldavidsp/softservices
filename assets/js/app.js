'use strict';

(() => {
	document.getElementById('btn-send').addEventListener('click', (event) => {
		document.querySelectorAll('input, select').forEach((value, key, parent) => {
			if (value.value !== '') {
				alert("Todos los datos son correctos")
			} else {
				alert('El campo "'+ value.id+'" es requerido.');
			}
		});
	});
})();

