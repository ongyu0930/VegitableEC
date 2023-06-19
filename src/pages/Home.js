import React from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/vegtable2.jpg"

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> 青果物を使った商品 </h1>
          <p>FRESH VEGTABLES</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>  
    </>
  )
}

export default Home