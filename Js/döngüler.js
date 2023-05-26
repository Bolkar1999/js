// for : Döngü yapmada kullanılır. 

// for(){

// }

// Object üzerinde döngü:

let ülke = {
    "isim" : "Türkiye" ,
    "baskent" : "Ankara",
    "enkalabalıksehri" : "Istanbul",
    "Nüfus" : 83
}

for(let key in ülke){

    console.log(key);
    console.log(ülke[key]);

}

// Temel döngüler...

var sayılar = [1,3,4,5,7,8,9];
let toplam = 0;

for(let a=0; a < sayılar.length; a++){
    toplam += sayılar[a];
}

for(let a in sayılar){
    toplam += sayılar[a];
}

for(let sayı of sayılar){
    toplam += sayı;
}


console.log(toplam);