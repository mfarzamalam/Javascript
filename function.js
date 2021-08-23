function sum_of_two(a,b){
    console.log(a+"+"+b,"=",a+b)
}
sum_of_two(9,100)



// Arrow Function
sum_of_three = (a,b,c)=> {
    console.log(a+"+"+b+"+"+c,"=",a+b+c)
}
sum_of_three(9,10,5)



checkLog = ()=>{
    console.log("I am your log");
}
// timeout run once
time = setTimeout(checkLog,1000)
time = clearTimeout(time)

// interval runs in loop
time = setInterval(checkLog,1000)
time = clearInterval(time)