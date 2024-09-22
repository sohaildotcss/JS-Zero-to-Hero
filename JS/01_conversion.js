let age = "22aba"
let newAge = Number(age)
console.log(newAge, typeof newAge)
//h "22" => 22
//h "22asn" => NaN
//! typeof NaN is a 'Number'.

let score = null
let newScore = Number(score)
console.log(newScore, typeof newScore)
//h null => 0

let address = undefined
let newAddress = Number(address)
console.log(newAddress, typeof newAddress)
//h undefined => NaN

let isLoggedIn = 1
let newIsLoggedIn = Boolean(isLoggedIn)
console.log(newIsLoggedIn, typeof newIsLoggedIn)
//h 1 => true, 0 => false

let str_bool = "false"
let newStr_bool = Boolean(str_bool)
console.log(newStr_bool)
//h '' => false, 'anything' => true

let number = 92
let str_number = String(number)
console.log(str_number, typeof str_number)
