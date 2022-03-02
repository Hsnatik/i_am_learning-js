let prince = 100
let tax = 0.18
let princeTax = prince * tax
let total = prince + princeTax
console.log('Fiyat:', prince, 'KDV oranı:', tax, 'KDV tutarı:', princeTax, 'Satis Fiyati', total )

//arttırma azaltma
/* UZUN YOL

let counter = 360
counter = counter + 1
console.log(counter)

*/
let counter = 360
counter += 1; //kısa yol1
console.log(counter) 

let counter1 = 250 //kısayol2
counter1 ++;
console.log(counter1)

let counter2 = 333 //cikarma
counter2 --;
console.log(counter2)

let counter3 = 100 // bolme
counter3 /= 5;
console.log(counter3)

let counter4 = 5 //carpma
counter4 *= 12;
console.log(counter)

console.log(1+4*10) //islem onceligi
 // 41
console.log((1+4)*10) //50

console.log(15%2) //mod_kalan_tek_cift

console.log('kolide kalan urun ornegi:', 16%6)
 
/*
console.log(2*2*2*2) //ustlu ifade
*/
console.log(2**4) //ustlu ifade

console.log('Asagi yuvarlama:', Math.floor (1,9)) //asagi yuvarlama

console.log('yukari yuvarlama:', Math.ceil (1.6)) //yukari yuvarlama

console.log('yakina yuvarlama', Math.round (1.5), Math.round(1.4)) //yakina yuvarlama

let springNumber ='123'
console.log(springNumber)

let newNumber= Number(springNumber)
console.log(newNumber)

console.log('Number Construtor icine bilgi gonderildi:', Number('200'))


let x = 4;
console.log(x++); //4
console.log(x); //5

let y = 2;
console.log(++y) //3
