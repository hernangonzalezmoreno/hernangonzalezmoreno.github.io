var URL = "http://hernangonzalezmoreno.github.io/experimental/"

function cargarVista( vista, destino ) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById( destino ).innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", URL + vista, true);
    xhttp.send();
}

cargarVista( 'views/navbar.html', 'nb' );