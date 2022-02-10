
var inputEmail = document.querySelector('#email')
function info() {
  let sendEmail = {
    email: inputEmail.value
  }
  const body = JSON.stringify(sendEmail)
  fetch('/infos', {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((res) => res.text())
    .then((mesage) => {
      if (mesage) throw mesage
      inputEmail.value = ""
      alert('Email enviado, aguarde logo faremos contato!')
    })
    .catch(err => alert(err))
}
