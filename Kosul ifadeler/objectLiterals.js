 let firstName = 'Hasan'
 let lastName = 'Atik'
 let firstName1 = 'Hsn'
 let lastName1 = 'Hsnatik'


 let val;
 let person = { 
     firstName: 'Hasan',
     lastName: 'Atik',
     age: 26,
     hobbies: ['harmonica','game']
     address:{
        ctiy:'Kayseri'
        country: 'Türkiye'
    }
    getBrithYear: function(){
        //return 2022-26;
        return 2022 - this.age;
    }
    
    val = person
    val = person.firstName
    val = person.lastName
    val = person['firstName']
    val = person.age
    val = person.hobbies
    val = person.hobbies[1]
    val = person.hobbies
    val = person.lenght
    val = person.address
    val = performance.address.ctiy
    val = person.address['ctiy']
    val = person.getBrithYear(); //fonksiyon olduğu için() kullandık

 }
 console.log(val);
 console.log(typeof val);
