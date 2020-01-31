// Attraverso una chiamata ajax all’Api di Boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.


$(document).ready(function() {
	$.ajax( {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, response) {
      console.log(data);
      printData(data.response)
    },
    error: function (data, response) {
      alert('Errore del server. Correggi!')
    }
  });
});

function printData (variousCd){
  // console.log(variousCd);
  for (var i = 0; i < variousCd.length; i++) {
    var discs = variousCd[i]
    console.log(discs);
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var html = template(discs);

    $('.cds-container').append(html)
  }
}
