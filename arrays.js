let myArr = [1,2,3,4,5,"array","k","i",34.5];


console.log("Array", myArr)
console.log("Length of an array is",myArr.length)
myArr.pop()
console.log("Length of an array After using pop() is",myArr)
myArr.push("h")
console.log("Length of an array After using push('h') is",myArr)
myArr.shift()
console.log("Length of an array After using shift() is",myArr)
myArr.unshift("h2")
console.log("Length of an array After using unshift('h2') is",myArr)
console.log("use toString() method",myArr.toString())
console.log("use sort() method",myArr.sort())