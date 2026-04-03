//object
const mahasiswa = {
    nim : 123456789,
    nama: "Hafizh Naufal",
};

//array of object
const listMatkul = [
    {
        matkulId: "MK001",
        nama: "Pemrograman Web",
        nilai: 89
    },
    {
        matkulId: "MK032",
        nama: "Basis Data",
        nilai: 70
    }
];

//spread array listMatkul ke dalam object mahasiswa
const mahasiswa2 = {
    ...mahasiswa,
    matkul: listMatkul
};

//tampilkan dengan literal, output biodata mahasiswa dan matkul yang diambil
console.log(`Nama: ${mahasiswa2.nama}`);
console.log(`NIM: ${mahasiswa2.nim}`);
console.log("Mata Kuliah:");
mahasiswa2.matkul.forEach((matkul) => {
    console.log(`- ${matkul.nama} (${matkul.matkulId}): ${matkul.nilai}`);
});