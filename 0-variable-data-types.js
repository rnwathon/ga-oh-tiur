
// Data Types
// Di JavaSript ada 2 tipe data secara umum:
// =========================================
// 1. Primitive / Value Types
//  - String -> "hello" atau 'world'
      // "I'm a man"
      // "08126875990"
//  - Number
      // 10 -> integer
      // 5.5 -> float
//  - Boolean
      // true
      // false
//  - Null 
//  - Undefined

// 2. Reference Types
//  - Array
      // ["Adam", "Budi", "Charlie"]
//  - Object
      // {
      //  name: "Tiur",
      //  age: 23,
      //  married: false,
      //  eye: "Brown",
      //  skin: "sawo matang" 
      // }
//  - Functions

// Variables
// keywords: let, const, var

// Anatomy Variable
// keyword namaVariable
// keyword namaVaribale = value

let address;
let name = "Tiur";
let age = 23;
let married = false;

name = "Rakhmat"; // Mengubah value dari variable
address; // valuenya bakal undefined

let person = {
  name: "Tiur",
  age: 23,
  married: false,
  eye: "Brown",
  skin: "sawo matang",
  
}

let people = [
  {
    name: "Tiur",
    age: 23,
    married: false,
    eye: "Brown",
    skin: "sawo matang",
    hobbies: ["tidur", "nonton"]
  },
  {
    name: "Rakhmat",
    age: 24,
    married: false,
    eye: "black",
    skin: "sawo matang",
    hobbies: ["tidur", "nonton"]
  },
]

// console.log(address)
// console.log(name)
// console.log(age)
// console.log(married)

// Aturan penamaan variable
// 1. Gak ada boleh ada spasi 
    // let home address; -> gak boleh
    // let homeaddress; -> boleh
    // let homeAddress; -> boleh (camelCase)
    // let home_address; -> boleh (snake_case)
// 2. Harus deskriptif 
    // let x = 23; -> gak boleh
    // let age = 23; -> boleh
// 3. Gak boleh berawal angka
    // let 1age = 23; -> gak boleh (bakal error)
    // let age = 23; -> boleh
// 4. Gak boleh pake Reserved Keyword

// typeof
// console.log(typeof address)
