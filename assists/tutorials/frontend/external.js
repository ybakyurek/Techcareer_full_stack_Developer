
// single thread
// SORU1
let userInput = prompt("1. numara:");
let num1 = parseInt(userInput);
let userInput2 = prompt("2. numara:");
let num2 = parseInt(userInput2);
let result = num1 + num2;
alert("Iki sayinin toplami = " +result);
console.log("Iki sayinin toplami = " +result);


// SORU2
let derece = prompt("Dereceyi giriniz(Celsius)");
alert((derece * 9 / 5) + 32+ " derece(Fahrenheit)");
console.log((derece * 9 / 5) + 32 + " derece(Fahrenheit)");

//SORU3
let x = prompt("X sayisini giriniz");
let k = prompt("K sayisini giriniz");
let result3 = 3 * x + 4 * k;
alert("Denklem sonucu = " + result3);
console.log("Denklem sonucu = " + result3);

//SORU4
let result4 = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));
alert("Islem sonucu = " + result4);
console.log("Islem sonucu = " + result4);

//soru4
let num3 = -5.9;
let sayi = Math.round(Math.sqrt(Math.pow(Math.round(Math.abs(num3)),2)));
let bolum = sayi/5;
let kalan = sayi%5;
let secilen = Math.min(bolum,kalan);
if (secilen%2!=0) {
    secilen +=3;
}
alert("Islem sonucu = " + secilen);
console.log("Islem sonucu = " + secilen);

//soru5
let num4 = prompt(" sayi giriniz");
    if (num4 < 0) {
        alert("Sayiniz negafit")
        console.log("Sayiniz negafit");
    } else {
        alert("Sayiniz pozitif")
        console.log("Sayiniz pozitif");
    }

//soru6

let password = prompt("parolanızı girin:");
let repassword = prompt("parolanızı tekrar girin:");
if (password === repassword) {
    alert("Giris basarili.");
    console.log("Giris basarili.");
} else {
    alert("Sifrenizi kontrol ediniz");
    console.log(("Sifrenizi kontrol ediniz"));
}
