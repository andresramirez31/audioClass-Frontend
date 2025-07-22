import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Navigation*/}

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
                <Link to="/audios">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#portfolio"
                  >
                    Clasificacion de Audios
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead*/}
      <header className="masthead bg-primary text-white text-center">
        <div className="container-fluid d-flex align-items-center flex-column">
          {/* Masthead Heading*/}
          <h1 className="masthead-heading text-uppercase mb-0">AudioClass</h1>
          {/* Icon Divider*/}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Masthead Subheading*/}
          <p className="masthead-subheading font-weight-light mb-0">
            Software para clasificación de audios naturales y artificiales
          </p>
        </div>
      </header>
      {/* Portfolio Section*/}
      <section className="page-section portfolio" id="portfolio">
        <div className="container-fluid">
          {/* Portfolio Section Heading*/}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Secciones
          </h2>
          <div className="d-flex justify-content-center my-4">
            <Link to="/audios">
              <button className="btn btn-primary mb-0">
                Clasificación de audios
              </button>
            </Link>
          </div>
          {/* Icon Divider*/}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Proyecto de:</h4>
              <p className="lead mb-0">
                Universidad
                <br />
                de Antioquia
              </p>
            </div>
            {/* Footer Social Icons*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Asesor</h4>
              <p className="lead mb-0">Juan Arias</p>
            </div>
            {/* Footer About Text*/}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Integrantes</h4>
              <p className="lead mb-0">
                Gaia Ramirez
                <br />
                Andres Ramirez
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
