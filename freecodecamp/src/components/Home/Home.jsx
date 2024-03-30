import React from 'react';
import './Home.css';
import google from '../../assets/google.png';
import microsoft from '../../assets/microsoft.png';
import spotify from '../../assets/spotify.png';
import amazon from '../../assets/amazon.png'; 
import apple from '../../assets/apple.png';  

function Home() {
  return (
    <div className="home">
      <div className="code">
        <h1 className="code-title">Learn to code - for free</h1>
        <br></br>
        <h1 className="code-text">Build projects. </h1>
        <br></br>
        <h1 className="code-text">Earn certifications.</h1>
        <br></br>
      </div>
      <div className="stats">
        <p className="intro">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten</p>
        <p className="intro">jobs at tech companies including:</p>
        <div className="company-logos">
          <img src={apple} alt="Apple" /> <p>Apple</p>
          <img src={google} alt="Google" /> <p>Google</p>
          <img src={microsoft} alt="Microsoft" /><p>Microsoft</p>
          <img src={spotify} alt="Spotify" /><p>Spotify</p>
          <img src={amazon} alt="Amazon" /><p>Amazon</p>
        </div>
        <br></br>
        <a href="/loginpage" target="_blank" rel="noopener noreferrer"><button className="code-button">Get started (it's free)</button></a>
      </div>
    </div>
  );
}

export default Home;
