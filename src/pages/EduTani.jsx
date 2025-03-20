import React, { useState } from "react";
import "../styles/EduTani.css";

const EduTani = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const videos = [
    { id: "vAGRIVMXN30", title: "Media Tanam Super" },
    { id: "CO60aMQ16zQ", title: "Rahasia Panen Jahe Super Cepat" },
    { id: "RNT3bs4SRaQ", title: "Pertanian Holtikultura Sukses" },
    { id: "gmKDlAVUY6Q", title: "Metode Tanam Cabai Tanpa Fungisida" },
    { id: "7A6scQKB5rc", title: "Budidaya Kentang" },
    { id: "w5y3EAZ4C14", title: "Tips Budidaya Kacang Panjang" },
  ];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <h1>EduTani</h1>
        <p>Tempat untuk mendapatkan banyak video dan artikel edukatif seputar pertanian agar bisa #JadiPetaniSukses.</p>
      </header>
      <main className="main">
        <section className="search-section">
          <input
            type="text"
            placeholder="Cari video..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </section>
        <section className="section">
          <h2>Video Pertanian</h2>
          <div className={`video-container ${filteredVideos.length === 1 ? "single-video" : ""}`}>
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <div key={video.id} className="video">
                  <a href={`https://youtu.be/${video.id}`} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="video-thumbnail"
                    />
                  </a>
                  <p>{video.title}</p>
                </div>
              ))
            ) : (
              <p>Video tidak ditemukan.</p>
            )}
          </div>
        </section>
        <section className="section">
          <h2>Artikel</h2>
          <ul>
            <li><a href="https://jogjabenih.jogjaprov.go.id/read/e3440b5a0542fd587f7e070e08f128b70e93feb08549e48bdea9233f488ff5a73290">Strategi Kendalikan Hama Padi</a></li>
            <li><a href="https://jogjabenih.jogjaprov.go.id/read/6bc89ee91ecc9d492989df3dd829a6ffb6e5c790d1b9fbb7bdaaf3fcf1b572b03294">Budidaya Tanaman Rosella</a></li>
            <li><a href="https://jogjabenih.jogjaprov.go.id/read/699dae8fc7309b595e5d254b9dcf50f4371e3c8db2d7f4e645dd51f8032ada433297">Pengolahan Limbah Buah dan Sayur Jadi Pupuk Organik</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default EduTani;
