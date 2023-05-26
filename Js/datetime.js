var anlıktarih = new Date(1999,7,23);
let tarih = new Date();

// değiştirme

tarih.setFullYear(2024);
tarih.setDate(22);
// gösterge
console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getFullYear());
console.log(tarih.getHours());
console.log(tarih.getMonth());
console.log(tarih.getTime());

console.log(anlıktarih.getFullYear());

console.log(tarih.getFullYear()-anlıktarih.getFullYear());

console.log(tarih.getDay()-anlıktarih.getDay());

console.log(typeof tarih);