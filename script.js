var titleTxt = "Gaming Playground";
var i = 0;
var currentTxt = document.getElementById("title").innerHTML;

function title() {
  if (i < titleTxt.length) {
    i++;
    currentTxt += titleTxt.charAt(i);
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
