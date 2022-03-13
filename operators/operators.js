let price = "100"
let user = "hasan"

// == eşitse
console.log( price == 1 ) //false
console.log(price == 100 ) //true

// === Hem eşit hemde türü eşitse

console.log(price===1)
console.log(price===100)


// != eşit değilse

user = "guest"
console.log( price != guest)

// < Küçüktür

console.log(price<100)

//<= küçük eşittir

console.log( price <= 100)

// > büyüktür

console.log( price > 50)

// >= büyük eşittir

console.log ( price >= 5)

// && ve

console.log ( price>0 && user! = guest)

// || veya

console.log ( price>0 || user! = guest)

// ! değil

console.log (price>0 && !user == guest)