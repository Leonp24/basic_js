// Fungsi sederhana untuk menambahkan dua angka
function tambahkan(angka1, angka2) {
    return angka1 + angka2;
}

// Memanggil fungsi dan menyimpan hasilnya dalam variabel
let hasil = tambahkan(5, 3);
// console.log(hasil);


// function anonym
// Mendefinisikan fungsi anonim dan menyimpannya dalam variabel
let greeting = function (nama) {
    return "Halo, " + nama + "!";
}

// Memanggil fungsi anonim
// console.log(greeting("John"));


// function arrow ES6
let kuadrat = (x) => {
    return x * x;
}

// Memanggil fungsi arrow
console.log(kuadrat(4));