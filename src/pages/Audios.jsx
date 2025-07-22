import { useState } from "react";
import { Link } from "react-router-dom";

const Audios = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audio", file);

    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setPrediction(data.prediction);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            AudioClass
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link to="/">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#portfolio"
                  >
                    Inicio
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <h1 className="masthead-heading text-uppercase mb-0">AudioClass</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
        </div>
      </header>
      <section className="page-section" id="audio-classifier">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">
            Clasificador de Audio
          </h2>
          <p className="text-center lead mb-4">Ingrese el audio acá</p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    accept=".flac"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                  Predecir
                </button>
              </form>
              {prediction && (
                <div className="alert alert-info mt-4 text-center">
                  <h4 className="alert-heading">Predicción:</h4>
                  <p>{prediction}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <p className="lead mb-0">
                Solo soportamos audios .flac por el momento
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Audios;
