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
        <Input type={"text"} placeholder={"Data de nascimento"}/>
        <div className={"double-input"}>
        <Input type={"text"} placeholder={"Celular"} className="half"/>
        <Input type={"text"} placeholder={"Telefone"} className="half"/>
        </div>
        <Input type={"text"} placeholder={"E-mail"}/>
        <Input type={"text"} placeholder={"LinkedIn"}/>
      </div>
      <h3>FALE MAIS SOBRE VOCÊ</h3>
      <div className="form">
        <Input type={"textarea"} placeholder={"Qual sua escolaridade? Como foi e o que você mais gostou?"}/>
        <Input type={"textarea"} placeholder={" Possui curso(s) complementar(es)? Nos conte o porquê fez!"}/>
        <Input type={"textarea"} placeholder={"Qual seu talento natural? Aquilo que você é bom naturalmente, nem parece que precisas aprender e já sabes fazer!"}/>
        <Input type={"textarea"} placeholder={"O que te motivou a chegar até aqui e vir falar com a gente?"}/>
        <Input type={"textarea"} placeholder={"Você conhece alguém da Premiersoft ou foi indicado por alguém? Se sim, pode nos dizer quem?"}/>
      </div>
      <h3>FALE SOBRE O SEU NEGÓCIO</h3>
      <div className="form">
        <Input type={"textarea"} placeholder={"Nos conte em no máximo 1000 caracteres sua ideia de negócio."} rows={"11"}/>
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
