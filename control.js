var fale = document.getElementById("fale");
var sobre = document.getElementById("sobre");

var divFaleComigo = document.getElementById("fale-comigo");
var divSobreMim = document.getElementById("sobre-mim");

function falar() {
  sobre.style.color = "#0d2f02";
  fale.style.color = "#218103";
  // divSobreMim.style.display = "none";
}

falar();

function falarSobre() {
  fale.style.color = "#0d2f02";
  sobre.style.color = "#218103";
}

fale.onclick = (event) => {
  falar();
};

sobre.onclick = () => {
  falarSobre();
};
