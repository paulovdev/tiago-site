import React from 'react'
import { PiComputerTower } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { GrConfigure } from "react-icons/gr";
import { MdOutlineVisibilityOff } from "react-icons/md";

const App = () => {
  return (
    <>
      <div className="wpp"><img src="/wpp-icon.png" alt="" /></div>
      <header>
        <div className="logo"></div>

        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#video">Video</a></li>
        </ul>

      </header>

      <section id="home">
        <span className='disponible'><div className="circle"></div>DISPONÍVEL</span>
        <h1>Crossfire AL CHEAT</h1>
        <p></p>
        <div className="box-text-home">

          <div className="left-content">
            <img src="/background.jpg" alt="" />
          </div>

          <div className="right-content">
            <p>Plataforma:
              <br />
              <span> PC</span>
            </p>
            <p>Compatibilidade:
              <br />
              <span>
                Windows 7, 8, 8.1, 10 e 11
              </span>
            </p>
            <span className='compatibility'>(Compatível apenas com arquitetura 64 bits.)</span>
            <h2 className='price'>R$100.00<span>/30 dias</span></h2>
            <button>Comprar</button>
          </div>

        </div>
      </section>

      <section id="features">
        <div className="cards-features">

          <div className="card">
            <MdOutlineVisibilityOff size={42} color="#0aa0d3" />
            <h1>Indetectável.</h1>
            <p>Saiba onde estão todas as chaves e colecionáveis, além das cabras e do monstro</p>
          </div>

          <div className="card">
            <BsTelephone size={42} color="#0aa0d3" />
            <h1> Funcional em servidores Matchmaking.    </h1>
            <p>Veja a localização de todas as chaves e itens colecionáveis, bem como das cabras e do monstro</p>
          </div>

          <div className="card">
            <GrConfigure size={42} color="#0aa0d3" />
            <h1> Você configura do seu jeito. </h1>
            <p>Encontre todas as chaves e itens colecionáveis, além das cabras e do monstro</p>
          </div>

          <div className="card">
            <PiComputerTower size={42} color="#0aa0d3" />
            <h1>Funcional em computadores antigos. </h1>
            <p>Encontre todas as chaves e itens colecionáveis, além das cabras e do monstro</p>
          </div>

          <div className="card">
            <PiComputerTower size={42} color="#0aa0d3" />
            <h1>Funcional em computadores antigos. </h1>
            <p>Encontre todas as chaves e itens colecionáveis, além das cabras e do monstro</p>
          </div>

        </div>
      </section>

      <section id='video'>
        <p>Possui as principais funções do mercado, como: Wallhack, Aimbot, Radar, Controle de recuo e muitos outros.
          Totalmente configurável a seu gosto.</p>
        <div className="iframes">
          <iframe src="https://www.youtube.com/embed/lHWRxClhYfw" title="RL Hackers CROSSFIRE HACKER 04 10 2016" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/VZ_1B8Fnueo" title="CF BR - HACKER PARA CROSSFIRE BR 23/03/2024 #atualizado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      <section id="more-features">
        <ul>
          <h2>Visual</h2>
          <li>ESP Overlay</li>
          <li>Glow Effect</li>
          <li>Chams Highlights</li>
          <li>World Enhancements</li>
        </ul>

        <ul>
          <h2>Aimbot</h2>
          <li>Auto-Target</li>
          <li>Precision Glow</li>
          <li>Aim Assist</li>
          <li>Environment Detection</li>
        </ul>

        <ul>
          <h2>Misc</h2>
          <li>Speed Hack</li>
          <li>Invisibility Mode</li>
          <li>Chams Visuals</li>
          <li>World Hack</li>
        </ul>

        <ul>
          <h2>Tools</h2>
          <li>Radar Hack</li>
          <li>Glow Visuals</li>
          <li>Chams Config</li>
          <li>Map Hacks</li>
        </ul>


      </section>

      <footer>
        <p>COPYRIGHT © BeatsHax Brasil</p>
      </footer>
    </>
  )
}

export default App