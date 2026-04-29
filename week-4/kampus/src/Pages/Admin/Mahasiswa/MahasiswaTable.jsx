import Button from "@/Pages/Admin/Components/Button";

const MahasiswaTable = ({ mahasiswa, openEditModal, onDelete }) => {
  const handleDelete = (nim) => {
    if (!confirm("Yakin ingin hapus data mahasiswa ini?")) return;
    onDelete(nim);
  };

  return (
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
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  mhs.status
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {mhs.status ? "Aktif" : "Nonaktif"}
              </span>
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
                onClick={() => openEditModal(mhs)}
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

        {mahasiswa.length === 0 && (
          <tr>
            <td colSpan={4} className="py-6 text-center text-gray-400 italic">
              Belum ada data mahasiswa.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MahasiswaTable;
