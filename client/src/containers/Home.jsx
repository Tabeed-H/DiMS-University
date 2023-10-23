import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css"; // You can create a CSS file to style this component

const Home = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-container-logo">TrustChain</div>
        <div className="header-container-buttons">
          <button className="buttons-dash">
            <Link to="/dash" className="button">
              Go to DashBoard
            </Link>
          </button>
        </div>
      </div>
      <div className="home-container">
        <div className="left">
          <div className="home-container-hero-text">
            Your Path<br></br> to <br></br>Digital Trust
          </div>
          <div className="home-container-hero-sub">
            Unlocking Digital Trust Through Blockchain Innovation
          </div>
          <div className="home-container-buttons">
            <button className="buttons-reg">
              <Link to="/register" className="button">
                Register
              </Link>
            </button>
          </div>
        </div>
        <div className="right">
          <main>
            <section className="feature">
              <h2>Secure</h2>
              <p>Your data is protected by blockchain technology.</p>
            </section>
            <section className="feature">
              <h2>Convenient</h2>
              <p>Register and access your data with ease.</p>
            </section>
            <section className="feature">
              <h2>Privacy Control</h2>
              <p>You decide who can access your data.</p>
            </section>
          </main>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 TrustChain</p>
      </footer>
    </>
  );
};

export default Home;
