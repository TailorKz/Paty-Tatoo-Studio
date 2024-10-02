import { useState } from 'react';
import './style.css';
import Logo from './assets/Star 1.png';
import Studio from './assets/dogpng.png'
import Patyfoto from './assets/paty foto.png';
import PatyPictureMain from './assets/picture2.png';
import Coruja from './assets/coruja.png';
import { FaWhatsapp } from "react-icons/fa";
import { tattoo } from './tattoos';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


function App() {

  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu móvel

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const tattooArray = Object.values(tattoo);
  const visibleImagesCount = 3;

  // Função para ir para a próxima imagem
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tattooArray.length);
  };

  // Função para ir para a imagem anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tattooArray.length - 1 : prevIndex - 1
    );
  };

  // Função para pegar as 3 imagens visíveis (a partir de currentIndex)
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleImagesCount; i++) {
      visibleImages.push(tattooArray[(currentIndex + i) % tattooArray.length]);
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

    function MyMap() {
    return (
      <MapContainer 
  center={[-26.98587539505993, -53.532983784997626]} 
  zoom={19} 
  style={{ height: '100%', width: '100%' }} // Ocupará 100% do contêiner pai
>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-26.98587539505993, -53.532983784997626]}>
          <Popup>
            Localização Específica
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
 

  return (
    <>
       <nav className="navbar">
       <div className="logo-container">
       <img src={Studio} alt="Logo" />
  </div>
        <div className="navbar--content">
          <a href="#">Página inicial</a>
          <a href="#">Sobre mim</a>
          <img src={Studio} alt="Logo" />
          <a href="#">Contato</a>
          <a href="#">Localização</a>
        </div>
        {/* Ícone do menu hambúrguer para mobile */}
        <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Menu móvel */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#" onClick={() => setMenuOpen(false)}>Página inicial</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Sobre mim</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Contato</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Localização</a>
          </div>
        )}
      </nav>
      <section className="container">
        <div className="container--main">
          <div className="container--text">
            <h1>SUA PELE,</h1>
            <h1>SUA ARTE,</h1>
            <h1>SUA <u>IDENTIDADE</u></h1>
            <div className="icons">
              <a href="https://wa.me/554991759767?text=" target="_blank">
                <button>
                  <FaWhatsapp />
                  &nbsp;Enviar mensagem
                </button>
              </a>
              <a id="insta" target="_blank" href="#"></a>
            </div>
          </div>
          <div className="container--picture">
            <img src={Patyfoto} alt="Foto principal" />
          </div>
        </div>
      </section>
      <div className="vazia"></div>
      <div className="main">
        <div className="section1">
          <section className="section">
            <div className="section--main">
              <img src={PatyPictureMain} alt="Sobre mim" />
            </div>
            <div className="section--title">
              <h1>SOBRE MIM</h1>
              <p>
              Olá! Meu nome é Patrícia, tenho 19 anos e sou tatuadora aprendiz. Minha jornada no mundo da arte começou há muitos anos, sempre buscando novas formas de me expressar. Decidi migrar para o universo das tatuagens, onde posso trazer à vida minhas criações originais. Acredito que cada tatuagem revela seu melhor lado e transforma de forma positiva sua autoestima. Estou sempre em busca de evolução e novas inspirações para converter sua ideia em realidade no seu corpo!
              </p>
            </div>
          </section>
        </div>
        <div className="works">
          <div className="works--text">
            <h2>Trabalhos realizados</h2>
          </div>
        </div>
        {/* Carrossel */}
        <div className="carrossel">
          <button onClick={handlePrev}><FaArrowLeft /></button>
          <div className="carrossel--container">
            {visibleImages.map((image, index) => (
              <div key={index} className="carrossel--item">
                <img src={image} alt={`Tatuagem ${index + 1}`} />
              </div>
            ))}
          </div>
          <button onClick={handleNext}><FaArrowRight /></button>
        </div>
        <section className="personalize">
            
            <div className="section--title">
              <h1>Tattoos personalizadas!</h1>
              <p>
              Se você está em busca de uma tatuagem exclusiva, estou aqui para ajudar! Sinta-se à vontade para me chamar e discutir suas ideias. Juntos, podemos criar um design que seja o reflexo de sua personalidade e história. Estou disponível para fazer um orçamento personalizado, garantindo que sua experiência seja especial. Vamos transformar sua visão em uma arte que você terá unicamente!
              </p>
            </div>
            <div className="personalize--image">
              <img src={Coruja} alt="Tatuagem de coruja" />
            </div>
          </section>
          <div className='locate'>
          <h2 className='locate--title'>Localização do Studio</h2>
          </div>
          <div className='locate--content'>
    <div className='locate--text'>
      <h3><FiMapPin /> R. Simões, n° 68 - Centro, Iporã do Oeste - SC, 89899-000</h3>
      <p>Localização do Studio</p>
      <h3><BsFillTelephoneFill /> (49) 991640480</h3>
      <p> Número do Studio</p>
      <h3><BsFillTelephoneFill /> (49) 991759767</h3>
      <p>Número - Patrícia</p>
    </div>
    <div className='locate--map'>
      <MyMap />
    </div>
  </div>
  
      </div><footer>
  <div className='final--icons'>
    <a href="https://wa.me/554991759767?text="><FaSquareWhatsapp /></a>
    <a href="https://www.instagram.com/paty_tattooer/"><FaSquareInstagram /></a>
  </div>
  </footer>
    </>
  );
}

export default App;
