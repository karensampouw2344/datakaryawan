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