document.getElementById("ReadMore").addEventListener("click", function () {
  var moreText = document.getElementById("moreText");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    this.textContent = "READ LESS";
  } else {
    moreText.style.display = "none";
    this.textContent = "READ MORE";
  }
});

const modal = document.getElementById("bookingModal");
const btn = document.getElementById("AppoitmentButton");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function toggleMenu() {
  const links = document.getElementById("nav-links");
  links.classList.toggle("active");
}
