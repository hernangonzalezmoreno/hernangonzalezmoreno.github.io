var produccion = true;
var URL = produccion? 
"https://hernangonzalezmoreno.github.io/" :
"http://127.0.0.1:5500/";

var imgyo = URL + 'imgs/yo.jpeg';

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

cargarVista( 'views/navbar.html', 'nav' );
cargarVista( 'views/sobremi.html', 'sobremi' );
cargarVista( 'views/trabajos.html', 'trabajos' );
cargarVista( 'views/footer.html', 'footer' );

setInterval( function (){
  var p = document.getElementById( 'puntero' );
  p.innerHTML = p.innerHTML == ''? '▮' : '';
}, 500);
