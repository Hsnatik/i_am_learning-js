let kullanicilar=[
    {email:"mail1@gmail.com", sifre:1234},
    {email:"mail2@gmail.com", sifre:4567},
  ]
    let mesajlar=[
    {email:"mail1@gmail.com",mesaj:"HERKESE GÜZEL BİR GÜN DİLİYORUM"},
    {email:"mail2@gmail.com",mesaj:"bu sabah"},
    {email:"mail@gmail.com",mesaj:"günaydın"},
    {email:"mail2@gmail.com",mesaj:"selam2ar"},
  ]
  
  let email=prompt("email adresiniz?")
  let sifre=prompt("şifreniz?")
  
  function giris(){
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre)
    || 
    (email==kullanicilar[1].email && sifre==kullanicilar[1].sifre)){
      console.log(mesajlar)
  
    } else{
      console.log("Yanlış kullanıcı adı veya şifresi girdiniz")
  
    }
  
  }
  
  giris()