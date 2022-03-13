/* Dates-Times

let d = new Date();
let brithday = new Date(1995,3,25);



console.log(d);
console.log(typeof d);


//typeof object gelecek biz bu object ile içinden istediğimiz kısımları alabilir imkan sunumu fazla string gibi değil.


//  set Methods

d.setFullYear(2023);
d.setDate(20);
d.setHours(10);


//  get Methods

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getSeconds());


console.log(d.getFullYear() - brithday.getFullYear());
console.log(d.getDay() - brithday.getDay());
console.log(d.getDate() - brithday.getDate());
*/



// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
let nowDate = new Date(2022,3,6);
console.log(nowDate);

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
let th1 = new Date('7/29/1998 15:30:58');
let th2 = new Date(1995,3,25,15,30,58);
console.log(th1);
console.log(th2);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.
let th3 = new Date('1/1/1990');
let dayOfMonth = th3.getDate();
th3.setDate(dayOfMonth-1);
console.log(th3);

// iki tarih arasındaki geçen zamanı bulunuz.
let date1 = new Date('3/25/1995');
let date2 = new Date('3/6/2022');
let milisecond = date2-date1; 
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let gün = dakika / 24;

console.log('milisecond:'+ milisecond);
console.log('saniye:'+ saniye);
console.log('dakika:'+ dakika);
console.log('gün:' +gün);




