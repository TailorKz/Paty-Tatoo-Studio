import { useState } from 'react'
import './style.css'
import Logo from './assets/Star 1.png'
import Patyfoto from './assets/paty foto.png'
import PatyPictureMain from './assets/picture2.png'
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";


function App() {
  

  return (
    <>
    
      <nav className='navbar'>
        <div className='navbar--content'>
        <a href="">Página inicial</a>
        <a href="">Sobre mim</a>
        <img src={Logo}/> 
        <a href="">Contato</a>
        <a href="">Localização</a>
      </div>
      </nav>
      <section className='container'>
        <div className='container--main'>
        <div className='container--text'>
        <h1>SUA PELE,</h1>
        <h1>SUA ARTE,</h1>
        <h1>SUA <u>IDENTIDADE</u></h1>
        <div className='icons'>
        <a href="https://wa.me/554991759767?text=" target="_blank">
          <button><FaWhatsapp />&nbsp;Enviar mensagem</button>
          </a>
          <a id='insta' target="_blank" href=""><SiInstagram /></a>
          </div>

        </div>
        <div className='container--picture'>
          <img src={Patyfoto}/> 
        </div>
        </div>
      </section>
      <div className="vazia"></div>
      <div className='main'>
      <div className='section1'>
      <section className='section'>
        <div className='section--main'>
        <img src={PatyPictureMain}/>
        </div>
        <div className='section--title'>
        <h1>SOBRE MIM</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       </div>
      
      </section>
      </div>
      </div>
    </>
  )
}

export default App
