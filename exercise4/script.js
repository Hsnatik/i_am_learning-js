let kullanicilar=[
    {email:"mail1@gmail.com", sifre:1234},
    {email:"mail2@gmail.com", sifre:4567},
    {email:"mail5@gmail.com", sifre:45678},
  ]
  let mesajlar=[
    {email:"mail1@gmail.com",mesaj:"HERKESE GÜZEL BİR GÜN DİLİYORUM"},
    {email:"mail2@gmail.com",mesaj:"HAYIRLI SABAHLAR"},
    {email:"mail@gmail.com",mesaj:"günaydın"},
    {email:"mail2@gmail.com",mesaj:"selam2ar"},
  ]
  
  let email=prompt("email adresiniz?")
  let sifre=prompt("şifreniz?")
  
  function kullaniciVarmi(email, sifre){
    for(i=0;i<kullanicilar.length;i++){
      if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
        return true
      }
    }
    return false;
  }
  
  function giris(){
    if(kullaniciVarmi(email,sifre)){
      
      console.log(mesajlar)
  
    } else{
      console.log("Yanlış kullanıcı adı veya şifresi girdiniz")
  
    }
  
  }
  
  giris()