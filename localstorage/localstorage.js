function clickCounter () {
    if (typeof(Storage) !== "undefined"){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else{
            localStorage.clickcount = 1 ;
        }
        document.getElementById("result").innerHTML = "Şu ana kadar " + localStorage.clickcount + "defa tıkladınız..";
    }else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage..."
    }
}
function veriSakla() {
    let data=document.getElementById('data').value;
    localStorage.setItem('data',data)
}
function degeriGetir() {
    document.getElementById('pr').innerHTML= "Hafızadaki veri: "+ localStorage.getItem('data')
}