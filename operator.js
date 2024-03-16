// Operator Pembanding (Comparison Operators):
// ==: Memeriksa kesamaan nilai tanpa memperhatikan tipe data. Contoh: 5 == "5" akan menghasilkan true.
// ===: Memeriksa kesamaan nilai dan tipe data. Contoh: 5 === "5" akan menghasilkan false.
// !=: Memeriksa ketidaksamaan nilai tanpa memperhatikan tipe data.
// !==: Memeriksa ketidaksamaan nilai dan tipe data.
// >: Memeriksa apakah nilai di sebelah kiri lebih besar dari nilai di sebelah kanan.
// <: Memeriksa apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah kanan.
// >=: Memeriksa apakah nilai di sebelah kiri lebih besar dari atau sama dengan nilai di sebelah kanan.
// <=: Memeriksa apakah nilai di sebelah kiri lebih kecil dari atau sama dengan nilai di sebelah kanan.

let a = 5;
let b = 10;

// console.log(a == b);   // false
// console.log(a != b);   // true
// console.log(a > b);    // false
// console.log(a < b);    // true
// console.log(a >= b);   // false
// console.log(a <= b);   // true

// operator ternary (conditional operator) Struktur umumnya adalah "condition ? expr1 : expr2". Jika kondisi bernilai true, maka expr1 dieksekusi, dan jika kondisi bernilai false, maka expr2 dieksekusi.
let age = 20;
let status = (age >= 18) ? "Dewasa" : "Remaja";
// console.log(status);  // Output: Dewasa 

// Operator Logika (Logical Operators):
// Operator logika digunakan untuk menggabungkan beberapa kondisi atau ekspresi logis.

// && (AND): Menghasilkan true jika kedua operand bernilai true.
// || (OR): Menghasilkan true jika salah satu dari operand bernilai true.
// ! (NOT): Menghasilkan kebalikan dari nilai operand.
let x = 10;
let y = 5;
console.log((x > 5) && (y < 10));  // true
console.log((x > 5) || (y > 10));  // true
console.log(!(x == y));            // true