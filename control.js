var fale = document.getElementById("fale");
var sobre = document.getElementById("sobre");

function falar() {
  sobre.style.color = "#0d2f02";
  fale.style.color = "#218103";
}

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
