// Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)



let indexAda;
let indexCan;

let canHigher = 1.85;
let adaHigher = 1.60;

let canKg = 80;
let adaKg = 65;

indexAda = ((adaKg) / (adaHigher*adaHigher));
indexCan = ((canKg) / (canHigher*canHigher));

console.log("Adanın kilo index:"+ indexAda, "Canın kilo index:"+ indexCan);

let indexHigherAda = indexAda > indexCan;
let indexHigherCan = indexCan > indexAda;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük:"+ indexHigherAda );
console.log("Can'nın kilo indeksi ada'ın kilo indeksinden daha büyük:"+ indexHigherCan );

let adaZayif = (indexAda>=0) && (indexAda<=18.4);
let adaNormal = (indexAda>=18.5) && (indexAda<=24.9);
let adaKilolu = (indexAda>=25.0) && (indexAda<=29.9);
let adaSisman = (indexAda>=30.0) && (indexAda<=34.9);

console.log("Ada Zayif:"+adaZayif);
console.log("Ada Normal:"+adaNormal);
console.log("Ada Kilolu:"+adaKilolu);
console.log("Ada Sisman:"+ adaSisman);

let canZayif = (indexCan>=0) && (indexCan<=18.4);
let canNormal = (indexCan>=18.5) && (indexCan<=24.9);
let canKilolu = (indexCan>=25.0) && (indexCan<=29.9);
let canSisman = (indexCan>=30.0) && (indexCan<=34.9);

console.log("Can Zayif:"+canZayif);
console.log("Can Normal:"+canNormal);
console.log("Can Kilolu:"+canKilolu);
console.log("Can Sisman:"+ canSisman);