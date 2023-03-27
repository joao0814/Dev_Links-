function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de João Pedro sentado em uma cerca dando joinha para foto, com uma paisagem de campo ao fundo"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal =play die
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de João Pedro sorrindo em um salão de festas, de blusa preta com uma piscina de fundo e com cor azul no led da piscina."
    )
  }
}
