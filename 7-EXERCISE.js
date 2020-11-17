// === LATIHAN === //

/*

1.  Buat struktur data yang berisi daftar mahasiswa. Masing-masing mahasiswa memiliki data masing-masing yaitu:
    Name, Age, Address (terdiri dari Street, City, dan Postal Code ), Major (jurusan), Semester.

    Isi data nya minimal 5 data mahasiswa. Isi data random aja. Pake data temen-temen juga boleh.


2.  Bikin function untuk nge-print di console daftar nama mahasiswa, semester dan Major nya (pake data yang udah dibikin tadi):

    Expected Result (contoh):
    
    Name: Andi
    Semester: 5
    Major: Teknik Industri

    Name: Budi
    Semester 3
    Major: Teknik Mesin

    dst.

3.  Ada mahasiswa baru gabung, tambahin data mahasiswa baru ke daftar mahasiswa tadi (data detailnya terserah aja).
    Print hasilnya ke console dengan format yang sama dengan soal no. 2

4.  Ceritanya udah lewat 1 semester nih, update semua data semester mahasiswa jadi tambah 1 karna udah naik semester.
    Print hasilnya ke console dengan format yang sama dengan soal no. 2

5.  Ada satu mahasiswa yang bolos terus, jadinya kena DO. Hapus data mahasiswa tersebut.  
    Print hasilnya ke console dengan format yang sama dengan soal no. 2

6.  Buat function sebagai berikut:
    tambahMahasiswa(parameter disesuaikan)
    updateMahasiswa(parameter disesuaikan)
    deleteMahasiswa(parameter disesuaikan)

*/

let dataMahasiswa = [
  {
    id: "1",
    name: "Andi",
    age: 20,
    semester: 1
  },
  {
    id: "2",
    name: "Budi",
    age: 20,
    semester: 1
  },
  {
    id: "3",
    name: "Andi",
    age: 24,
    semester: 1
  }
]

function printMahasiswa(){
  for(let i = 0; i < dataMahasiswa.length; i++ ){
    console.log("Nama: " + dataMahasiswa[i].name)
    console.log("Umur: " + dataMahasiswa[i].age)
    // console.log("Semester: " + dataMahasiswa[i].semester)
  }
}

function tambahMahasiswa(name, age, semester){
  dataMahasiswa.push({
    name: name,
    age: age,
    semester: semester
  })
}

function deleteMahasiswa(index){
  dataMahasiswa.splice(index, 1)
}

function deleteKeyValueMahasiswa(key){
  for(let i = 0; i < dataMahasiswa.length; i++){
    delete dataMahasiswa[i][key]
  }
}

tambahMahasiswa("Tiur", 22, 6)
tambahMahasiswa("Rendi", 24, 14)

printMahasiswa()

console.log("================")

deleteMahasiswa(3)

printMahasiswa()

console.log("================")

deleteKeyValueMahasiswa("name")
deleteKeyValueMahasiswa("age")

console.log(dataMahasiswa)