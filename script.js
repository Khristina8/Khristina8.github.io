//alert("Javacript connected");

window.onload = function(e) {
  alert("Сайт загрузився");
  setSecondEvent();
}

function setSecondEvent () {
window.onbeforeunload = function() {
  return "Дані не збережено.Точно перейти?";
 }  
}