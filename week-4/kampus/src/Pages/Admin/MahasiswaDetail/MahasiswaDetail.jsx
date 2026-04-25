import Card from "@/Pages/Admin/Components/Card";
import Heading from "@/Pages/Admin/Components/Heading";


const MahasiswaDetail = () => {
  const data = JSON.parse(localStorage.getItem("mahasiswa")) || [];
  const path = window.location.pathname;
  const nim = path.split("/").pop();

  const mahasiswa = data.find((m) => m.nim === nim);

  if (!mahasiswa) {
    return <p className="text-red-600">Data mahasiswa tidak ditemukan.</p>;
  }

  return (
    <Card>
      <Heading as="h2" className="mb-4 text-left">Detail Mahasiswa</Heading>
      <table className="table-auto text-sm w-full">
        <tbody>
          <tr>
            <td className="py-2 px-4 font-medium">NIM</td>
            <td className="py-2 px-4">{mahasiswa.nim}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-medium">Nama</td>
            <td className="py-2 px-4">{mahasiswa.nama}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-medium">Status</td>
            <td className="py-2 px-4">
              {mahasiswa.status ? "Aktif" : "Tidak Aktif"}
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default MahasiswaDetail;