'use strict';

(() => {
  document.getElementById('btn-send').addEventListener('click', (event) => {
    document.querySelectorAll('input.input-form, select.input-form').forEach((value, key, parent) => {
      if (value.value !== '') {
        alert('El campo "' + value.id + '" es valido.');
      } else {
        console.log(value);
        alert('El campo "' + value.id + '" es requerido.');
      }
    });
  });
})();

