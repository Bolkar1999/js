var tanım = "Merhabalar Dünya";

let sonuc;


sonuc = tanım.length;
sonuc = tanım.toUpperCase(); // tüm harfler büyük olur.
sonuc = tanım.toLocaleLowerCase(); // tüm harfler küçük olur.
sonuc = tanım.slice(0,10); // ilk sayı metine nerden başlanacağı ikinci sayı ne zaman metnin biteceğini söyler.
sonuc = tanım.slice(5,20);
sonuc = tanım.slice(4);
sonuc = tanım.substring(0,6); // slice ve substring temel olarak aynı görevi görüyor.
sonuc = tanım.replace("Dünya","Ay"); // metni değiştirmeye yarar.
sonuc = tanım.indexOf("Merhabalar"); // metindeki kelimelerin indexini bize gösterir.
sonuc = tanım.split(" ")[1]; // metindeki index sayısına denk gelen yazıyı bize aktarır.


let isim = "bolkar";
var meslek = "öğrenci";
var şehir = "osmaniye";

let değer = "Benim ismim" + " " + isim + " " + "ve benim mesleğim"  + " " + meslek +  "." + "Ve ben" + " " + şehir + " 'da yaşıyorum";
console.log(değer);

değer = `Benim ismim  ${isim} ve benim mesleğim ${meslek} Ve ben ${şehir } 'da yaşıyorum`; // backtick dolar işareti sayesinde daha kolay bir şekilde işlerimizi halledebiliyoruz.






console.log(sonuc);