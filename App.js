import React from "react";
import logo from './img/111-removebg-preview.png'
import volvoimg from './img/2022_24.avif';
import benzlogo from './img/Mercedes-Logo.svg.png';
import golflogo from './img/Volkswagen-Logo-2000-2012.png'
import fiatlogo from './img/Fiat_2007_Punto-logo-F856D851E3-seeklogo.com.png';
import volvologo from './img/volvo-logo-BBD81B8EA6-seeklogo.com.png';
import rentalbanner from './img/pngegg.png';
import volvocard from './img/pngegg (1).png'
import CountUp from 'react-countup';
import washBanner from './img/ceramic_coating_hand_wash.webp';
import washDetails from './img/Carwash_InterniAuto_Sedili_04_1920.webp';
import washDetails1 from './img/Carwash_Motori_02_1920.webp';
import washDetails2 from './img/Carwash_InterniAuto_VigilidelFuoco_03_1920.webp';
import washDetails3 from './img/pexels-tima-miroshnichenko-6872147.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <CarLogos />
      <Services />
    </div>
  );
}
function Nav() {
  return (<>
    <div className="nav-contact">
      <div className="email-number">
        <div className="email">
          <i class="fa-solid fa-envelope" id="email-icon"></i>
          <p>HidriRental@gmail.com</p>
        </div>
        <div className="number">
          <i class="fa-solid fa-phone" id="phone-icon"></i>
          <p>+355691111111</p>
        </div>
      </div>
      <div className="socials">
        <a href=""><i class="fa-brands fa-facebook" id="fb"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
    <div className="navbar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="navbar-links">
        <Link to='/'>Home</Link>
        <Link to='/mjetet'>Mjetet</Link>
        <Link to='rregullat'>Rregullat</Link>
        <Link to='kontakto'>Kontakto</Link>
        
      </div>
    </div>
  </>
  );
}
function Main() {
  return (
    <>
      <div className="main">
        <div className="welcome">
          <p>-Welcome To HIDRI RENTAL</p>
          <h1>ZGJIDH MAKINEN <br />QE PERSHTATET<br /> ME REHATINE TUAJ !</h1>
          {/* <button className="cars">Zgjidh mjetin e preferuar</button> */}
          <button className="cars">Zgjidhe Tani...</button>
        </div>
        <div className="main-img">
          <img src={volvoimg}></img>
        </div>
      </div>
    </>
  );
}
function CarLogos() {
  return (<>
    <div className="car-logos">
      <img src={benzlogo} style={{ width: 90, height: 90 }}></img>
      <img src={volvologo} style={{ width: 90, height: 90 }}></img>
      <img src={fiatlogo} style={{ width: 90, height: 90 }}></img>
      <img src={golflogo} style={{ width: 150, height: 90 }}></img>
    </div>
    <div className="location">
      <i class="fa-solid fa-location-dot"></i>
      <a href=""><p>Adresa: Librazhd/Albania Rruga e Anxhesise ngjitur me Karburant Kastrati</p></a>
    </div>
  </>);
}
function Services() {
  return (<>
    <div className="sherbimet">
      <h1 className="services-header">SHERBIMET QE OFROJME</h1>
      <div className="Rental">
        <h1>CAR RENTAL</h1>
        <img src={rentalbanner} style={{ width: 700 }}></img>
        <p>Zgjidh makinen tende te preferuar me cmimet me konkuruese ne treg:</p>
        <div className="rental-cnt">
          <div className="rental-cars">
            <div className="cars1">
              <img src={volvocard} style={{ width: 240 }}></img>
              <div className="infos">
                <h3>Volkswagen Passat Jetta</h3>
                <p><i class="fa-solid fa-gear" style={{ color: "black" }}></i> Kamje: Automatik</p>
                <p><i class="fa-solid fa-fire" style={{ color: "black" }}></i> 2.0 Nafte</p>
                <p><i class="fa-solid fa-dollar-sign" style={{ color: "black" }}></i> 5000 Leke/Dita</p>

              </div>
            </div>
            <div className="cars1">
              <img src={volvocard} style={{ width: 240 }}></img>
              <div className="infos">
                <h3>Volkswagen Passat Jetta</h3>
                <p><i class="fa-solid fa-gear" style={{ color: "black" }}></i> Kamje: Automatik</p>
                <p> <i class="fa-solid fa-fire" style={{ color: "black" }}></i> 2.0 Diesel</p>
                <p><i class="fa-solid fa-dollar-sign" style={{ color: "black" }}></i> 5000 Leke/Dita</p>

              </div>

            </div>
            <div className="cars1">
              <img src={volvocard} style={{ width: 240 }}></img>
              <div className="infos">
                <h3>Volkswagen Passat Jetta</h3>
                <p><i class="fa-solid fa-gear" style={{ color: "black" }}></i> Kamje: Automatik</p>
                <p><i class="fa-solid fa-fire" style={{ color: 'black' }}></i> 2.0 Diesel</p>
                <p><i class="fa-solid fa-dollar-sign" style={{ color: "black" }}></i> 5000 Leke/Dita</p>
              </div>
            </div>

          </div>
          <div className="more">
            <a id="more" href="">Shiko me shume </a>
            <i class="fa-solid fa-arrow-right" style={{ color: "black", fontSize: 15 }}></i>
          </div>

        </div>

      </div>
      <div className="car-wash">
        <div className="wash-info">
          <div className="wash-img">
            <img src={washBanner} width={600}></img>
          </div>
          <div className="wash-text">
            <h1>CAR WASH</h1>
            <p>-Larje Profesionale me mjetet me te fundit te teknologjise <br></br>se pastrimit te automjeteve.
              Me mbi 10 vite eksperienc ne <br></br>kete fushe, ne mundemi ta bejme makinen tuaj <br></br> te shkelqeje si diten e pare! </p>
            <label for='list'>-Pse duhet te na zgjidhni ne?</label>
            <ul id="list" className="list">
              <li>Ofrojme sherbimet me <b>Cilesore</b></li>
              <li>Staf <b>Profesionist</b></li>
              <li>Paisjet me <b>Koherente</b></li>
              <li>Korrektesi deri ne <b>Detaj</b>.</li>
            </ul>
          </div>

        </div>
        <div className="car-wash-details">
          <div className="wash-text1">
          <h1>Sherbimet qe Ofrojme</h1>
          <p>- Larje e detajuar ne ambjentet jasht dhe brenda te mjetit.</p>
          <p>- Pastrim dhe larje te tapicerise dhe sendiljeve me avull.</p>
          <p>- Larje e detajur dhe e kujdesshme e motorrit.</p>
          <p>- Larje dhe pastrim i pjeses se poshtme te mjetit.</p>
          </div>
          <div className="wash-img1">
            <img src={washDetails2} id="img1"></img>
            <img src={washDetails1} id="img2"></img>
            <img src={washDetails3} id="img3"></img>
            <img src={washDetails} id="img4"></img>


          </div>
          
        </div>
        
      </div>
      <Counter/>
    </div>
  </>);
}
function Counter(){
  return(
    <>
      <div className="counters">
        <div className="count1">
          <i class="fa-solid fa-user" id="user"></i>
          <div style={{marginTop:'13px', fontSize:30}}>+<CountUp delay={4} end={5000} duration={7}>0</CountUp></div>
          <p style={{fontSize:'13px'}}>Kliente te kenaqur</p>
        </div>
        <div className="count1">
          <i class="fa-solid fa-user" id="user"></i>
          <div style={{marginTop:'13px',fontSize:30}}>+<CountUp end={100} delay={4} duration={7}>0</CountUp></div>
          <p style={{fontSize:'13px'}}>Vizitore cdo dite</p>
        </div>
        <div className="count1">
          <i class="fa-solid fa-gear" id="user"></i>
          <div style={{marginTop:'13px',fontSize:30}}>+<CountUp end={20000} delay={4} duration={10}>0</CountUp></div>
          <p style={{fontSize:'13px'}}>Sherbime te kryera</p>
        </div>

      </div>
    </>
  );
}
export default App;
