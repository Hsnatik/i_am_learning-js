// ternary op.
// kosul ? doğrusuysa : yanlışsa

let userName = prompt('kullanıcı adınızı giriniz');
let info = document.querySelector('#info')
info.innerHTML `${userName.length > 0 ? userName : "kullanıcı bilginiz bulunamadı"}`