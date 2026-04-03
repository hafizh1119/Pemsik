// variable, menampung 1 data
const nim = "A11.2023.14904";

// variable array, menampung multiple data tapi 1 tipe data
const list_nim = ["A11.2023.14904", "A11.2023.14905", "A11.2023.14906"];

// object
const mahasiswa = {
    // key: value
    // key nya adalah nama, nim, umur, status
    // key punya value masing-masing
    nim: "123456789",
    nama: "Hafizh Naufal",
    umur: 20,
    status: true,
};

//array of object, menampung multiple data tapi 1 tipe data yaitu object
const list_mahasiswa = [
    {
        nama: "mahasiswa1",
        nim: "A11.2023.12343",
        umur: 23,
    },
    {
        nama: "mahasiswa2",
        nim: "A11.2023.12344",
        umur: 22,
    }
];

console.log(list_mahasiswa);

// object baru
const mahasiswa2 = {
    nim: "123456789",
    nama: "Hafizh Naufal",
    umur: 20,
    status: true,
};

// destructuring
const { nama, umur, status } = mahasiswa2;

console.log(umur);

if (umur > 20) {
    console.log("yee tua");
} else {
    console.log("umur tidak pantas");
}

console.log("Nama: " + nama, "Umur: " + umur, "Status: " + status);
console.log(`Nama: ${nama}, Umur: ${umur}, Status: ${status}`);

//array of object
const listMahasiswa = [
    { nama: "mahasiswa1", nim: "A11.2023.12343", umur: 23 },
    { nama: "mahasiswa2", nim: "A11.2023.12344", umur: 22 },
    { nama: "mahasiswa3", nim: "A11.2023.12345", umur: 21 },
];

// spreed, nambah data
const mhs3 = {nim: "A11.2023.12345", nama: "mahasiswa3", umur: 21};

// spread ke array, tambahkan data ke array
const new_listMahasiswa2 = [
    ...listMahasiswa, 
    mhs3
];

// data before 3, data after 4
console.log(new_listMahasiswa2);

const ipk = 3.7;

// spread ke object
const new_mhs3 = {
    ...mhs3,
    ipk
};
console.log(new_mhs3);

