// === Object === //

/*

Sesuai namanya, object adalah struktur data yang merepresentasikan objek selayaknya di dunia nyata.
Karakteristik object adalah memiliki simbol {} dan didalamnya berupa key-value pairs (pasangan key dan value)

Contoh:
let kursi = {
  bahan: "Kayu",
  tinggi: 75
  lebar: 30
  panjang: 45
}

Object di dunia nyata seperti kursi bisa punya beberapa hal didalamnya seperti bahan kursi, tinggi, panjang, lebar, dll.
bahan, tinggi, lebar dan panjang merupakan KEY
"Kayu", 75, 30, dan 45 merupakan VALUE

Selain VALUE yang merupakan data (memiliki tipe data), Value juga berisi function.

Contoh:
let kucing = {
  nama: "Hansel",
  jenis: "Anggora",
  umur: 10,
  bersuara: function(){ console.log("Meong") },
  tidur: function(){ console.log("zzz") }
}

Key yang valuenya adalah DATA disebut PROPERTIES.
Sedangkan Key yang valuenya adalah FUNCTION disebut METHOD

Properties melambangkan karakteristik dari objek tersebut, sedangkan method melambangkan hal-hal yang bisa objek lakukan.
Atau bisa juga dibilang Properties adalah kata sifat, sedangkan Method adalah kata kerja.

*/

/* === Cara mengambil data dari objek === 

Jika array menggunakan Index sebagai cara untuk mengakses data di dalamnya, 
Object menggunakan KEY agar kita bisa mengakses data di dalamnya.

Ada 2 metode yang bisa digunakan untuk mengakses data di dalam object:

1. Dot notation
--> Object.key

2. Bracket notation
--> Object[key]

*/

// Contoh:
// let user = {
//   name: "Henry",
//   age: 25,
//   address: {
//     street: "Jl. Kelinci No. 32",
//     city: "Jakarta",
//     state: "Indonesia"
//   }
// }

// Dot Notation
// console.log( user.name )
// console.log( user.age )
// console.log( user.address.street )

// Bracket Notation
// console.log( user["name"] )
// console.log( user["age"] )
// console.log( user["address"]["street"] )


/* === Cara merubah data di dalam object === 

Memanipulasi data didalam object cenderung lebih mudah di banding array 
karna kita memiliki KEY sebagai patokan.

Untuk menambahkan data baru, kita bisa mencari key baru dan memasukan data kedalamnya:
( Bisa menggunakan Dot Notation atau Bracket Notation )

*/

// Menambahkan Data Baru
// ps: Pastikan KEY-nya unique tidak boleh ada key yang sama.

let user = {
  name: "Henry",
  age: 25,
  address: {
    street: "Jl. Kelinci No. 32",
    city: "Jakarta",
    state: "Indonesia"
  }
}

// Menambahkan Data Baru:
console.log( "=== Menambah Data Baru ===")
user.placeOfBirth = "Yogyakarta";
user.address.postalCode = "30317";
console.log( user )

// Mengupdate Data yang sudah ada:
console.log( "=== Mengupdate Data ===")
user.address.city = "Bandung"
console.log( user )

// Mehapus Data
/* 
  Untuk Menghapus key-value pair di dalam object,
  kita bisa menggunakan operator DELETE.

  delete Object.key
*/
console.log( "=== Menghapus Data ===")
delete user.age;
console.log( user )