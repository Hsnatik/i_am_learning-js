let price = "222"
let stringPrince = "222"
let hasPassword = true

console.log("price",
    typeof(price) //Gelen bilginin Türünü söylüyor.
)

console.log("stringPrice",
    typeof(stringPrince)
)

console.log("hasPassword",
    typeof(hasPassword)
)

/* 
console da;

typeof("11") // string

typeof("11") === "string" //true 
*/

//STRİNG METİNSEL BİLGİLERİ "İNT" ve "FLOAT"a DÖNÜŞTÜRMEK

let number1 = "11"
console.log("number1", parseInt(number1),)

//emin olmak için eşitleme yaparsak

let number2 = "12"
number2 = parseInt(number2)
console.log("number2", parseInt(number2), typeof(number2)) // cıktı: number2 12 number

let number3 = "11px"
number3 = parseInt(number3)
console.log("number3", parseInt(number3), typeof(number3)) // cıktı: number3 11 number

/* 
parse içinde rakamsal bir ifade varsa almaya kalkıyor.
number sadece rakam varsa alıyor.
*/

let number4 = "px11"
number4 = parseInt(number4)
console.log("number4", parseInt(number4), typeof(number4)) // cıktı: number4 NaN number4

let number5 = "11.4px"
number5 = parseFloat(number5)
console.log("number5", parseFloat(number5), typeof(number5)) //cıktısı: number5 11.4 number


//NUMBER VERİ TÜRÜNDEN SPRİNGE DÖNÜŞTÜRME

let number6 = 55
number6 = number6.toString()
console.log(number6, typeof(number6)) //çıktısı: 55 string