// Document Object Module(DOM) Manipulation

document.getElementById('click').style.border = '4px solid black'
let e = document.getElementById('click')
let e2 = document.getElementsByClassName('head')
e2[2].style.cssText = 'color:red';
// console.log(e2[2].inner)

let tn = document.getElementsByTagName('h6')
console.log(tn)

let ce = document.createElement('p')
ce.innerHTML = "This is a dynamic child"

tn[0].appendChild(ce)