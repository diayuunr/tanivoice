import React, { useState } from "react";
import "../styles/Pembeli.css";

const products = [
  { id: 1, name: "Beras Organik", price: "Rp 30.000", image: "../images/beras.png" },
  { id: 2, name: "Beras Merah", price: "Rp 40.000", image: "../images/berasm.png" },
  { id: 3, name: "Cabe Rawit 500gr", price: "Rp 40.000", image: "../images/cabe.png" },
  { id: 4, name: "Cabe Keriting 500gr", price: "Rp 20.000", image: "../images/cabek.png" },
];

function TaniMart() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const submitReview = () => {
    if (rating === 0 || reviewText.trim() === "") {
      alert("Harap isi rating dan ulasan!");
      return;
    }

    const newReview = { rating, text: reviewText };
    setReviews([...reviews, newReview]);
    setRating(0);
    setReviewText("");
  };

  return (
    <div className="tanimart-container">
      <h1>Selamat datang di JadiPembeli</h1>
      <p>Temukan berbagai macam produk pertanian dengan harga terbaik dan termurah langsung dari sumbernya.</p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Lihat Detail</button>
            <button>Beli Sekarang</button>
          </div>
        ))}
      </div>

      {/* Section Ulasan */}
      <div className="review-section">
        <h2>Beri Ulasan</h2>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "active" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          className="review-input"
          placeholder="Tulis ulasanmu..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        <button onClick={submitReview} className="submit-btn">Kirim</button>

        <div className="review-list">
          <h3>Ulasan Pengguna</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-stars">{`⭐`.repeat(review.rating)}</div>
                <p>{review.text}</p>
              </div>
            ))
          ) : (
            <p className="no-review">Belum ada ulasan.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaniMart;
