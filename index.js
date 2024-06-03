const characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890.,?! "

const array = characters.split("")

console.log(array)

let emptyArray = [];

for (i = 0; i < 67; i++) {
  for(m = 0; m <67; m++) {
    emptyArray.push(`${array[i]}${array[m]}`)
  }
}

console.log(emptyArray)



