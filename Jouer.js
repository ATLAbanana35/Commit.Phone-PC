let niv = 1
let vitesse = 6000
let obj = 500
let points = 0

function dead() {
  setInterval(() => {
    location.reload()
  }, 500)
}

let button = 1
const vai = document.querySelector("img")
function appui(but) {
  if (but == 1) {
    vai.style.top = "5px"
    button = 1
  }
  if (but == 2) {
    vai.style.top = "130px"
    button = 2
  }
  if (but == 3) {
    vai.style.top = "255px";
    button = 3
  }
}

function ast() {
  let top = ""
  let random = Math.random();
  const span = document.createElement("span")
 document.body.appendChild(span)
 span.classList.add("span")
  if (random < 0.3333333333333) {
    top = 1
    span.style.top = "5px"
    setTimeout(() => {
      if (button == 1) {
        document.body.innerHTML = "DEAD"
        dead()
      } else {
        points += 63
      }
    }, 2500)
  }
  if (random > 0.3333333333333) {
    if (random < 0.6666666666666) {
      top = 2
      span.style.top = "130px"
      setTimeout(() => {
      if (button == 2) {
        document.body.innerHTML = "DEAD"
        dead()
      } else {points += 174}
    }, 2500)
    }
  }
  if (random > 0.66666666666666) {
    top = 3
    span.style.top = "255px"
    setTimeout(() => {
      if (button == 3) {
        document.body.innerHTML = "DEAD"
        dead()
      } else {
        points += 126
      }
    }, 2500)
}
    if (points > obj) {
      if (niv < 7) {
      vitesse -= 1000
      obj += 500
      niv ++
      }
    }
  setTimeout(() => {
    span.remove()
  }, 3000)
setTimeout(() => {
  ast()
}, vitesse)
}
setInterval(() => {
  document.querySelector("h1").textContent = points
  document.querySelector("h3").textContent = niv
}, 100)
ast()
