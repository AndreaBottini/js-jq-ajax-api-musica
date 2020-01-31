// Attraverso una chiamata ajax all’Api di Boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.


$(document).ready(function() {
	$.ajax( {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, response) {
      console.log(data.response);
    },
    error: function (data, response) {
      alert('Errore del server. Correggi!')
    }

  })
});
