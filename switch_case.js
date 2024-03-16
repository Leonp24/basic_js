// switch case
let hari = "Selasa";
let aktivitas;

switch (hari) {
  case "Senin":
    aktivitas = "Membaca buku";
    break;
  case "Selasa":
    aktivitas = "Belajar JavaScript";
    break;
  case "Rabu":
    aktivitas = "Berolahraga";
    break;
  case "Kamis":
    aktivitas = "Mengikuti kelas online";
    break;
  case "Jumat":
    aktivitas = "Bersantai di rumah";
    break;
  default:
    aktivitas = "Hari tidak valid";
}

console.log("Pada hari", hari, "saya akan", aktivitas);
