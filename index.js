const chosenColour = document.getElementById("colour-picker")
const chosenScheme = document.getElementById("scheme-selector")
const chosenColourCode = document.getElementById("chosen-colour-code")

chosenColour.oninput = () => {
    getColour()
}

chosenScheme.oninput = () => {
    getColour()
}

chosenColourCode.oninput = () => {
    getColour()
} 

function getColour() {
    const colourContainer = document.querySelector(`.colours-display`)
    const colourValueContainer = document.querySelector(".colour-names")
    scheme = chosenScheme.value
    colour = chosenColour.value.substring(1)
    // code = chosenColour.value
    chosenColourCode.textContent = `#${colour}`
    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${scheme}&count=5`)
    .then(res => res.json())
    .then(data => {
        colourContainer.innerHTML = ""
        colourValueContainer.innerHTML = ""
        for(let i = 0; i < 5; i++) {
                if (changeColourCode.checked) {
                    const colorRgb = data.colors[i].rgb.value;
                    colourContainer.innerHTML += `<div class="colour" style="background-color: ${colorRgb}"></div>`
                    colourValueContainer.innerHTML += `<div class="colour-id">${colorRgb.slice(4, -1)}</div>`
                    chosenColourCode.value = colorRgb.slice(4, -1) 
                  } else {
                    const colorHex = data.colors[i].hex.value;
                    colourContainer.innerHTML += `<div class="colour" style="background-color: ${colorHex}"></div>`
                    colourValueContainer.innerHTML += `<div class="colour-id">${colorHex}</div>`
                    chosenColourCode.value = colorHex
                  }
            }     
    })
}

const changeColourCode = document.getElementById("toggle")
changeColourCode.addEventListener("click", getColour)
