// =====================================
// SMART CLASSROOM ATTENDANCE
// app.js
// =====================================

// ------------------------------
// Jam & Tanggal
// ------------------------------

function updateDateTime() {
    const now = new Date();

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    const tanggal =
        hari[now.getDay()] + ", " +
        now.getDate() + " " +
        bulan[now.getMonth()] + " " +
        now.getFullYear();

    const jam =
        now.toLocaleTimeString("id-ID");

    const tanggalEl = document.getElementById("tanggal");
    const jamEl = document.getElementById("jam");

    if(tanggalEl) tanggalEl.innerHTML = tanggal;
    if(jamEl) jamEl.innerHTML = jam;
}

setInterval(updateDateTime,1000);

updateDateTime();


// ------------------------------
// Salam
// ------------------------------

function salam(){

    const jam = new Date().getHours();

    let teks="";

    if(jam<11){

        teks="☀️ Selamat Pagi";

    }

    else if(jam<15){

        teks="🌤️ Selamat Siang";

    }

    else if(jam<18){

        teks="🌇 Selamat Sore";

    }

    else{

        teks="🌙 Selamat Malam";

    }

    const salamEl=document.getElementById("salam");

    if(salamEl){

        salamEl.innerHTML=teks;

    }

}

salam();


// ------------------------------
// Animasi Counter
// ------------------------------

const angka=document.querySelectorAll(".counter");

angka.forEach(counter=>{

let awal=0;

const akhir=Number(counter.innerHTML);

const timer=setInterval(()=>{

awal++;

counter.innerHTML=awal;

if(awal>=akhir){

clearInterval(timer);

}

},30);

});
