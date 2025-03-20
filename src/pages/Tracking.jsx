import React, { useState } from "react";
import "../styles/Tracking.css";

const initialData = [
  { id: 1, name: "Beras Organik", harvested: 100, sold: 80, price: 30000 },
  { id: 2, name: "Beras Merah", harvested: 50, sold: 30, price: 40000 },
  { id: 3, name: "Cabe Rawit", harvested: 200, sold: 150, price: 50000 },
];

function LabaTracking() {
  const [data, setData] = useState(initialData);
  const [newProduct, setNewProduct] = useState({
    name: "",
    harvested: "",
    sold: "",
    price: "",
  });

  const totalLaba = data.reduce((acc, item) => acc + item.sold * item.price, 0);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.harvested || !newProduct.sold || !newProduct.price) {
      alert("Semua field harus diisi!");
      return;
    }

    const newEntry = {
      id: data.length + 1,
      name: newProduct.name,
      harvested: parseInt(newProduct.harvested),
      sold: parseInt(newProduct.sold),
      price: parseInt(newProduct.price),
    };

    setData([...data, newEntry]);
    setNewProduct({ name: "", harvested: "", sold: "", price: "" });
  };

  return (
    <div className="laba-container">
      <h1>Tracking Laba & Hasil Panen</h1>

      {/* Table Data */}
      <table className="laba-table">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Hasil Panen</th>
            <th>Terjual</th>
            <th>Sisa</th>
            <th>Harga Jual (Rp)</th>
            <th>Laba (Rp)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.harvested} kg</td>
              <td>{item.sold} kg</td>
              <td>{item.harvested - item.sold} kg</td>
              <td>{item.price.toLocaleString()}</td>
              <td>{(item.sold * item.price).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Laba */}
      <div className="total-laba">
        <h2>Total Laba: Rp {totalLaba.toLocaleString()}</h2>
      </div>

      {/* Form Tambah Data */}
      <div className="form-container">
        <h2>Tambah Data Panen</h2>
        <input
          type="text"
          name="name"
          placeholder="Nama Produk"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="harvested"
          placeholder="Hasil Panen (kg)"
          value={newProduct.harvested}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="sold"
          placeholder="Terjual (kg)"
          value={newProduct.sold}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Harga Jual (Rp)"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button onClick={addProduct}>Tambah</button>
      </div>
    </div>
  );
}

export default LabaTracking;
