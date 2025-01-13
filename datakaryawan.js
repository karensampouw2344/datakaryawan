import React, { useState, useEffect } from "react";
import axios from "axios";

const KaryawanList = ({ onEdit, onDelete }) => {
  const [karyawans, setKaryawans] = useState([]);

  useEffect(() => {
    fetchKaryawans();
  }, []);

  const fetchKaryawans = async () => {
    const response = await axios.get("http://localhost:8000/api/karyawans");
    setKaryawans(response.data);
  };

  return (
    <div>
      <h2>Daftar Karyawan</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Jabatan</th>
            <th>Email</th>
            <th>No. Telp</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {karyawans.map((karyawan) => (
            <tr key={karyawan.id}>
              <td>{karyawan.id}</td>
              <td>{karyawan.nama}</td>
              <td>{karyawan.jabatan}</td>
              <td>{karyawan.email}</td>
              <td>{karyawan.no_telp}</td>
              <td>
                <button onClick={() => onEdit(karyawan)}>Edit</button>
                <button onClick={() => onDelete(karyawan.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KaryawanList;
import React, { useState } from "react";
import axios from "axios";

const AddKaryawan = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nama: "",
    jabatan: "",
    email: "",
    no_telp: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/karyawans", formData);
      alert("Data berhasil ditambahkan!");
      onSuccess();
    } catch (error) {
      console.error("Gagal menambah data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Karyawan</h2>
      <input
        type="text"
        name="nama"
        placeholder="Nama"
        value={formData.nama}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jabatan"
        placeholder="Jabatan"
        value={formData.jabatan}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="no_telp"
        placeholder="No. Telp"
        value={formData.no_telp}
        onChange={handleChange}
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default AddKaryawan;
