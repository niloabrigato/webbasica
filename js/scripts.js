// ocultamos todos los articulos
function ocultarArticulos() {
  var articulos = document.getElementsByClassName('card-body')
  for (var i = 0; i < articulos.length; i++) {
    articulos[i].classList.add('oculta')
  }
}

// mostrar todos los botones
function mostrarBotones() {
  var botonesMostrar = document.getElementsByClassName('btn-sm')
  for (var i = 0; i < botonesMostrar.length; i++) {
    botonesMostrar[i].classList.remove('oculta')
  }
}

//mostrarmos un articulo y ocultamos el resto
function mostrarArticulo(articulo, boton) {
  var articulos = document.getElementsByClassName('card-body')
  for (var i = 0; i < articulos.length; i++) {
    articulos[i].classList.remove('oculta')
    articulos[i].classList.add('oculta')
  }

  miArticulo = document.getElementById(articulo)
  botonMostrar = document.getElementById(boton)
  miArticulo.classList.remove('oculta')
  mostrarBotones()
  botonMostrar.classList.add('oculta')
}

ocultarArticulos()
