import React from "react";
import "../styles/Leaderboard.css";

const leaderboardData = [
  { rank: 1, name: "Mamat Kasuari", score: 1200 },
  { rank: 2, name: "Sukro Bandung", score: 1100 },
  { rank: 3, name: "Ahmad Rizky", score: 1050 },
  { rank: 4, name: "Dewi Trinul", score: 980 },
  { rank: 5, name: "Joko Jogja", score: 950 },
];

function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <p>Para member #JadiPetani dengan POIN TERTINGGI minggu ini</p>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Peringkat</th>
            <th>Nama</th>
            <th>Skor</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
