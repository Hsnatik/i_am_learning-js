//  Diziler/ARRAYS

/*

Console da bak.. dizilerde kullanabilecek özellekler için.

let names = [];
console.log(names);
console.log(typeof names);
*/

let names = ["hasan","eda","seda","can"];
//let names2 = new Array("hasan","eda","seda","can");
let years = [2011,2002,1995,1998];
let mix = ["hasan",1998,["nevşehir",50],null,undefined];

console.log(names)
//console.log(names2)
console.log(years)
console.log(mix)

// get array item
console.log(names[0]) //dizinin ilk elemanına ulaşır
console.log(names[3]) //dizinin 3. elemanına ulaşır

//set array item
names[2] ="ece"; // 3. elemanı ece ile değiştirir
names [5] = "nur"; // 4.5.diziler var ama boş görünür. 6. diziye nur ekler

//add item
years.push(1997); //en sona atar
years.unshift(1997); //ilk sıraya ekler

//remove item  (silme)

years.pop (); // sondaki elamanı siler
years.shift (); // baştaki elamanı siler

//indexof

let index = names.indexOf("eda");
console.log(index);

let index1 = names.indexOf("edaa");
console.log(index1);

//reverse 
names.reverse(); // elemanların yerlerini ters çevirir.

//sort 
names.sort(); //en küçükten büyüğe sıralar

//concat (dizi birleştirme)
let val = years.concat(names);
console.log(val);

//splice
console.log(names);
names.splice(4,1,"ecem");

//find - filter 

function over18(year){
    let age = 1998-years;
    return age >= 18;
}

let val1 = years.find(over18);
console.log(val1); // tek bir değer bulur

let val2 = years.filter(over18)
console.log(val2); //bir den fazla değer bulur.


//-----------------------------------------------------------------------------

let april = ["apple","huawei","xiaomi","samsung"];

console.log(april);

//Dizi kaç elemanlıdır
console.log(april.length);

//Dizinin ilk ve son elemanı nedir?
/*
console.log(april.[0])
console.log(april.[3])
*/
console.log(april[april.length-1])

//"samsung" değerini dizinin sonuna ekleyiniz

april[4] = "sony";

console.log(april);
//YÖNTEM2        
//april.push("sony")
//YÖNTEM3
//april[april.length]="sony" --> demiş olsakta her zaman sona eklemiş olur.

//"nokia" değerini dizinin başına ekleyin
april.unshift("nokia");

//oluşturulan dizinin başından bir elemanı siliniz
april.shift("nokia");

//sony değerini siliniz.
april.pop("sony");

//dizi elemanlarını ters çeviriniz
april.reverse();
console.log(april);

//dizi elemanlarını alfabetik olarak sıralayınız
april.sort();

//[1,2,5,80,20] dizisini sıralayınız
let alp = [1,2,5,80,20];
console.log(alp.sort());


//"xiaomi" değeri dizinin bir elemanı mıdır?
console.log(april);

console.log(april.includes('xiaomi')); //true

console.log(april.indexOf('xiaomi')); //3


//let str = "TLC, OPPO"; ifadesini diziye çeviriniz

let str = "TLC, OPPO";
let april2 = str.split(',');
console.log(april2) //bu elemanları virgülle string değer oluştur. dizi

// april2 ve april dizileri birleştirin
let april3 = april.concat(april2);

//Oluşturulan diziden son 2 elemanı siliniz

/* 
1yöntem
console.log(april3.pop());
console.log(april.pop());
*/
//2yöntem
console.log(april3.splice(6,2));
console.log(april3)

/*
aşağıda verilen elemanları bir dizi içerisinde saklayınız.
    StudentA: yigit bilgi 2010
    StudentB: sena can 1999
    StudentC: ali veli 1998
*/

let studentA = ["yigit","bilgi",2010]
let studentB = ["sena","can",1999]
let studentC = ["ali","veli",1998]

let students = [studentA,studentB,studentC]

console.log (students);

console.log (students[0][0]);
console.log (students[0][1]);
console.log (students[0][2]);

console.log (students[1][0]);
console.log (students[1][1]);
console.log (students[1][2]);

console.log (students[2][0]);
console.log (students[2][1]);
console.log (students[2][2]);

