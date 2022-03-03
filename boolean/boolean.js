/*
let isActive = false // 0
let isActive = true // 1
*/


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

userName = 'user'
console.log ("userName:", Boolean(userName)) //true

/*
    0, -0, null, false, NaN, undefined, ("")
*/
Boolean("0") //false
Boolean("-0") //false
Boolean("-0.1") //true
Boolean("0 === 0") //true
