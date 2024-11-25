function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let titulo = window.document.getElementById('titulo')
  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()
  msg.innerHTML = `${hora} :  ${minutos} : ${segundos}`
  if (hora >= 0 && hora < 12) {
    titulo.innerHTML = 'Bom dia'
    img.src = '../assets/images/manha.jpg'
  } else if (hora >= 12 && hora < 18) {
    titulo.innerHTML = 'Boa tarde'
    img.src = '../assets/images/tarde.jpg'
  } else {
    titulo.innerHTML = 'Boa noite'
    img.src = '../assets/images/noite.jpg'
  }
}