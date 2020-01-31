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

    // var source = $("entry-template").HTML;
    // var template = Handlebars.compile(source);
    //
    // var context = {
    //   img: "poster"
    //   title: "title",
    //   author: "author",
    //   year: "year"
    //  };
    // var html = template(context);

  })
});

function printData (variousCd){
  console.log(variousCd);
  for (var i = 0; i < variousCd.length; i++) {
    var discs = variousCd[i]
    console.log(discs);
  }
}
