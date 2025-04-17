import React from 'react';
import './Cartao.css';
import logoCorinthians from '../assets/download.cassio.webp'; 


const Cartao = () => {
  return (
    <div className="cartao">
      <div className="topo">
        <img src={logoCorinthians} alt="Logo Corinthians" className="logo" />
        <h1>CÁSSIO RAMOS</h1>
        <p className="posicao">Goleiro - SC Corinthians Paulista</p>
      </div>

      <div className="foto-container">
        {/* <img src={cassioFoto} alt="Cássio Ramos" className="foto" /> */}
      </div>

      <div className="frase">
        <p>"Defender o Timão é minha vida."</p>
      </div>

      <div className="rodape">
        <p><strong>Email:</strong> cassio.ramos@goleiro.com</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/cassioramos12/" target="_blank" rel="noopener noreferrer">cassioramos12</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/cassioramos/" target="_blank" rel="noopener noreferrer">cassioramos</a></p>
        <p><strong>Site:</strong> <a href="https://www.cassioramos.com" target="_blank" rel="noopener noreferrer">www.cassioramos.com</a></p>
        <p><strong>Local:</strong> Parque São Jorge – SP</p>
      </div>
    </div>
  );
};

export default Cartao;
