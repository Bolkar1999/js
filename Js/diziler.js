// var ülke1 = "Türkiye";
// var ülke1 = "Almanya";
// var ülke1 = "Belçika";

// let ülkeler = ["Türkiye", "Almanya" , "Belçika"];
// let ekonomik = ["2", "1" , "3"];
// let ırk = ["türk" ,"alman" , "belçikalı"];

// let ülke1 = ["Türkiye" , "2" , "türk"];
// let ülke2 = ["Almanya" , "1" , "alman"];
// let ülke3 = ["Belçika" , "3" , "belçikalı"];

// ülkeler = [ ülke1,ülke2,ülke3];

// console.log(ülkeler);

let NatoÜlkeleri = ["Abd" , "Türkiye" , "Belçika" , "İtalya" , "Yunanistan"];

sonuc = NatoÜlkeleri.length;
sonuc = NatoÜlkeleri.toString();
sonuc = NatoÜlkeleri.pop(); // son eleman diziden silinir.
sonuc = NatoÜlkeleri.shift(); // ilk eleman diziden silinir.
sonuc = NatoÜlkeleri.push("Norveç"); // en sona ekleme yapar.
sonuc = NatoÜlkeleri.unshift("Finlandiya"); // başa ekleme yapar.


var dersler1 = ["sosyalbilgiler" , "matematik" , "türkçe"];
var dersler2 = ["tarih" , "felsefe" , "coğrafya"];
var dersler3 = ["geometri" , "fizik" , "fıkıh"];

sonuc = dersler1.concat(dersler2,dersler3);
sonuc = dersler1.splice(0,1,"kimya","dilbilgisi");

console.log(sonuc);
console.log(dersler1);