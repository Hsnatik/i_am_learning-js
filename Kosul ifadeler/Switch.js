// SWİTCH if  yapıları çok fazlaysa daha temiz kod için kullanılabilir

let category ='telefon';
switch(category){
    case 'telefon':
        console.log('telefon kategorisi');
    break;
    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
    break;

    default:
        console.log('yanlıs kategori');
}


//--------------------------------------------------------------------------------

let day;
switch(new Date().getDay()){
    case 0:
        day='pazar'
        break;
    case 1:
        day='pazartesi'
        break;
    case 2:
        day='sali'
        break;
    case 3:
        day='carsamba'
        break;
    case 4:
        day='persembe'
        break;
    case 5:
        day='cuma'
        break;
    case 6:
        day='cumartesi'
        break;
}
console.log(`bugun günlerden ${day}`)

//--------------------------------------------------------------------------------


let day1;
switch(new Date().getDay()){
    case 0:
    case 6:
        day1='haftasonu'
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day1='haftaici'
        break;

}
console.log(`bugun günlerden ${day1}`)

//--------------------------------------------------------------------------------

const age1 = 27;
const firstName1 = 'Hsn';
switch(age1){
    case age1>0 && age1<12 :
        console.log(`${firstName1} is a child`);
        break;
    case age1 >= 13 && age1 <=18 :
        console.log(`${firstName1} is a teenager`);
        break;
    default:
        console.log(`${firstName1} is a adult`);
}


