function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora =  16//data.getHours();
  msg.innerHTML = `Agora São  ${hora}Horas.`;



 



  if (hora >= 0 && hora <= 12) {
    img.src = "fotomanhã.png";
    document.body.style.background = '#e2cd9f'
    document.body.style.alignItems = 'center'
  } else if (hora >= 12 && hora < 18) {
    img.src = "fototarde.png";
    document.body.style.background = '#b9846f'
      document.body.style.alignItems = 'center'
  } else {
    img.src = "fotonoite.png";
    document.body.style.background = '#515154'
      document.body.style.alignItems = 'center'
  }
}
