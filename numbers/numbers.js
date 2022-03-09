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

let val;
val = isNaN("10"); //false
val = isNaN("a10"); //true
console.log(val);
console.log(typeof val); //NaN döngünü sınıyor.

let num = 10.13458769;
val = num.toPrecision(5); //10.135 ---> (5)sayının kaç rakam alacağını belirtir. son rakamı yuvarlar.
console.log(val);
val = num.toFixed(2); //10.13 ---> (2) virgülden sonra kaç rakam alacağını belirler.
console.log(val);

val = Math.ceil(2.1) // 3
console.log(val);

val = Math.floor(2.9) // 2
console.log(val);

val = Math.round(2.2); // 2
console.log(val);

val = Math.round(2.8); // 3
console.log(val);

val = Math.random(); // 0-1 arası random sayı
console.log(val);

val = Math.floor(Math.random()*10); //0-9 arası random sayı + floor(aşağı yuvarlama)
console.log(val);

val = Math.pow(2,4); // 2^4 =16
console.log(val);

val = Math.abs(-100); // +100
console.log(val);

val = Math.min(1,5,7,75,25,4,3); //1
console.log(val);

val = Math.max(1,5,7,75,25,4,3); //25
console.log(val);





let sayi = 12.17846529

// toplamda 3 basamaklı sayı kullan

/*sayi = sayi.toPrecision(3);
console.log(sayi);*/

// ondalık kısmı 3 basamakta sınırla
val = sayi.toFixed(3);
console.log(val);

// en yakın sayıya yuvarla
sayi = Math.round(12.17846529);
console.log(sayi);

// aşağı yuvarla
sayi=Math.floor(12.17846529);
console.log(sayi);


// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul
sayi = Math.min(1,2,10,56,20);
console.log(sayi);

sayi = Math.max(1,2,10,56,20);
console.log(sayi);

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.
 //sayı aralığı 50 ila 75 olsun...
let min = 50;
let max = 75;
sayi = (min+Math.random()*(max-min));
console.log(sayi);

/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/

let brutMaas = 3700;
let mesaiUcreti = 10.3;
let mesaiSuresi = 42;

let toplamBrutMaas = brutMaas + (mesaiUcreti*mesaiSuresi);

let toplamNetMaas = toplamBrutMaas - toplamBrutMaas*0.25

console.log(toplamBrutMaas.toFixed(2),toplamNetMaas.toFixed(2));