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
