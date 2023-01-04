var fale = document.getElementById("fale");
var sobre = document.getElementById("sobre");

var divFaleComigo = document.getElementById("fale-luana");
var divSobreMim = document.getElementById("sobre-luana");

function falar() {
  sobre.style.color = "#0d2f02";
  fale.style.color = "#218103";
  divSobreMim.style.display = "none";
  divFaleComigo.style.display = "flex";
}

falarSobre();

function falarSobre() {
  fale.style.color = "#0d2f02";
  sobre.style.color = "#218103";
  divFaleComigo.style.display = "none";
  divSobreMim.style.display = "flex";
}

fale.onclick = (event) => {
  falar();
};

sobre.onclick = () => {
  falarSobre();
};

new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  dots: "#dots",
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});
