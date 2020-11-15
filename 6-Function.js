// === Function === //

/*

Function digunakan untuk mengelompokan logika-logika program yang sudah kita buat.
Bisa dibilang, function itu ibaratnya variable tapi isinya adalah Logika.

Jadi kita bisa membuat function untuk logika-logika tertentu 
yang nantinya kita bisa kita panggil berkali-kali sesuai kebutuhan.

Anatomy dari function:

keyword namaFunction(parameter) {
  kode program
}

Parameter adalah data yang dapat kita berikan ke function untuk di proses.
Parameter bersifat opsional jadi tidak wajib tergantung apakah kita butuh
data dari luar function atau tidak. Parameter juga bisa lebih dari satu,
cukup pisahkan dengan koma.

Ketika kita sudah membuat function, tentunya function itu hanya di definisikan,
belum digunakan. Kita perlu memanggil function tersebut untuk menjalankan 
logika di dalamnya.

Untuk memanggil function atau biasa disebut invoking the function, kita menggunakan symbol ()

namaFunction()

Di dalam (), kita bisa memasukan argumen2 yang nantinya akan digunakan di dalam function sebagai parameter (Jika diperlukan)

*/

// === Contoh Tanpa Parameter === :

// Function Declaration
function printSomething(){
  console.log("This is me printing something...")
}

// Invoking the function
printSomething();

// === Contoh Menggunakan Parameter === :

// Function Declaration
function countArea(length, width){
  let result = length * width;
  console.log("The Area is: " + result + " Meter")
}

// Invoking the function
countArea(30, 25)
countArea(15, 10)

/* IMPORTANT NOTE:

Kalau menggunakan parameter ketika membuat function,
pastikan ketika memanggil function tersebut, urutan parameter nya sesuai.

Seperti contoh di atas untuk function countArea menerima 2 parameter yaitu length & width.

Ketika invoke function countArea(30, 25)
artinya 30 adalah length & 25 adalah width

JANGAN SAMPAI KEBALIK YAAA...

*/



// === RETURN KEYWORD === //

/*

Selain melakukan console.log di dalam function, kita juga bisa mengembalikan data yang telah di proses.
Sebagai contoh dalam kasus function countArea, dibanding melakukan console.log kita bisa mengembalikan
data result dengan menggunakan operator RETURN

*/

// Function baru dengan return
function countAreaReturn(length, width){
  let result = length * width;
  return result
}

// Invoking the function
// Karena function mengembalikan data, maka kita harus masukin datanya ke variable biar bisa dipake
let area = countAreaReturn(50, 50);
console.log("The Area is: " + area + " Meter")

