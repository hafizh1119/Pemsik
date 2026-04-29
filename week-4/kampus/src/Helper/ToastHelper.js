import toast from "react-hot-toast";

// ── Auth ──────────────────────────────────────────────

export const toastLoginSuccess = (nama) => {
  toast.success(`Selamat datang, ${nama}!`, {
    duration: 3000,
    position: "top-right",
  });
};

export const toastLoginFailed = () => {
  toast.error("Email atau password salah!", {
    duration: 3000,
    position: "top-right",
  });
};

// ── Mahasiswa: Tambah ─────────────────────────────────

export const toastStoreSuccess = (nama) => {
  toast.success(`Mahasiswa "${nama}" berhasil ditambahkan!`, {
    duration: 3000,
    position: "top-right",
  });
};

export const toastStoreFailed = () => {
  toast.error("Gagal menambahkan data mahasiswa!", {
    duration: 3000,
    position: "top-right",
  });
};

// ── Mahasiswa: Update ─────────────────────────────────

export const toastUpdateSuccess = (nama) => {
  toast.success(`Data mahasiswa "${nama}" berhasil diperbarui!`, {
    duration: 3000,
    position: "top-right",
  });
};

export const toastUpdateFailed = () => {
  toast.error("Gagal memperbarui data mahasiswa!", {
    duration: 3000,
    position: "top-right",
  });
};

// ── Mahasiswa: Hapus ──────────────────────────────────

export const toastDeleteSuccess = (nama) => {
  toast.success(`Mahasiswa "${nama}" berhasil dihapus!`, {
    duration: 3000,
    position: "top-right",
  });
};

export const toastDeleteFailed = () => {
  toast.error("Gagal menghapus data mahasiswa!", {
    duration: 3000,
    position: "top-right",
  });
};