let link = document.getElementById("lnk");
let image = document.getElementById("bt");
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  if (link.href.includes("index")) {
    link.href = "darkmode.css";
    image.setAttribute("src", "image/rsun.svg");
  } else {
    link.href = "index.css";
    image.setAttribute("src", "image/night.svg");
  }
});
