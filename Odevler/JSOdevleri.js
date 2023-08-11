//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

//Örnek-2
/* 
Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 
*/

//Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))

// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 


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
