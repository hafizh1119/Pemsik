import { useState } from "react";
import Card from "@/Pages/Admin/Components/Card";
import Heading from "@/Pages/Admin/Components/Heading";
import Button from "@/Pages/Admin/Components/Button";

import { mahasiswaList } from "@/Data/Dummy";

const Mahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState(mahasiswaList);
  const handleEdit = (data) => {
    setForm(data);
    setIsEdit(true);
    setModalOpen(true);
  };
  const handleDelete = (nim) => {
    if (!confirm("Yakin ingin hapus?")) return;

    setMahasiswa(mahasiswa.filter((m) => m.nim !== nim));
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    nim: "",
    nama: "",
    status: true,
  });
const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.nim || !form.nama) {
    alert("Data belum lengkap!");
    return;
  }

  if (!isEdit) {
    const isExist = mahasiswa.some((m) => m.nim === form.nim);
    if (isExist) {
      alert("NIM sudah ada!");
      return;
    }
  }

  let newData;

  if (isEdit) {
    if (!confirm("Yakin update data?")) return;

    newData = mahasiswa.map((m) =>
      m.nim === form.nim ? form : m
    );
  } else {
    newData = [...mahasiswa, form];
  }

  setMahasiswa(newData);
  localStorage.setItem("mahasiswa", JSON.stringify(newData));

  setModalOpen(false);
};

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <Heading as="h2" className="mb-0 text-left">Daftar Mahasiswa</Heading>
        <Button
          onClick={() => {
            setForm({ nim: "", nama: "", status: true });
            setIsEdit(false);
            setModalOpen(true);
          }}
        >
          + Tambah Mahasiswa
        </Button>
      </div>

      <table className="w-full text-sm text-gray-700">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">NIM</th>
            <th className="py-2 px-4 text-left">Nama</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs, index) => (
            <tr
              key={mhs.nim}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="py-2 px-4">{mhs.nim}</td>
              <td className="py-2 px-4">{mhs.nama}</td>
              <td className="py-2 px-4">
                {mhs.status ? "Aktif" : "Nonaktif"}
              </td>
              <td className="py-2 px-4 text-center space-x-2">
                <a
                  href={`/admin/mahasiswa/${mhs.nim}`}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                >
                  Detail
                </a>
                <Button
                  size="sm"
                  variant="warning"
                  onClick={() => handleEdit(mhs)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(mhs.nim)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/20 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              {isEdit ? "Edit" : "Tambah"} Mahasiswa
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="nim"
                value={form.nim}
                onChange={(e) =>
                  setForm({ ...form, nim: e.target.value })
                }
                placeholder="NIM"
                className="w-full border p-2"
              />

              <input
                name="nama"
                value={form.nama}
                onChange={(e) =>
                  setForm({ ...form, nama: e.target.value })
                }
                placeholder="Nama"
                className="w-full border p-2"
              />
              <select
                name="status"
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value === "true",
                  })
                }
                className="w-full border p-2"
              >
                <option value="true">Aktif</option>
                <option value="false">Nonaktif</option>
              </select>

              <div className="flex justify-end gap-2">
                <Button type="submit" variant="primary">
                  Simpan
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Batal
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Mahasiswa;