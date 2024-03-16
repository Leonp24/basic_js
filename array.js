// Mendefinisikan array kosong
let angka = [];

// Mendefinisikan array dengan nilai awal
let buah = ["Apel", "Pisang", "Jeruk"];

// Mendefinisikan array dengan nilai campuran
let campuran = [1, "Dua", true, { nama: "John", usia: 30 }];

// Mengakses nilai dalam array
// console.log(buah[0]);
// console.log(campuran[2]);


// Metode array
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(numbers.join(", ")); // mengubah isi array menjadi string Output: "3, 1, 4, 1, 5, 9, 2, 6"
console.log(numbers.sort()); // sortir berdasarkan urutan Output: [1, 1, 2, 3, 4, 5, 6, 9]
console.log(numbers.indexOf(5)); // mencari indeks dari nilai tertentu Output: 4
