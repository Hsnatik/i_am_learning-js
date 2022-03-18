const firstName = 'Hasan';
const age = "27"
const isStudent = false;
const school = 'university';

if (firstName === 'Hasan'){
    console.log('Merhaba Hasan');
}
if (age === 27){
    console.log('yasınız 27');
}
if (isStudent){
    console.log('ögrenci degil');
}else{
    console.log('Merhaba ögrenci')
}

//--------------------------------------------------------------------------------

if (age >= 18){
    console.log('ehliyet alabilirsiniz');
}else{
    console.log('ehliyet alamazsınız');
}


//--------------------------------------------------------------------------------

if (age >= 18){
    if(school == 'university'){
        console.log('alabilir ehliyet');
    }else{
        console.log('egitim durumunuz yetersiz');
    }
}else{
    console.log('ehliyet alamazsınız');
}


//--------------------------------------------------------------------------------

if (age>0 && age<12){
    console.log(`${firstName} is a child`);
}else if (age >= 13 && age <=18){
    console.log(`${firstName} is a teenager`);
}else{
    console.log(`${firstName} is a adult`);
}


//--------------------------------------------------------------------------------

//undefine
if (typeof id!== 'undefined'){
    console.log('id: '+id);
}else{
    console.log('no id');
}


