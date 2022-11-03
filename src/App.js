import { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import google from "./assets/google.jpg";
import code from "./assets/code.jpg";
import youtube from "./assets/youtube.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kinda" element={<Redirect />} />
        <Route path="/google" element={<Google />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </div>
  );
}

//home Page
const Home = () => {
  return (
    <div className="main">
      <h3>Flux</h3>
      <div className="container">
        <div className="card">
          <img src={code} alt="" />
          <p>
            <Link to="/kinda" target="_blank" rel="noreferrer" className="link">
              Go to KindaCode
            </Link>
          </p>
        </div>

        <div className="card">
          <img src={google} alt="" />
          <p>
            <Link
              to="/google"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Go to Google
            </Link>
          </p>
        </div>

        <div className="card">
          <img src={youtube} alt="" />
          <p>
            <Link
              to="/youtube"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Go to youtube
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

//Redirect Page
const Redirect = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://www.kindacode.com");
    }, 3000);
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

const Google = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://www.google.com");
    }, 3000);
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

const Youtube = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https://www.youtube.com");
    }, 3000);
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
