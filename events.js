function clicked(){
    console.log("Button has clicked")
}


Fcontainer.addEventListener('click', function(){
    console.log("Div is clicked")
})


let num = 0;
Fcontainer.addEventListener('mouseover', function(){
    num += 1;
    console.log("Mouse is in",num,"times")
})


let num2 = 0;
Fcontainer.addEventListener('mouseout', function(){
    num2 += 1;
    console.log("Mouse is out",num,"times")
})