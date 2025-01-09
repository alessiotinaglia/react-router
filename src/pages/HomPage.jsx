import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Benvenuto nella nostra app di ricette!</h2>
            <p className="lead">
              Scopri una varietà di ricette deliziose e facili da preparare.
            </p>
            <p>
              Esplora la lista delle ricette, aggiungi le tue preferite e condividi con gli amici!
            </p>
            <NavLink to="/posts" className="btn btn-primary">Inizia ora</NavLink>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500" alt="Food" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
