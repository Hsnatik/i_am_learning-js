let email = "hsnatik5050@gmail.com"
let firstName = "hasan"
let lastName ="Atik"

//STRİNG KARAKTER SAYISI ----> lenght

console.log(email.length)

//İLK KARAKTERİ BULMAK

console.log(firstName[0])

//büyük harf / küçük harf

firstName = firstName.toUpperCase()
console.log(firstName) //BÜYÜK HARF

lastName = lastName.toLowerCase()
console.log(lastName) //Küçük harf

//STRİNG İÇİNDE İSTEDİĞİMİZ BİLGİYİ ARAMAK  ---> search

console.log(email.search("@")) //11
console.log(email[11]) //@
email.search("olmayanbirsey") //-1 dönderir


//BELLİ BİR YERE KADAR ALMA   ----> slice

let DOMAIN = email.slice ( email.search("@") +1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0.DOMAIN.indexOf('.')))


