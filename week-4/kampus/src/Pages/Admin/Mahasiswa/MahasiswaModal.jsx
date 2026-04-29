import { useState, useEffect } from "react";
import Button from "@/Pages/Admin/Components/Button";
import { confirmUpdate } from "@/Helper/SwalHelper";

const MahasiswaModal = ({ isModalOpen, onClose, onSubmit, selectedMahasiswa }) => {
  const [form, setForm] = useState({
    nim: "",
    nama: "",
    status: true,
  });

  useEffect(() => {
    if (selectedMahasiswa) {
      setForm(selectedMahasiswa);
    } else {
      setForm({ nim: "", nama: "", status: true });
    }
  }, [selectedMahasiswa, isModalOpen]);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nim || !form.nim.trim()) {
      alert("NIM tidak boleh kosong!");
      return;
    }
    if (!form.nama || !form.nama.trim()) {
      alert("Nama tidak boleh kosong!");
      return;
    }
    if (form.nim.trim().length < 5) {
      alert("NIM minimal 5 karakter!");
      return;
    }

    // Jika mode edit, tampilkan konfirmasi SweetAlert2
    if (selectedMahasiswa) {
      const confirmed = await confirmUpdate(form.nama);
      if (!confirmed) return;
    }

    onSubmit(form, !!selectedMahasiswa);
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/20 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {selectedMahasiswa ? "Edit" : "Tambah"} Mahasiswa
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">NIM</label>
            <input
              name="nim"
              value={form.nim}
              onChange={handleChange}
              placeholder="NIM"
              disabled={!!selectedMahasiswa}
              className={`w-full border p-2 rounded ${
                selectedMahasiswa ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
            <input
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="true">Aktif</option>
              <option value="false">Nonaktif</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="submit" variant="primary">Simpan</Button>
            <Button type="button" variant="secondary" onClick={onClose}>Batal</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MahasiswaModal;
