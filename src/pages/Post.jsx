import { useState, useEffect } from "react";
import axios from "axios";
import style from './Post.module.css';

export default function Post() {
  const [posts, setPosts] = useState([]);

  // Recupera i dati dal backend usando axios
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.data); 
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati", error); 
      });
  }, []); 

  const card = posts.map((post) => {
    return (
      <div className="col-12 col-sm-6 col-md-4" key={post.id}>
        <div className={`card ${style.cardCustom}`}>
          <img className={`card-img-top ${style.cardFotoCustom}`} src={post.immagine} alt="Card image" />
          <div className="card-body" id="card-tot">
            <h5 className="card-title">{post.titolo}</h5>
            <p className="card-text">{post.contenuto}</p>
            <div>
              {post.tags.map((tag, index) => (
                <a href="#" key={index} className="btn btn-primary me-2">{tag}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main>
      <div className="container">
        <div className="row">
          {card} 
        </div>
      </div>
    </main>
  );
}
