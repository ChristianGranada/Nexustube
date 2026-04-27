  if (localStorage.getItem("logueado") !== "true") {
    window.location.href = "indexlogin.html";
  }

  function logout() {
    localStorage.removeItem("logueado");
    window.location.href = "indexlogin.html";
  }

  function like(element) {
  const post = element.closest(".post");
  const anim = post.querySelector(".like-animation");

  const isLiked = element.classList.contains("liked");

  if (isLiked) {
    // quitar like
    element.textContent = "🤍";
    element.classList.remove("liked");
  } else {
    // dar like
    element.textContent = "❤️";
    element.classList.add("liked");

    // animación solo cuando das like
    anim.classList.add("show");

    setTimeout(() => {
      anim.classList.remove("show");
    }, 600);
  }
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