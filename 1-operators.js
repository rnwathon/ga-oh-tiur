// Operators
// 1. Penugasan
// 2. Aritmatika
// 3. Perbandingan
// 4. Logika

// === Penugasan === //
// =
// +=
// -=
// *=
// /=
// %=

// let number = 1;

// number += 2;
// number = number + 2;

// number -= 1;
// number = number - 1;

// dst.

// Manipulasi String dengan concantenation
// let name = "Tiur";
// name += "xxx"

// console.log(name)

// === Aritmatika === //
// + (penambahan)
// - (pengurangan)
// * (perkalian)
// / (pembagian)
// % (modulus) -> sisa bagi
// ++ (increment)
// -- (decrement)

// Contoh Modulus
// let number = 40
// console.log(number % 5)

// Modulus bisa dipake untuk mencari angka kelipatan tertentu
// Misalnya kelipatan 2 (angka genap) bisa dengan number % 2
// Kalau hasil 0 berarti number adalah kelipatan 2
//  kalau hasil lebih dari 0 berarti bukan kelipatan 2
// Berlaku untuk kelipatan angka lainnya

// Contoh Increment
// let number = 2;
// number++
// console.log(number)

// Contoh Decrement
// let number = 2;
// number--
// console.log(number)

// Increment & Decremenet itu erat hubungannya dengan Looping
// Misalkan kamu punya array isinya 100 angka
// Setiap angka di array itu, kamu harus kali 2
// Kamu bisa pake increment untuk pindah index array
// Akan dibahas lebih lanjut di materi Looping

// === Perbandingan === //

// == (ngebandingin apakah value nya sama)
// === (ngebandingin apakah value nya sama, tapi lebih strict, tipe datanya juga harus sama)
// != (ngebandingin apakah value tidak sama)
// !== (ngebandingin apakah value nya tidak sama, tapi lebih strict, tipe datanya juga harus sama)
// > (lebih dari)
// < (kurang dari)
// >= (lebih dari sama dengan)
// <= (kurang dari sama dengan)

// Operator perbanding akan menghasilkan Boolean (true / false)

// Contoh:
// let number1 = 1;
// let number2 = "1";

// let result = number1 == number2
// let result = number1 === number2
// let result = number1 != number2
// let result = number1 !== number2
// console.log(result)

// Contoh 2:
// let number1 = 5;
// let number2 = 5;

// let result = number1 <= number2;
// console.log(result)

// === Logika === //

// && (AND)
// || (OR)
// ! (NOT)

// Operator Logika itu membandingkan boolean (true / false)
// dan akan menghasil boolean (true / false)

// let bool1 = true;
// let bool2 = false;

// let result = bool1 && bool2;
// let result = bool1 || bool2;
// let result = !bool1

// console.log(result)

// === Truthy & Falsy === //
// Truthy (True)
// - Number selain 0
// - String yang ada isinya
// - Array
// - Object

// Falsy (False)
// - Number 0
// - String kosong -> ""
// - undefined
// - null
// - NaN

// Cara nge cek truthy & falsy
// Ganti aja value nya

// let value = 123;
// if(value){
//   console.log("Ini adalah truthy")
// }else{
//   console.log("ini adalah falsy")
// }


// Kalau umur dalam range 18 - 30 berarti True
// selain itu False

// let umur = 31;
// let result = umur >= 18 && umur <= 30

// Kalau data kosong (undefined/null/"") berarti True
// selain itu False

// let data = ""
// let result = data === null || data === undefined || data === "";

// console.log(result)


