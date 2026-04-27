function login() {
  const usuarioCorrecto = "KrizAtom";
  const passwordCorrecto = "1234";

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  if (usuario === usuarioCorrecto && password === passwordCorrecto) {
  localStorage.setItem("logueado", "true"); // 👈 AÑADE ESTO
  window.location.href = "homepage.html";
    } else {
    alert("Usuario o contraseña incorrectos");
  }
}