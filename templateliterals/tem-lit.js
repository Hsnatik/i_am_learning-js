let userName = "Hasan"
const DOMAIN = "kodluyoruz.org"
let email = userName + "@" + DOMAIN


// console.log("Merhaba", userName, "sitemize hosgeldiniz", "mail adresiniz:", email)


let info = `Merhaba, ${userName} sitemize hoşgeldiniz. 
Mail adresiniz: ${email} 
mail adresiniz uzunluğu ${email.length}
borcunuz: ${(2+3)*10}TL
günün saat bilgisi: ${new Date().getHours()}
kısa isminiz: ${userName[0]}`

console.log(info);