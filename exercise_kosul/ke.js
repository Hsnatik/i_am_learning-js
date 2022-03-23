
/*

1. prompt ile aldıgın bilgiye göre asagıdaki yapıyı kullanarak not bilgisini #info ya yazdır

AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-50

2.kullanıcının girdiği verinin istedigimiz veri aralığında olup olmadığını kontrol et

3. FF bilgisinde :( ikonu diğerlerinde :) ikonu olsun 

4. FF class bilgisi text-danger diğerlerinde ise text-primery olsun.

*/




let examGrade = prompt('Puanı giriniz')
let textInfo;
let info = document.querySelector("#info")

if(examGrade >=0 && examGrade <= 100){
    if(examGrade >=90){
        textInfo = AA
    }else(examGrade >=85){
        textInfo = BA
    }else(examGrade >=80){
        textInfo = BB
    }else(examGrade >=75){
        textInfo = CB
    }else(examGrade >=70){
        textInfo = CC
    }else(examGrade >=65){
        textInfo = DC
    }else(examGrade >=60){
        textInfo = DD
    }else(examGrade >=50){
        textInfo = FD
    }else(examGrade >=50){
        textInfo = FF
    }
}else{
    textInfo="Bu bilgiler dogru degil"
}

info.innerHTML = `${textInfo} -> ${examGrade}`

