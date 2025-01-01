let login = localStorage.getItem("login");
if (login === null || login === "none") {
  const signUpBut = document.createElement("button");
  const nav = document.querySelector(".nav_ul");
  const li = document.createElement("li");

  signUpBut.className = "btn-16";
  signUpBut.textContent = "Sign In";
  li.appendChild(signUpBut);
  nav.appendChild(li);
  signUpBut.addEventListener("click", () => {
    window.location.href = "../signUpLogin.html";
  });
} else {
  const user = document.createElement("img");
  const nav = document.querySelector(".nav_ul");
  const li = document.createElement("li");

  const userObject = JSON.parse(localStorage.getItem("user"));
  user.src = userObject.avatar;
  user.id = "profile";

  li.appendChild(user);
  nav.appendChild(li);
}

const profile = document.getElementById("profile");
profile.addEventListener("click", () => {
  window.location.href = "profile.html";
});
