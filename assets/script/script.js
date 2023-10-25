let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto')//.assunto -> class

function verificarCampos(){
  if(nome.value == "" || email.value == "" || assunto == ""){
    alert("o campo é obrigatório")
  }else{
    alert("Sucesso ao enviar os dados")
  }
}

function ola(){
  alert("Olá Victor!")
}