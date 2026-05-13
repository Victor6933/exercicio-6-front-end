function validarFormulario() {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let confirmarSenha = document.getElementById("confirmarSenha");
  let mensagem = document.getElementById("mensagem");

  // Validar email
  if (email.value.includes("@")) {
    email.className = "valido";
  } else {
    email.className = "invalido";
  }

  // Validar senha
  if (senha.value.length >= 6) {
    senha.className = "valido";
  } else {
    senha.className = "invalido";
  }

  // Confirmar senha
  if (
    confirmarSenha.value === senha.value &&
    confirmarSenha.value !== ""
  ) {
    confirmarSenha.className = "valido";
  } else {
    confirmarSenha.className = "invalido";
  }

  // Mensagem final
  if (
    email.className === "valido" &&
    senha.className === "valido" &&
    confirmarSenha.className === "valido"
  ) {
    mensagem.textContent = "Formulário válido!";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "Preencha corretamente.";
    mensagem.style.color = "red";
  }
}