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
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function App() {
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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyACgRLwKhrZWAPRDi_pmynTajijGa0XwWA"
  })

  return (
    <>
      <nav className="navbar">
        <div className="navbar--content">
          <a href="#">Página inicial</a>
          <a href="#">Sobre mim</a>
          <img src={Studio} alt="Logo" />
          <a href="#">Contato</a>
          <a href="#">Localização</a>
        </div>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting.
              </p>
            </div>
            <div className="personalize--image">
              <img src={Coruja} alt="Tatuagem de coruja" />
            </div>
          </section>
          <div className='locate'>
          <h2 className='locate--text'>Localização do Studio</h2>
          </div>
          <div className='locate--map'>
            {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '60%', height: '60%'}}
        center={{
          lat: -26.98592321338495,
          lng: -53.532928103323634
        }}
        zoom={15} 
      ></GoogleMap>
  ) : <></>}
          </div>
      </div>
    </>
  );
}

export default App;
