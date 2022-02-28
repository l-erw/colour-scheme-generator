const getColourBtn = document.getElementById("get-colour")



function getColour() {
    const chosenColour = document.getElementById("colour-picker")
    const chosenScheme = document.getElementById("scheme-selector")
    scheme = chosenScheme.value
    colour = chosenColour.value.substring(1)
    const chosenColourCode = document.getElementById("chosen-colour-code")
    chosenColourCode.textContent = `#${colour}`
    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${scheme}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colourContainer = document.querySelector(`.colours-display`)
        const colourValueContainer = document.querySelector(".colour-names")
        colourContainer.innerHTML = ""
        colourValueContainer.innerHTML = ""
        for(let i = 0; i < 5; i++) {
                const colorHex = data.colors[i].hex.value;
                colourContainer.innerHTML += `<div class="colour" style="background-color: ${colorHex}"></div>`
                colourValueContainer.innerHTML += `<div class="colour-id">${colorHex}</div>`
            }     
    })
}


getColourBtn.addEventListener("click", getColour)