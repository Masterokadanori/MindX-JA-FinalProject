let user = JSON.parse(localStorage.getItem("user"));
const email = document.getElementById("email");
const pass = document.getElementById("password");
const trip = document.querySelectorAll(".trip_present")[0];
const avatar = document.getElementById("profile");

function performInfor() {
  trip.innerHTML = "";
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");

  div1.textContent = "Tên chuyến đi";
  div2.textContent = "Giá thành";
  div3.textContent = "Thời gian";
  div4.textContent = "Chuyến đi kéo dài";
  div5.textContent = "Hủy bỏ";

  trip.appendChild(div1);
  trip.appendChild(div2);
  trip.appendChild(div3);
  trip.appendChild(div4);
  trip.appendChild(div5);

  user = JSON.parse(localStorage.getItem("user"));
  let password = "";
  for (let i = 0; i < user.pass.length; i++) password += "*";
  email.textContent = `Your email: ${user.email}`;
  pass.textContent = `Your password: ${password}`;
  avatar.src = user.avatar;

  user.trip.forEach((element, index) => {
    const trip_name = document.createElement("div");
    const trip_price = document.createElement("div");
    const trip_time = document.createElement("div");
    const trip_duration = document.createElement("div");
    const trip_cancel = document.createElement("div");
    const cancelBut = document.createElement("button");
    cancelBut.className = "cancel";

    trip_name.textContent = element.name;
    trip_price.textContent = element.price;
    trip_time.textContent = element.time;
    trip_duration.textContent = element.duration;

    trip_cancel.appendChild(cancelBut);
    trip.appendChild(trip_name);
    trip.appendChild(trip_price);
    trip.appendChild(trip_time);
    trip.appendChild(trip_duration);
    trip.appendChild(trip_cancel);

    cancelBut.addEventListener("click", () => {
      user.trip.splice(index, 1);
      localStorage.setItem("user", JSON.stringify(user));
      performInfor();
    });
  });
}
performInfor();
