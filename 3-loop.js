// === LOOP === //
// Loop digunakan untuk melakukan sesuatu berulang-ulang

// FOR LOOP
// Anatomy:
// keyword(definition; condition; increment/decrement){ ... }

// Contoh:
// Print ke dalam console angka 1 - 100

// for(let i = 1; i <= 100; i++){
//   // Kode yang akan di looping
//   console.log(i)
// }

// Contoh:
// Print ke dalam console angka 100 - 1

// for(let i = 100; i >= 1; i--){
//   console.log(i)
// }

//  COntoh:
// Print ke dalam console angka 1 sampai dengan angka random

// let random = 5;

// for(let i = 1; i <= random; i++){
//   console.log(i)
// }

// COntoh:
// Print ke dalam console, data di dalam Array

// let arr = ["Budi", "Andi", "Cahyono", "Dedi", "Eka", "Fahry", "Genggi", "Herman", "Ian"]

// INi kalau manual
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// .length akan memberikan jumlah data di dalam array
// console.log(arr.length)

// Ini pake LOOP
// for(let i = 0; i < arr.length; i++){
//   console.log( arr[i] )
// }

// Contoh:
// Print angka 1 - 100
// Kalau angkanya kelipatan tiga, ganti angka yg mau di print jadi "Fizz"
// Kalau angkanya kelipatan lima, ganti angka yg mau di print jadi "Buzz"

// for(let i = 1; i <= 100; i++){
//   if(i % 3 === 0){
//     console.log("Fizz")
//   } else if (i % 5 === 0){
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
// }

// Nested Loop

// COntoh:
// Print pattern di console
// *****
// ****
// ***
// **
// *

for(let i = 1; i <= 5; i++){
  let result = ""
  for(let j = 5; j >= i; j--){
    result += "*"
  }
  console.log(result)
}