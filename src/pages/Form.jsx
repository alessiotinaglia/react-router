import { useState } from "react";
import axios from "axios";

export default function Form() { 
  const [newPost, setNewPost] = useState({
    titolo: '',
    contenuto: '',
    immagine: '',
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedPost = { ...newPost };
    updatedPost[name] = value;
    setNewPost(updatedPost);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postToSend = {
      titolo: newPost.titolo,
      contenuto: newPost.contenuto,
      immagine: newPost.immagine,
      tags: newPost.tags.split(',')
    };

    axios.post("http://localhost:3000/posts", postToSend)
      .then((res) => {
        // Reset del form
        setNewPost({
          titolo: '',
          contenuto: '',
          immagine: '',
          tags: ''
        });
      })
      .catch((error) => {
        console.error("Errore durante il salvataggio del post", error);
      });
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titolo"
          value={newPost.titolo}
          onChange={handleChange}
          placeholder="Titolo"
          className="form-control"
          required
        />
        <textarea
          name="contenuto"
          value={newPost.contenuto}
          onChange={handleChange}
          placeholder="Contenuto"
          className="form-control mt-2"
          required
        />
        <input
          type="text"
          name="immagine"
          value={newPost.immagine}
          onChange={handleChange}
          placeholder="URL Immagine"
          className="form-control mt-2"
          required
        />
        <input
          type="text"
          name="tags"
          value={newPost.tags}
          onChange={handleChange}
          placeholder="Tags"
          className="form-control mt-2"
        />
        
        <button type="submit" className="btn btn-primary mt-3">Aggiungi Articolo</button>
        <div>
          <h3>dateci nuove ricette e spunti cosi che tutti le possano provare!!</h3>
        </div>
      </form>
    </section>

  );
}
