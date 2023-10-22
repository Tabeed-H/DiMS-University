import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css"; // You can create a CSS file to style this component

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <h1>Welcome to TrustChain</h1>
        </div>
        <nav>
          {/* <button>Register</button> */}
          <button>
            <Link to="/register" className="button">
              Register
            </Link>
          </button>
          <button>
            <Link to="/login" className="button">
              Login
            </Link>
          </button>
        </nav>
        <main>
          <section className="feature">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 3h4v6h-4zm0 8h4v4h-4zm1-9.21l-7.58 7.59L1.42 13l5.8-5.79 7.59 7.58L22 12l-10-10z" />
            </svg>
            <h2>Secure</h2>
            <p>Your data is protected by blockchain technology.</p>
          </section>
          <section className="feature">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C7.03 2 3 6.03 3 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16h-2v-2h2v2zm0-4h-2V7h2v7z" />
            </svg>
            <h2>Convenient</h2>
            <p>Register and access your data with ease.</p>
          </section>
          <section className="feature">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z" />
            </svg>
            <h2>Privacy Control</h2>
            <p>You decide who can access your data.</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 TrustChain</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
