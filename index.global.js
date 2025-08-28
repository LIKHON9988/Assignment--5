// ------------------------------heart section------------------>>>>>>>>>>>>

const cardHearts = document.querySelectorAll(".heart-btn");
const navHeart = document.getElementById("nav-heart-count");

let heartCount = 0;

cardHearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    heartCount++;
    navHeart.textContent = heartCount;
    console.log("navHeart.textContent");
  });
});
