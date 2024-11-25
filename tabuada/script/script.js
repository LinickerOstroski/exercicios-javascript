let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')

function limparLista() {
  for (let i = 0; i <= 10; i++) {
    lista.remove(0)
  }
}

function gerar() {
  limparLista()
  let numero = Number(num.value)
  for (let i = 0; i <= 10; i++) {
    let mult = i * numero;
    let content = document.createElement('option')
    content.text = `${numero} * ${i} =  ${mult}`
    lista.appendChild(content)
  }
  num.value = ''
  num.focus()
}