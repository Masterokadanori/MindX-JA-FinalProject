const logBut = document.getElementById("but");

logBut.addEventListener("click", () => {
  console.log("yes");
  let check = false;
  let userInput = document.getElementById("user").value;
  let passInput = document.getElementById("pass").value;
  users = JSON.parse(localStorage.getItem("users"));
  users.forEach((account) => {
    if (account.email === userInput && account.pass === passInput) {
      localStorage.setItem("login", "YES");
      localStorage.setItem("user", JSON.stringify(account));
      check = true;
      window.location.href = "index.html";
    }
  });
  if (!check) {
    alert("The credentials you entered are incorrect. Please try again.");
  }
});
