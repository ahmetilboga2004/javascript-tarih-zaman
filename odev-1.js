let isim = prompt("Merhaba, Lütfen Adınızı Griniz: ");
let isim_h1 = document.querySelector("#isim").innerText = isim;


let zaman = new Date();
let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
let aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

let date = document.querySelector("#date");
date.innerHTML = `${zaman.getDate()} ${aylar[zaman.getMonth()].toUpperCase()} ${gunler[zaman.getDay()].toUpperCase()}<br>`;


function Saat() {
    var current = new Date();
    var saat = current.getHours();
    var dakika = current.getMinutes();
    var saniye = current.getSeconds();

    saat = Tik(saat);
    dakika = Tik(dakika);
    saniye = Tik(saniye);

    var time = document.querySelector("#time");
    time.innerHTML = `${saat}:${dakika}:${saniye}`;

    var yenile = setTimeout(function(){Saat()}, 1000);

}

function Tik(k) {
    if (k < 10) {
        k = "0" + k;
        return k;
    } else {
        return k;
    }
}


Saat()