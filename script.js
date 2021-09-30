function adicionarFilme() {
  var campoFilme = document.getElementById("filme").value;
  if (campoFilme.endsWith(".jpg")) {
    listaFilmes(campoFilme);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
}
function listaFilmes(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoFilmeFavorito + elementoListaFilmes.innerHTML;
}