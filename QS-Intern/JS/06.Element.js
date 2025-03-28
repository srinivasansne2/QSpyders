////// Creating Html Tags Using createElement()//////
// Creating H1 tag
let name = document.createElement("h1")
name.innerText="hellllo"
document.body.appendChild(name)

// Creating h1 tag inside div
let name1= document.createElement("div")
document.body.appendChild(name1)

let h1tag = document.createElement("h1")
h1tag.innerText="Hello"
name1.appendChild(h1tag)

// Creating div Tag In side para
let para= document.createElement("p")
document.body.appendChild(para)

let divp = document.createElement("div")
divp.innerText="Hello"
para.appendChild(divp)

// Creating Tag & adding image using setattrbute()
let image = document.createElement("img")
image.setAttribute("src","bat.jpg")  // Inserting img using set atteribut
document.body.appendChild(image)

// Creating CSS Using Java Script
h1tag.style.backgroundColor="red"
h1tag.style.border="4px solid"
h1tag.style.width="fit-content"