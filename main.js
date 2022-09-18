function start() {
  document.querySelector("body").innerHTML = "<div class='hts'>test</div>"
}

function hts(title) {
  document.querySelector("title").textContent = title
}

function addboi(cl, inercl) {
  document.querySelector("." + inercl).innerHTML = "<div class='" + cl + "'></div>"
}

function addtext(text, inercl) {
  document.querySelector("." + inercl).textContent += text
}

function centrertext(cl) {
 document.querySelector("." + cl).style.textAlign = "center"
}

function textgrandeur(cl, taille) {
  document.querySelector("." + cl).style.fontSize = taille + "%"
}

function police(cl) {
  document.querySelector("." + cl).style.fontFamily = "Arial"
}

function textcouleur(cl, color) {
  document.querySelector("." + cl).style.color = color
}

function fond(cl, color) {
  document.querySelector("." + cl).style.background = color
}

function padding(cl, size) {
  document.querySelector("." + cl).style.padding = size + "%"
}

function addhts(hts, inercl, text, autreinfo, cl) {
  if (hts == "lien") {
    document.querySelector("." + inercl).innerHTML += "<a href='" + autreinfo + "' class='" + cl + "'>" + text + "</a>"
  }
  if (hts == "img") {
    document.querySelector("." + inercl).innerHTML +=  "<img src='" + autreinfo + "' width='" + text + "px'/>"
  }
}

