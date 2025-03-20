import '../styles/Card.css'
import { Link } from "react-router-dom";

function Card({ image, title, text, link }) {
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <Link to={link} className="btn">Start Now</Link>
          </div>
        </div>
      </>
    )
  }

export default Card


