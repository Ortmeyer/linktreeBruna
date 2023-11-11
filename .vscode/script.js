function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar o tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem ligh
    img.setAttribute("src", "./bruna/bruna fundo pink.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./Bruna/BK_BEAUTY_LOGO_REDONDO_SEM FUNDO.png")
  }
}
