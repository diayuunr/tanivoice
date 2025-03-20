
import '../styles/Home.css'
import Card from '../components/Card'

function Home() {
  return (
    <>
    <div className='wrapper'>
      <section id="home" className='home-section'>
            <img src="/images/TaniVoice.png" alt="TaniVoice" className='gambar'/>
            <div className="kolom">
                <p className="judul">TaniVoice</p>
                <p className="tagline">Sahabat Tanimu</p>
                <p className="desc">TaniVoice hadir sebagai solusi digital yang bertujuan untuk meningkatkan kesejahteraan petani dan memperluas akses pasar. Melalui aplikasi ini, petani dapat menjual hasil panennya langsung kepada pembeli dengan harga yang lebih menguntungkan. Selain itu, pembeli juga dapat melihat harga produk secara transparan dan bertransaksi langsung dengan petani.</p>
            </div>
      </section>
    </div>
    <section id="jadisiapa" className='card-container'>
          <Card 
            image="/images/tani.png" 
            title="JadiPetani" 
            text="Temukan harga jualmu, sukseskan panenmu."
            link="/jadipetani"
          />
          <Card 
            image="/images/beli.png" 
            title="JadiPembeli" 
            text="Belanja hemat, sehat, harga termurah."
            link="/jadipembeli"
          />
    </section>
    <section id="contact" className='contact-section'>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@tanivoice.com">support@tanivoice.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">+628123456789</a></p>
        <p>Website: <a href="https://www.tanivoice.com" target="_blank" rel="noopener noreferrer">www.tanivoice.com</a></p>
        <p>Jalan Sains, Kecamatan Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta, 55281</p>
      </section>
    
    </>
  )
}

export default Home
