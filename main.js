// setting variables for elements from the HTML to use later
const btn = document.getElementById('get-color-scheme')
const color = document.getElementById('color-picker')
const colorScheme = document.getElementById('color-scheme')
const showColorsDiv = document.getElementById('show-colors')
const showHexDiv = document.getElementById('show-hex-number')



btn.addEventListener('click', displayColor)

//function that will fun to grab data from the API and insert the response back into the DOM
function displayColor() {

    if(colorScheme.value === 'blank'){
        alert("Please select a color scheme")
    }
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.slice(1)}&format=json&mode=${colorScheme.value}`)
        .then(res => res.json())
        .then(data => {

            let colors = ''
            //looping through the colors and adding each color as an HTML img tag to a variable
            for(let i = 0; i < data.colors.length; i++){
                colors += `<img src="${data.colors[i].image.bare}">`
            }

            let hexNum = ''
            //looping through each hex number in the color and adding it to a HTML p tag for the set variable
            for(let i = 0; i < data.colors.length; i++){
                hexNum += `<p>${data.colors[i].hex.value}</p>`
            }
            
            //setting the holder div to hold all the colors
            showColorsDiv.innerHTML = colors
            //setting the hex holder dix to hold all the hex values
            showHexDiv.innerHTML = hexNum

            

        })

        
        
}

        // trying to get the p tag to be copied but keep running into "cannot read properties of null"
        

        // hexValue = document.querySelector('p')
        // hexValue.addEventListener('click', copyHexValue)

        // function copyHexValue() {

        //     console.log('clicked')
            
        //     hexValue.select()
            
        //     navigator.clipboard.writeText(hexValue.value)

        //     alert(`Copied hex value ${hexValue.value}`)
        // } 
        
        




