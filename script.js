window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
};

const lines = document.getElementById("lines");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (lines) {
  lines.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

function msgsubmit()
{
  alert("Submit Successful");
}










