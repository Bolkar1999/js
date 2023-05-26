// prompt = tarayıcıda bildirim sağlar
// lenght = sonucu almayı sağlar

var kullanıcıadı = prompt("Lütfen isminizi giriniz")


if(kullanıcıadı.length){
    console.log( `İsminiz ${kullanıcıadı}` ) // option+enter tuşu solundaki...
}else{
    console.log("kayıt yok")
}