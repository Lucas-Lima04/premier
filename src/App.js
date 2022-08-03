import logo from './background.png';
import vetores from './vetores.svg';
import Input from './components/input';
import HowItWorks from './components/howItWorks';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-header">
        <img src={vetores} alt="" />
      </div>
      <div className="home-image">
        <img src={logo} alt="" />
      </div>
      <div className="header">
        <h1>Premiersoft</h1>
        <h2>Startups</h2>

        <p>
        Acreditamos que o empreendedorismo é uma ferramenta para transformar vidas e colaborar com a sociedade. Com isso, a Premiersoft tomou a iniciativa de mentorear novos negócios no mercado, repassando a expertise e excelência em inovação.
        </p>
        <h3>INSCREVA-SE NO PROGRAMA!</h3>
      </div>
      <div className="form">
        <Input type={"text"} placeholder={"Nome completo"}/>
        <Input type={"text"} placeholder={"Nome completo"}/>
        <div style={{display: "flex"}}>
        <Input type={"text"} placeholder={"Nome completo"} className="half"/>
        <Input type={"text"} placeholder={"Nome completo"} className="half"/>
        </div>
        <Input type={"text"} placeholder={"Nome completo"}/>
        <Input type={"text"} placeholder={"Nome completo"}/>
      </div>
      <h3>FALE MAIS SOBRE VOCÊ</h3>
      <div className="form">
        <Input type={"textarea"} placeholder={"Nome completo"}/>
        <Input type={"textarea"} placeholder={"Nome completo"}/>
        <Input type={"textarea"} placeholder={"Nome completo"}/>
        <Input type={"textarea"} placeholder={"Nome completo"}/>
        <Input type={"textarea"} placeholder={"Nome completo"}/>
      </div>
      <h3>FALE SOBRE O SEU NEGÓCIO</h3>
      <div className="form">
        <Input type={"textarea"} placeholder={"Nome completo"} rows={"11"}/>
      </div>
      <div className="form" style={{textAlign: "center"}}>
        <button className="send">
          ENVIAR CADASTRO
        </button>
      </div>
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
