

function changeColor(event) {
  event.target.style.color="#a93d3d";
};

var logo = document.getElementById("logo");
logo.addEventListener("click", changeColor);
