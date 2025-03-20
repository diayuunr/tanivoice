import React from "react";
import { Link } from "react-router-dom";
import "../styles/Petani.css";

const features = [
  { name: "TaniHotline", path: "/hotline", icon: "../images/hot.png" },
  { name: "Cek Harga Pasar", path: "https://infoharga.bappebti.go.id/harga_komoditi_petani", icon: "../images/harga.png" },
  { name: "EduTani", path: "/edutani", icon: "../images/edu.png" },
  { name: "TaniMart", path: "/mart", icon: "../images/mart.png" },
  { name: "KonsulTani", path: "/konsultani", icon: "../images/konsul.png" },
  { name: "TaniGENGS", path: "/gengs", icon: "../images/geng.png" },
  { name: "Tracking Laba & Sisa Panen", path: "/tracking", icon: "../images/laba.png" },
  { name: "Leaderboard", path: "/misi", icon: "../images/ldr.png" },
];

function Petani() {
  return (
    <div className="dashboard-container">
      <h1 className="petani-title">
        Selamat Datang di <span>Jadi</span>Petani
      </h1>
      <p className="petani-desc">Sudah siap #JadiPetaniSukses dengan TaniVoice?</p>
      <div className="grid-container">
        {features.map((feature, index) => (
          feature.path.startsWith("http") ? (
            <a
              href={feature.path}
              key={index}
              className="feature-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={feature.icon} alt={feature.name} className="feature-icon" />
              <h3>{feature.name}</h3>
            </a>
          ) : (
            <Link to={feature.path} key={index} className="feature-card">
              <img src={feature.icon} alt={feature.name} className="feature-icon" />
              <h3>{feature.name}</h3>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}

export default Petani;
