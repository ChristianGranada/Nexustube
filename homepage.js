if (localStorage.getItem("logueado") !== "true") {
  window.location.href = "indexlogin.html";
}

function logout() {
  localStorage.removeItem("logueado");
  window.location.href = "indexlogin.html";
}

function like(element) {
  const post = element.closest(".post");
  const animacion = post.querySelector(".like-animation");
  const contador = post.querySelector(".like-count");

  let count = parseInt(contador.textContent);

  const isLiked = element.classList.contains("liked");

  if (isLiked) {
    element.textContent = "🤍";
    element.classList.remove("liked");
    count--;
  } else {
    element.textContent = "❤️";
    element.classList.add("liked");
    count++;

    animacion.classList.add("show");

    setTimeout(() => {
      animacion.classList.remove("show");
    }, 600);
  }

  contador.textContent = count;
}

function repost(element) {
  const post = element.closest(".post");
  const msg = post.querySelector(".repost-msg");

  msg.classList.toggle("d-none");
}

function toggleComment(element) {
  const post = element.closest(".post");
  const box = post.querySelector(".comment-box");

  box.classList.toggle("d-none");
}

function addComment(button) {
  const box = button.closest(".comment-box");
  const input = box.querySelector("input");
  const comments = box.querySelector(".comments");

  if (input.value.trim() === "") return;

  const newComment = document.createElement("div");
  newComment.textContent = "• " + input.value;
  newComment.classList.add("small");

  comments.appendChild(newComment);
  input.value = "";
}
