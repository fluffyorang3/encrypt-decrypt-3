//This program will take a string, encrypt it, then decrypt it

let string = "Hey this is a message";

let mapping = {};



const map1 = "qwertyu iopasdfghjklzxcvbnm1234567890"
const map2 = "6acbdkef9ghi0j2lno 1x3pqr5stm7u8v4wyz"

const map1Split = map1.split("");
const map2Split = map2.split("");

function mapToMapping() {
  for(let i = 0; i < map1Split.length; i++) {
    mapping[map1[i]] = map2[i];
  }
}

mapToMapping();

console.log(mapping);
console.log(map1Split, map2Split);


const messageInput = document.querySelector("input");

function encrypt(encryptedString) {
  encryptedString = text = messageInput.value.toLowerCase().split("").map((value) => {
    return mapping[(value)];
  })
  return encryptedString.join("");
}

function decrypt(decryptedString) {
  decryptedString = encrypt().split("").map((value) => {
    return Object.keys(mapping).find(key => mapping[key] === value);
  })
  return decryptedString.join("")
}

console.log(encrypt())
console.log(decrypt())


const button = document.querySelector("button");

const messageField = document.querySelector(".message")

const encryptedField = document.querySelector(".encrypted")

const decryptedField = document.querySelector(".decrypted")

button.addEventListener("click", (message,encryptt,decryptt) => {
  message = encryptedField.value
  encryptt = encryptedField.value
  decryptt = decryptedField.value

  encryptedField.value = encrypt(message)
  decryptedField.value = decrypt(encryptedField.value);
  console.log(encryptt)
  console.log(decryptt)
})








