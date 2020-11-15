// === Array === //

/*
Array adalah struktur data yang merepresentasikan List / Daftar dengan data-data tertentu di dalamnya.
Seringkali digunakan untuk menyimpan data-data yang bersifat daftar sesuatu yang lebih dari satu.
Contoh: List nama mahasiswa, List blog post, List tweets di Twitter dll.

Symbol yang melambangkan array adalah kurung siku []
Masing-masing data di dalamnya di pisahkan oleh tanda koma.

Contoh:

let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]

Data yang bisa ada didalam array cukup beragam. 
Mulai dari String, Number, Object, bahkan Array lagi.
Tergantung data apa yang ingin dibuat.
*/

/* === Cara mengambil data di dalam array === 

Array menggunakan Index untuk memposisikan data-data di dalamnya sehingga bisa diakses.
Index bisa dianggap sebagai nomor urut data yang ada di dalam array dan 
dimulai dari index 0 sampai akhir tergantung jumlah data di dalam array tersebut.

let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]

Dalam array di atas, berikut adalah index dari masing-masing data:

"Andi" berada di Index 0
"Budi" berada di Index 1
"Caca" berada di Index 2
"Deni" berada di Index 3
"Edo" berada di Index 4

*/

// Untuk mengambil data di dalam array, kita dapat menggunakan syntax sebagai berikut:
// Array[Index]

// Contoh:
// let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
// console.log(studentNames[0]) // "Andi"
// console.log(studentNames[1]) // "Budi"
// console.log(studentNames[4]) // "Edo"



/* === Cara merubah data di dalam array === 

Ketika kita sudah punya akses terhadap data yang ada di dalam array 
kita bisa mengubah/memanipulasi data-data yang ada di dalamnya.

Salah satunya jika kita ingin mengganti data tertentu di dalam array.

let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]

Sebagai contoh, jika kita ingin mengubah nama "Caca" dalam array di atas menjadi "Hendri".
Yang harus kita lakukan adalah melihat data tersebut berada di Index ke berapa,
kemudian kita bisa overwrite/menimpa data tersebut dengan data baru.

Dalam kasus ini "Caca" berada di Index ke 2 maka untuk mengubah data "Caca"  yang bisa kita lakukan adalah:

studentNames[2] = "Hendri";

Dengan melakukan hal diatas, sekarang array akan memiliki data yang berbeda yaitu:

["Andi", "Budi", "Hendri", "Deni", "Edo"]

*/

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
studentNames[2] = "Hendri";
console.log(studentNames)


/* === Array Manipulation === */

/*

Ada beberapa method yang bisa digunakan untuk memanipulasi Array 
seperti menambah data baru, menghapus data, mengupdate data dll.

Berikut ini adalah beberapa method dasar yang harus dipahami:
1. Array.push()
2. Array.pop()
3. Array.shift()
4. Array.unshift()
5. Array.splice()
6. Array.reverse()

*/

// Array.push()
// Digunakan untuk menambah data baru di urutan TERAKHIR ke dalam array.
// Arra.push(dataYangInginDitambahkan)

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
studentNames.push("Gian")
console.log(studentNames)


// Array.pop()
// Digunakan untuk menghapus data di urutan TERAKHIR di dalam array

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
studentNames.pop()
console.log(studentNames)


// Array.shift()
// Digunakan untuk menghapus data di urutan PERTAMA di dalam array

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
studentNames.shift()
console.log(studentNames)


// Array.unshift()
// Digunakan untuk menambah data baru di urutan PERTAMA ke dalam array.
// Array.unshift(dataYangInginDitambahkan)

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
studentNames.unshift("Herman")
console.log(studentNames)


// Array.splice()
// Dapat digunakan untuk menghapus data di Index tertentu atau mengupdata data.

// Array.splice(argumen1, argumen2, argumen3)

// argumen1: Index yang ingin di hapus/di update
// argumen2: Jumlah data yang ingin di hapus mulai dari Index yang sudah di tentukan di argumen1
// argumen3 (opsional): digunakan jika ingin mengupdate data, berisi data baru.

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
console.log("=== menghapus Budi ===")
studentNames.splice(1, 1)
console.log(studentNames) // result: ["Andi", "Caca", "Deni", "Edo"]
console.log( "== Mengupdate Deni menjadi Deni Sumargo ===")
studentNames.splice(2, 1, "Deni Sumargo") // result: ["Andi", "Caca", "Deni Sumargo", "Edo"]


// Array.reverse()
// Digunakan untuk membalikan posisi data-data di dalam Array

// Contoh:
let studentNames = ["Andi", "Budi", "Caca", "Deni", "Edo"]
studentNames.reverse()
console.log(studentNames)

