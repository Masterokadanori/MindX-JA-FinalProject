///Define button
const goBut = document.getElementsByClassName("btn-15");

//Function checking number
function numCheck(number) {
  const regex = /^\d{9}$/;
  return regex.test(number);
}

//Function checking valid email
function emailValid(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

//Checking after button clicked
goBut[0].addEventListener("click", () => {
  //Define Element in the view
  let check = false;
  const emailInput = document.getElementById("email").value;
  const passInput = document.getElementById("pass").value;
  const passConfirm = document.getElementById("Confirmpass").value;
  const errorDiv = document.querySelectorAll(".error");
  errorDiv.forEach((element) => {
    element.innerHTML = "";
  });

  //Checking valid email
  if (!emailValid(emailInput)) {
    const error = document.createElement("span");
    error.style.color = "red";
    error.textContent = "Invalid email";
    errorDiv[0].appendChild(error);
    check = true;
  }
  if (passInput.length == 0) {
    const error = document.createElement("span");
    error.style.color = "red";
    error.textContent = "Password must contain atleast 1 digit";
    errorDiv[1].appendChild(error);
    check = true;
  }
  if (passInput !== passConfirm) {
    const error = document.createElement("span");
    error.style.color = "red";
    error.textContent = "Password do not match";
    errorDiv[2].appendChild(error);
    check = true;
  }
  if (!check) {
    let user = {
      email: emailInput,
      pass: passInput,
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      trip: [],
    };

    let users = JSON.parse(localStorage.getItem("users")); // Retrieve users from localStorage
    try {
      users = users ? JSON.parse(users) : [];
    } catch (error) {
      users = [];
    }
    // Initialize users as an empty array if it doesn't exist
    if (!users) {
      users = [];
    }

    // Check if the user already exists
    let userExists = users.some((element) => element.email === user.email);

    if (userExists) {
      alert("This email is already registered. Please log in.");
      window.location.href = "login.html"; // Redirect to login page
    } else {
      users.push(user); // Add new user to the users array
      localStorage.setItem("users", JSON.stringify(users)); // Update users in localStorage
      localStorage.setItem("user", JSON.stringify(user)); // Optionally store the current user
      localStorage.setItem("login", "yes");
      window.location.href = "./index.html"; // Redirect to home page
    }
  }
});
