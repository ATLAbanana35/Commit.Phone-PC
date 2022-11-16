let elementI = "vide"
let valuee = ""
document.querySelector("#TEXT").addEventListener("input", (e) => {
  valuee = e.target.value
  document.querySelector(".W").textContent = valuee
})

window.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
  cmd(valuee)
  document.querySelector("#TEXT").value = ""
valuee = ""
  document.querySelector(".W").textContent = valuee;
}
})

function cmd(valueee) {
  const h3s = document.querySelectorAll("h3")
const h = document.createElement("h3");
  document.querySelector(".TheBody").appendChild(h);
   h.textContent = "LOS::users/USER_LOS>"
  h.appendChild(document.querySelector(".W"))
  h3s[h3s.length - 1].textContent += valuee;
  valueee = valueee.split(' ')
  console.log("1" + valueee[0] + "2" + valueee[1]);
  if (valueee[0] == "execute") {
    h3s[h3s.length - 1].innerHTML += "</br>Execute"
    setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "."
    }, 100)
    setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "."
    }, 200)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "."
    }, 300)
    let vtot = "";
    valueee.forEach((el) => {
      if (el === "execute") {
      } else {
        vtot += " " + el;
      }
    })
    console.log(vtot);
    eval(vtot)
    }
    if (valueee[0] === "connect") {
    elementI = document.createElement("iframe")
    document.body.appendChild(elementI)
    elementI.src = valueee[1];
    elementI.style.transform = "translateY(-1000px)"
    h3s[h3s.length - 1].innerHTML += "</br>connexion OK"
    }
    if (valueee[0] === "run") {
      h3s[h3s.length - 1].innerHTML += "</br>run..."
      if (valueee[1] === "frame") {
        if (elementI === "vide") {
          h3s[h3s.length - 1].innerHTML += "please execute connect command"
        } else {
        elementI.style.transform = "translateY(0px)"
        h3s[h3s.length - 1].innerHTML += "</br>frame added!"
        }
        }
        if (valueee[1] === "LOS") {
          setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>connexion..."}, 1000)
      setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>Téléchargement des pack:"
    }, 2000)
    setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>jslocation.ts"
    }, 2010)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>jsWebBrowser.ts"
    }, 2020)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>jsTypeModel.ts"
    }, 2030)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>losImage.iso"
    }, 2040)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>Execution de l'Image disk"
    }, 3040)
setTimeout(() => {
  let pour = 10
      h3s[h3s.length - 1].innerHTML += "</br>imageExecution";
      setInterval(() => {
        if (pour < 101) {
           h3s[h3s.length - 1].innerHTML += "</br>" + pour + "%";
           pour += 10
        }
      }, 10)
    }, 3050)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>downald config.c"
    }, 4060)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>codeForScreen.c"
    }, 4070)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>appsParDef.c"
    }, 4080)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>grafig.gra"
    }, 4090)
    setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>inages.ziponjs"
    }, 4000)
setTimeout(() => {
      h3s[h3s.length - 1].innerHTML += "</br>execute..."
    }, 4010)
setTimeout(() => {
      window.location = "http://loines.ch/projects/IPhoneOS/EcranVer/"
    }, 500)


        }
    }
  }
  
