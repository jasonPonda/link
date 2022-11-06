import { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents-demandes" element={<Incidents />} />
        <Route path="/solutions-faq" element={<Solutions />} />
        <Route path="/financement" element={<Financement />} />
        <Route path="/fiche-de-caisse" element={<Caisse />} />
        <Route path="/demande-salle-zoom" element={<Zoom />} />
        <Route path="/soins-pastoraux" element={<Pastoraux />} />
        <Route path="/podcasts-icc-bruxelles" element={<Podcasts />} />
        <Route path="/radio-direct-Impact" element={<Radio />} />
        <Route path="/plateform-mariages" element={<Mariage />} />
        <Route
          path="/coordination-mariages"
          element={<CoordinationMariages />}
        />
        <Route path="/it-academy" element={<ItAcademy />} />
        <Route path="/mcp" element={<Mcp />} />
        <Route path="/candidature-devenir-star" element={<Star />} />
        <Route path="/compte-bancaire" element={<CompteBancaire />} />
        <Route path="/spm" element={<Spm />} />
      </Routes>
    </div>
  );
}

//home Page
const Home = () => {
  return (
    <div className="main">
      <h3>Bienvenue sur la page Intranet</h3>
      <h4>
        Un point de contact unique où l'on peut retrouver toutes les différentes
        informations utiles et indispensables
      </h4>
      <div className="container">
        <div className="card">
          <h6>Incidents</h6>
          <p>
            <Link
              to="/incidents-demandes"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Incidents & demandes
            </Link>
          </p>
        </div>

        <div className="card">
          <h6>Solutions et divers questions</h6>
          <p>
            <Link
              to="/solutions-faq"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              solutions et Faq
            </Link>
          </p>
        </div>

        <div className="card">
          <h6>Demande de financement</h6>
          <p>
            <Link
              to="/financement"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Financement
            </Link>
          </p>
        </div>

        <div className="card">
          <h6>Caisse</h6>
          <p>
            <Link
              to="/fiche-de-caisse"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Fiche de caisse
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Zoom</h6>
          <p>
            <Link
              to="/demande-salle-zoom"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Demande de salle Zoom
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Rdv Pastoraux</h6>
          <p>
            <Link
              to="/soins-pastoraux"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Soins pastoraux
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Podcasts ICC Bruxelles</h6>
          <p>
            <Link
              to="/podcasts-icc-bruxelles"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Podcasts
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Radio Direct Impact</h6>
          <p>
            <Link
              to="/radio-direct-Impact"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Radio
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Plateforme de Mariage</h6>
          <p>
            <Link
              to="/plateform-mariages"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Plateforme Mariages
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Mariages</h6>
          <p>
            <Link
              to="/coordination-mariages"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Procédure et coordination
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>IT Academy</h6>
          <p>
            <Link
              to="/it-academy"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              IT Academy
            </Link>
          </p>
        </div>
        <div className="card">
          {/* <img src={youtube} alt="" /> */}
          <h6>Demande de réalisation des travaux </h6>

          <p>
            <Link to="/mcp" target="_blank" rel="noreferrer" className="link">
              MCP
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Candidature pour devenir STAR</h6>
          <p>
            <Link
              to="/candidature-devenir-star"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Devenir S.T.A.R
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>Compte bancaire ICC Bruxelles</h6>
          <p>
            <Link
              to="/compte-bancaire"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Compte
            </Link>
          </p>
        </div>
        <div className="card">
          <h6>SPM (Service Prêt Matériel)</h6>
          <p>
            <Link to="/spm" target="_blank" rel="noreferrer" className="link">
              SPM
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

//Redirect Page
const Incidents = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactsupport.freshservice.com/support/tickets/new"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Solutions = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactsupport.freshservice.com/support/solutions"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Financement = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://submit.jotformeu.com/210106326474346");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Caisse = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://submit.jotformeu.com/211714773212348");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Zoom = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://docs.google.com/forms/d/e/1FAIpQLScAvrQGqIV5tioo5wH6BZti0eNPmohgkXYJuX-FCuZjX0kZfA/viewform"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Pastoraux = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactcentrechretien.elvanto.eu/form/7deee540-c3d1-4ef6-a858-6aafda9dbb87/"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Podcasts = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactsupport.freshservice.com/support/solutions/folders/5000094705"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Radio = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://radiodirectimpact.com");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Mariage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://mariages.impactcentrechretien.be/");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const CoordinationMariages = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactsupport.freshservice.com/a/solutions/articles/5000042105"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const ItAcademy = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://www.iccitacademy.com/");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Mcp = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://com.impactcentrechretien.be");
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Star = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactcentrechretien.elvanto.eu/form/17e553e3-d8f0-4258-abec-ebc9f72539fc"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const CompteBancaire = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://impactsupport.freshservice.com/a/solutions/articles/5000053678"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

const Spm = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace(
        "https://docs.google.com/forms/d/e/1FAIpQLSdh8rhVKp6oF1MGrV0tpmeb3NDzrM_PRe_QpkEgD_AcVMGvEg/viewform"
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="container">
      <h3>Redirect...</h3>
    </div>
  );
};

export default App;
