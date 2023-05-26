let ülke1 = {
    "isim" : "Türkiye" ,
    "baskent" : "Ankara",
    "enkalabalıksehri" : "Istanbul",
    "Nüfus" : {
        "gerçeknüfus" : 83,
        "değişkennüfus" : 90,
    }
}

let sonuc;
sonuc = ülke1.isim;
sonuc = ülke1.baskent;
sonuc = ülke1.enkalabalıksehri;
sonuc = ülke1.Nüfus["gerçeknüfus"];

var telefonlar = [

    {
        "telefonadı" : "Samsung",
        "ram" : "3",
    },
    {
        "telefonadı" : "Samsung",
        "ram" : "3",
    },
    {
        "telefonadı" : "Samsung",
        "ram" : "3",
    }

]
    



console.log(sonuc);