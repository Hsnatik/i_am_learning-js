let baslik=document.getElementById("baslik")
let metin=document.getElementById("metin")

metin.innerHTML=baslik.innerHTML

let listeler=document.getElementsByTagName("ul")
let sehirler= listeler[0]

let SehirElemanlari= sehirler.getElementsByTagName("li")

for( i=0;i<SehirElemanlari.length;i++){
  alert(SehirElemanlari[i].innerHTML)
}

let pragraflar= document.getElementsByClassName("a")

pragraflar[0].innerHTML="BAŞARI"
for(i=0;i<pragraflar.length;i++){
  pragraflar[i].innerHTML=pragraflar[i].innerHTML + ": "+i
}