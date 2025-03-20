import React, { useState } from "react";
import "../styles/tanimart.css";

function TaniMart() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) {
      alert("Harap isi semua kolom!");
      return;
    }
    setProducts([...products, product]);
    setProduct({ name: "", price: "", image: "" });
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="tanimart">
      <div className="tanimart-container">
        <h1>TaniMart</h1>
        <p>Jual hasil panenmu dengan keuntungan yang maksimal</p>

        {/* Formulir Tambah Produk */}
        <form className="tanimart-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nama Produk"
            value={product.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Harga (Rp)"
            value={product.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="image"
            placeholder="URL Gambar"
            value={product.image}
            onChange={handleChange}
          />
          <button type="submit">Tambah Produk</button>
        </form>

        {/* Daftar Produk */}
        <div className="tanimart-list">
          {products.length === 0 ? (
            <p>Belum ada produk.</p>
          ) : (
            products.map((item, index) => (
              <div key={index} className="tanimart-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{formatRupiah(item.price)}</p>
                <button className="tanimart-delete-btn" onClick={() => handleDelete(index)}>Hapus</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TaniMart;
