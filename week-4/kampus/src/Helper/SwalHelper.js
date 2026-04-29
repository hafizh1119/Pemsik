import Swal from "sweetalert2";

// Konfirmasi hapus mahasiswa
export const confirmDelete = async (nama) => {
  const result = await Swal.fire({
    title: "Hapus Mahasiswa?",
    text: `Data mahasiswa "${nama}" akan dihapus secara permanen!`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Ya, Hapus!",
    cancelButtonText: "Batal",
  });

  return result.isConfirmed;
};

// Konfirmasi sebelum simpan perubahan data (edit)
export const confirmUpdate = async (nama) => {
  const result = await Swal.fire({
    title: "Simpan Perubahan?",
    text: `Yakin ingin menyimpan perubahan data mahasiswa "${nama}"?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3b82f6",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Ya, Simpan!",
    cancelButtonText: "Batal",
  });

  return result.isConfirmed;
};

// Konfirmasi logout user
export const confirmLogout = async () => {
  const result = await Swal.fire({
    title: "Keluar?",
    text: "Apakah Anda yakin ingin logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Ya, Logout!",
    cancelButtonText: "Batal",
  });

  return result.isConfirmed;
};