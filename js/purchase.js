function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nameTrip = document.getElementById("name");
const price = document.getElementById("price");
const image = document.getElementById("image");
const but = document.getElementById("but");
const time = document.getElementById("time");
const duration = document.getElementById("duration");

let object = JSON.parse(localStorage.getItem("trip"));

nameTrip.textContent = `Tên chuyến đi: ${object.name}`;
price.textContent = `Giá chuyến đi: ${object.price}`;
image.src = object.image;
time.textContent = `Thời gian bắt đầu: ${getRandom(1, 27)}/${getRandom(
  3,
  12
)}/2025`;
duration.textContent = `Chuyến đi kéo dài: ${getRandom(3, 10)} ngày`;
object.time = time.textContent;
object.duration = duration.textContent;
but.addEventListener("click", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    user.trip.push(object);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.removeItem("trip");
    window.location.href = "index.html";
  } else {
    alert("Vui lòng đăng nhập trước");
    window.location.href = "index.html";
  }
});
