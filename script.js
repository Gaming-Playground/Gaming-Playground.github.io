var titleTxt = "Gaming Playground";
var i = 0;

function title() {
  var currentTxt = document.getElementById("title").innerHTML;
  currentTxt += titleTxt.charAt(i);
  if (i < titleTxt.length) {
    window.setTimeout(title, 250);
  }
}

document.getElementsByClassName("nav-btn")[0].onclick = function() {
  window.location = "index.html"
}

document.getElementsByClassName("nav-btn")[1].onclick = function() {
  window.location = "games.html"
}

document.getElementsByClassName("nav-btn")[2].onclick = function() {
  window.location = "contact.html"
}

window.setTimeout(title, 1500);
