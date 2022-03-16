// DOM Document Object Model
/* 
DOM ile bir HTML nin tüm belgelerine ulaşıp bunları 
değiştirebiliyoruz. silebiliyoruz. ekleyebiliyoruz

Dilden bağımsız bir arayüz gibi düşün.
*/



// .getElementById
let titte = document.getElementById('title')
title.innerHTML = "Değişen Bilgi" 
console.log(title.innerHTML)



// .quarySelector
/*
let link = document.querySelector("ul#list>li>a")
console.log(link.innerHTML)
*/
/*
değişim yaparsak
let link = document.querySelector("ul#list>li>a")
link.innerHTML += " değişti"
console.log(link.innerHTML)
*/

/*
//ıd yi bu şekilde de kullanabiliriz
let link = document.querySelector("#kodluyoruzLink")
console.log(link)

//style ekleyebiliriz
link.style.color = "red"

//class ekleyebiliriz
link.classList.add("btn")

*/



// PROMPT 
// alert ile bilgi gönderiyorduk prompt ile bilgi alabiliyoruz

let fullName = prompt("lütfen adınızı giriniz: ")

/*
let greeting = document.querySelector("#greeting ")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`
*/        



// LİSTE İÇİNDEKİ ÖĞEYE ULAŞMAK _ DEĞİŞTİRMEK _ EKLEMEK

let lastChild = document.querySelector("ul#list2>li:last-child")
lastChild.innerHTML = "son öge degistirlidi..."
console.log(lastChild)

let firstChild = document.querySelector("ul#list2>li:first-child")
firstChild.innerHTML = "ilk öge degistirildi"
console.log(lastChild)

let ulDOM = document.querySelector("ul#list2")
let liDOM = document.querySelector("li")
liDOM.innerHTML = "Kendi olusturdugum ögee"
// ulDOM.append(liDOM) //sona ekliyor
ulDOM.prepend(liDOM)



// DOM'a CSS Class Bİlgi EKLE _ ÇIKAR

let greeting1 = document.querySelector("#greeting1")
greeting1.classList.add("text-primary") //tekli ekleme
greeting1.classList.add("new-info","second-class","third-class") //çoklu ekleme


greeting1.classList.remove("new-info","third-class") //silmee
console.log(greeting1.classList)