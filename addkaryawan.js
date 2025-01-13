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


