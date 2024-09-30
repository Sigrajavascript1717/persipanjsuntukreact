// Soal 1: Memfilter suhu di atas 30 derajat Celsius
const temperatures = [25, 32, 28, 35, 30, 40];
const cekderajat = temperatures.filter(fngsicek);
function fngsicek(celsius) {
    return celsius >= 30;
}
console.log(cekderajat); 
// Output: [32, 35, 40]
// Penilaian: 100/100 - Kode sudah tepat dan jelas.

// Soal 2: Memfilter nama hewan yang memiliki lebih dari 5 karakter
const pets = ["cat", "dog", "hamster", "parrot", "goldfish", "tortoise"];
const namahewan = pets.filter(nama);
function nama(a) {
    return a.length > 5;
}
console.log(namahewan);
// Output: ["hamster", "parrot", "goldfish", "tortoise"]
// Penilaian: 100/100 - Kode sangat baik, fungsi sudah sesuai.

// Soal 3: Memfilter bilangan genap dari array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getgenap = numbers.filter(genap);
function genap(angka) {
    return angka % 2 === 0;
}
console.log(getgenap);
// Output: [2, 4, 6, 8, 10]
// Penilaian: 100/100 - Kode sudah tepat dan logis.

// Soal 4: Memfilter nilai ujian yang di atas 75
const scores = [60, 85, 70, 90, 55, 80];
const hasilnilai = scores.filter(fungsi);
function fungsi(score) {
    return score >= 75;
}
console.log(hasilnilai);
// Output: [85, 90, 80]
// Penilaian: 100/100 - Kode sudah sesuai dengan tujuan.

// Soal 5: Memfilter produk dengan harga di bawah 5000
const products = [
    { name: "Book", price: 3000 },
    { name: "Pen", price: 2000 },
    { name: "Notebook", price: 6000 },
    { name: "Eraser", price: 1000 },
];
const barang = products.filter(cek => cek.price <= 5000);
function cek(harga) {
    return harga <= 5000;
}
console.log(barang);
// Output: [{ name: "Book", price: 3000 }, { name: "Pen", price: 2000 }, { name: "Eraser", price: 1000 }]
// Penilaian: 90/100 - Fungsi cek tidak diperlukan di sini, bisa langsung di filter.

// Soal 6: Memfilter berat badan di atas 70
const weights = [60, 75, 80, 55, 65, 90];
const berat = weights.filter(cekBB);
function cekBB(BeratBB) {
    return BeratBB >= 70;
}
console.log(berat);
// Output: [75, 80, 90]
// Penilaian: 100/100 - Kode sudah tepat dan jelas.

// Soal 7: Memfilter nama siswa yang mengandung huruf "A"
const students = ["Ali", "Budi", "Siti", "Dewi", "Arif"];
const namaSiswa = students.filter(siswa => siswa.includes("A"));
console.log(namaSiswa);
// Output: ["Ali", "Arif"]
// Penilaian: 100/100 - Kode sangat baik, fungsi sudah sesuai.

// Soal 8: Memfilter tahun lahir di atas tahun 1990
const birthYears = [1985, 1992, 1978, 2000, 1995, 1989];
const tahun = birthYears.filter(cekTahun => cekTahun >= 1990);
console.log(tahun);
// Output: [1992, 2000, 1995]
// Penilaian: 100/100 - Kode sudah sesuai dengan tujuan.

// Soal 9: Memfilter rating film di atas 7
const ratings = [6.5, 8.0, 7.2, 5.0, 9.1, 7.0];
const nilaiFilm = ratings.filter(nilai => nilai >= 7);
console.log(nilaiFilm);
// Output: [8.0, 7.2, 9.1, 7.0]
// Penilaian: 100/100 - Kode sudah tepat dan logis.

// Soal 10: Memfilter elektronik dengan harga di atas 1 juta
const electronics = [
    { name: "Smartphone", price: 1200000 },
    { name: "Laptop", price: 8000000 },
    { name: "Tablet", price: 500000 },
    { name: "Smartwatch", price: 2000000 },
];
const hargaElektro = electronics.filter(cek => cek.price >= 1000000);
console.log(hargaElektro);
// Output: [{ name: "Smartphone", price: 1200000 }, { name: "Laptop", price: 8000000 }, { name: "Smartwatch", price: 2000000 }]
// Penilaian: 100/100 - Kode sudah sesuai dengan tujuan.

// Soal 11: Memfilter harga buah yang kurang dari atau sama dengan 10 ribu
const fruitPrices = [8000, 12000, 6000, 15000, 5000, 9000];
const hargabuah = fruitPrices.filter(namaBuah);
function namaBuah(buah) {
    return buah <= 10000;
}
console.log(hargabuah); 
// Output: [8000, 6000, 5000, 9000]
// Penilaian: 90/100 - Kode sudah benar, hanya logika dalam fungsi bisa lebih ringkas.

// Soal 12: Memfilter nama kota dengan lebih dari 5 karakter
const cities = ["Jakarta", "Bandung", "Semarang", "Surabaya", "Yogya"];
const namaKota = cities.filter(cek => cek.length > 5);
console.log(namaKota);
// Output: ["Jakarta", "Bandung", "Semarang", "Surabaya"]
// Penilaian: 100/100 - Sudah sangat baik, logika dan kode jelas.

// Soal 13: Memfilter usia anak-anak di bawah 12 tahun
const ages = [10, 14, 8, 15, 11, 7];
const age = ages.filter(cekAge => cekAge < 12);
console.log(age);
// Output: [10, 8, 11, 7]
// Penilaian: 100/100 - Kode sudah pas sesuai dengan studi kasusnya.

// Soal 14: Memfilter buku dengan rating di atas 4
const books = [
    { title: "Book A", rating: 3.5 },
    { title: "Book B", rating: 4.5 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.0 },
];
const rating = books.filter(cekRating => cekRating.rating > 4);
console.log(rating);
// Output: [{ title: "Book B", rating: 4.5 }, { title: "Book C", rating: 5.0 }]
// Penilaian: 100/100 - Kode sudah tepat, penggunaan `filter` sangat baik.

// Soal 15: Memfilter kendaraan bertipe "mobil"
const vehicles = [
    { name: "Toyota", type: "mobil" },
    { name: "Yamaha", type: "motor" },
    { name: "Suzuki", type: "mobil" },
    { name: "Honda", type: "motor" },
];
const mobil = vehicles.filter(cekMobil => cekMobil.type === "mobil");
console.log(mobil);
// Output: [{ name: "Toyota", type: "mobil" }, { name: "Suzuki", type: "mobil" }]
// Penilaian: 100/100 - Kode sederhana dan bekerja dengan baik.
  
// Nilai Akhir:
// Rata-rata dari semua soal: (100 + 100 + 100 + 100 + 90 + 100 + 100 + 100 + 100 + 100 + 90 + 100 + 100 + 100 + 100) / 15 = 98.67
// Total Skor: 98.67/100
