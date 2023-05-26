var ad = "Bolkar"; // Global

// if(true){
//     let ad = "Zehra"; // if scope
//     console.log(ad);
// }

function çıktı(){ // function scope
    var ad = "Işıl";
    var memleket = "Tokat"
    console.log(ad , memleket);
}

çıktı();
console.log(ad);


//Block etiketleri kendi içlerinde scope oluşturmasını sağlar ama (let) etiketi kullanmak gerek. 
// function kendi içerisinde scope oluşturur.