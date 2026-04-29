import { useState } from "react";
import Card from "@/Pages/Admin/Components/Card";
import Heading from "@/Pages/Admin/Components/Heading";
import Button from "@/Pages/Admin/Components/Button";
import MahasiswaModal from "./MahasiswaModal";
import MahasiswaTable from "./MahasiswaTable";
import { mahasiswaList } from "@/Data/Dummy";
import { confirmDelete } from "@/Helper/SwalHelper";
import {
  toastStoreSuccess,
  toastStoreFailed,
  toastUpdateSuccess,
  toastUpdateFailed,
  toastDeleteSuccess,
  toastDeleteFailed,
} from "@/Helper/ToastHelper";

const Mahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState(mahasiswaList);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const storeMahasiswa = (data) => {
    try {
      setMahasiswa((prev) => [...prev, data]);
      toastStoreSuccess(data.nama);
    } catch {
      toastStoreFailed();
    }
  };

  const updateMahasiswa = (data) => {
    try {
      setMahasiswa((prev) => prev.map((m) => (m.nim === data.nim ? data : m)));
      toastUpdateSuccess(data.nama);
    } catch {
      toastUpdateFailed();
    }
  };

  const deleteMahasiswa = async (nim) => {
    const target = mahasiswa.find((m) => m.nim === nim);
    if (!target) return;

    const confirmed = await confirmDelete(target.nama);
    if (!confirmed) return;

    try {
      setMahasiswa((prev) => prev.filter((m) => m.nim !== nim));
      toastDeleteSuccess(target.nama);
    } catch {
      toastDeleteFailed();
    }
  };

  const openAddModal = () => {
    setSelectedMahasiswa(null);
    setModalOpen(true);
  };

  const openEditModal = (mhs) => {
    setSelectedMahasiswa(mhs);
    setModalOpen(true);
  };

  const handleSubmit = (formData, isEdit) => {
    if (isEdit) {
      updateMahasiswa(formData);
    } else {
      storeMahasiswa(formData);
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <Heading as="h2" className="mb-0 text-left">
          Daftar Mahasiswa
        </Heading>
        <Button onClick={openAddModal}>+ Tambah Mahasiswa</Button>
      </div>
      <MahasiswaTable
        mahasiswa={mahasiswa}
        openEditModal={openEditModal}
        onDelete={deleteMahasiswa}
      />
      <MahasiswaModal
        isModalOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        selectedMahasiswa={selectedMahasiswa}
      />
    </Card>
  );
};

export default Mahasiswa;
