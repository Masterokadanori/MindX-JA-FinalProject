const trips = [
  {
    name: "Đà Nẵng",
    image:
      "https://media.istockphoto.com/id/1156033272/vi/anh/quang-c%E1%BA%A3nh-c%E1%BA%A7u-r%E1%BB%93ng.jpg?s=612x612&w=0&k=20&c=q7yok6ucqrpLUqqz8mH5Zpx1Bx6-SOrwRefZ6nXQSlQ=",
    price: "10.2200.000",
  },
  {
    name: "Nha Trang",
    image:
      "https://media.istockphoto.com/id/1606635783/photo/awesome-view-of-central-beach-of-nha-trang-vietnam.jpg?s=612x612&w=0&k=20&c=kJkhSfWrEO96I-fv0-6ZOsHGomlu3msIrCWTuvysAkQ=",
    price: "9.0000.000",
  },
  {
    name: "Huế",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35UCBM6dBCeCzJDw5cCIbh-JVxnXEaws1Qg&s",

    price: "5.550.000",
  },
  {
    name: "Vũng Tàu",
    image:
      "https://bariavungtautourism.com.vn/wp-content/uploads/2023/12/kinh-nghiem-du-lich-vung-tau-3.jpg",
    price: "3.2200.000",
  },
  {
    name: "Hà Nội",
    image:
      "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg",
    price: "15.0000.000",
  },
  {
    name: "Lạng Sơn",
    image: "https://media.truyenhinhdulich.vn/upload/news/87_lang_son.jpg",
    price: "6.400.000",
  },
  {
    name: "Thanh Hóa",
    image:
      "https://bcp.cdnchinhphu.vn/zoom/670_420/344443456812359680/2023/2/28/thanhoa-1677555630618406177530.jpg",
    price: "2.900.000",
  },
  {
    name: "An Giang",
    image:
      "https://media.istockphoto.com/id/1049227526/vi/anh/b%C3%ACnh-minh-r%E1%BB%B1c-r%E1%BB%A1-s%E1%BA%AFc-m%C3%A0u-v%E1%BB%9Bi-nh%E1%BB%AFng-c%C3%A2y-c%E1%BB%8D-cao-m%E1%BB%8Dc-tr%C3%AAn-b%E1%BA%A7u-tr%E1%BB%9Di-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng.jpg?s=612x612&w=0&k=20&c=AToI8feK9lnzgc7N0bqwZN_3jnMDJUMyUj2BULM4Mtw=",
    price: "3.000.000",
  },
  {
    name: "Đảo Phú Quốc",
    image:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/11/25/phu-quoc-1-1034.jpeg",
    price: "4.400.000",
  },
  {
    name: "Côn Đảo",
    image:
      "https://vcdn1-dulich.vnecdn.net/2022/04/01/cd9-1648805106-2272-1648805130.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=3c-4ukGtszUc5TFifaH3Qg",
    price: "5.400.000",
  },
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let store = new Set();

function randomPresent() {
  store.clear(); // Clear the previous values
  for (let i = 0; i < 5; i++) {
    let temp;
    do {
      temp = getRandom(0, trips.length - 1);
    } while (store.has(temp)); // Ensure no duplicates
    store.add(temp);

    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const card = document.getElementsByClassName("cardimg");
    const description = document.getElementsByClassName("description");

    // Update images and descriptions
    const storeArray = Array.from(store); // Convert Set to Array
    if (i == 0) slide1.src = trips[storeArray[i]].image;
    else if (i == 1) slide2.src = trips[storeArray[i]].image;
    else if (i == 2) {
      card[0].src = trips[storeArray[i]].image;
      description[0].textContent = trips[storeArray[i]].name;
    } else if (i == 3) {
      card[1].src = trips[storeArray[i]].image;
      description[1].textContent = trips[storeArray[i]].name;
    } else {
      card[2].src = trips[storeArray[i]].image;
      description[2].textContent = trips[storeArray[i]].name;
    }
  }
}

randomPresent();
setInterval(randomPresent, 1 * 60 * 1000);

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const card = document.querySelectorAll(".cardimg");

slide1.addEventListener("click", () => {
  const storeArray = Array.from(store);
  localStorage.setItem("trip", JSON.stringify(trips[storeArray[0]]));
  window.location.href = "tripattend.html";
});
slide2.addEventListener("click", () => {
  const storeArray = Array.from(store);
  localStorage.setItem("trip", JSON.stringify(trips[storeArray[1]]));
  window.location.href = "tripattend.html";
});
card[0].addEventListener("click", () => {
  const storeArray = Array.from(store);
  localStorage.setItem("trip", JSON.stringify(trips[storeArray[2]]));
  window.location.href = "tripattend.html";
});
card[1].addEventListener("click", () => {
  const storeArray = Array.from(store);
  localStorage.setItem("trip", JSON.stringify(trips[storeArray[3]]));
  window.location.href = "tripattend.html";
});
card[2].addEventListener("click", () => {
  const storeArray = Array.from(store);
  localStorage.setItem("trip", JSON.stringify(trips[storeArray[4]]));
  window.location.href = "tripattend.html";
});
