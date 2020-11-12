// === Conditionals === //
// Kegunaan conditional adalah untuk menentukan aturan atau alur program

// IF
// IF ELSE
// IF ELSE IF
// nested IF

// Anatomy IF
// keyword( condition ) { ... }
// contoh: if(age >= 18){ ... }

// Contoh: Mengecek umur

// let age = "Hello"
// console.log("Age is: ", age)

// if(age >= 1 && age < 18){
//   // Kode di dalam ini akan jalan ketika kondisinya terpenuhi (true)
//   console.log("Age is less than 18")
// } else if(age >= 18){
//   console.log("Age is more than 18")
// } 

// Contoh: 
// Cek angka genap/ganjil, 
// kalau genap cek apakah angkanya kelipatan 5
// kalau ganjil, cek apakah angkanya kelipatan 3
// console.log hasil nya

// let number = 15;

// console.log("Number is ", number)
// if(number % 2 === 0){
//   console.log("Number is even")
//   if(number % 5 === 0){
//     console.log("Number is kelipatan 5")
//   } else {
//     console.log("Number is NOT kelipatan 5")
//   }
// } else {
//   console.log("Number is odd")
//   if(number % 3 === 0){
//     console.log("Number is kelipatan 3")
//   } else {
//     console.log("Number is NOT kelipatan 3")
//   }
// }

// Contoh Validasi input

// let input = "HAHAHA";

// console.log("Input from user: ", input)

// if(typeof input === "string"){
//   if(!input){
//     console.log("ERROR: input gak boleh kosong")
//   }
// } else {
//   console.log("ERROR: Input harus string!")
// } 


// PR: 
// 1. Ubah nilai angka menjadi huruf
/*
  deskripsi: 
  Input nilai dari user adalah angka (validasi, harus angka, selain itu console.log ERROR)
  nilai angka ini harus dirubah menjadi nilai huruf dan console.log hasilnya.
  
  kondisi:
  | Nilai Angka | Hasil |
  |   0 - 50    |   D   |
  |  51 - 65    |   C   |
  |  66 - 80    |   B   |
  |  81 - 100   |   A   |

  Expected Result:
  console log
  -> Nilai angka adalah: 68
  -> Nilai huruf adalah: B
*/
