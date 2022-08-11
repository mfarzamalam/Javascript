const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const specialChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numbers = ["0","1","2","3","4","5","6","7","8","9"]

is_alphabet = true
is_number = true
is_specialChar = true

function getRandomCharacter(){
    let num = Math.floor( Math.random() * characters.length )
    word = characters[num]
    
    if (is_alphabet == false){
        if(alphabets.includes(word)){
            word = getRandomCharacter()
        }
    }
    if (is_number == false){
        if (numbers.includes(word)){
            word = getRandomCharacter()
        }
    }
    if (is_specialChar == false){
        if (specialChar.includes(word)){
            word = getRandomCharacter()
        }
    }

    return word
}

password = ""
for(let i=0; i<15; i++){
    password += getRandomCharacter()
}
console.log(password)
