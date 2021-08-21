let ages = [1,2,3,4,5,6,7]

for(let i=0; i<ages.length; i++){
    console.log("For Loop:",ages[i])
}


ages.forEach(function(e){
    console.log("Foreach Loop",e)
})


let j = 0;
while(j<ages.length){
    console.log("While Loop",ages[j]);
    j++;
}