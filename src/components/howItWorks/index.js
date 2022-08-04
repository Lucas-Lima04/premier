import './style.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

function HowItWorks() {
    return (
        <div className="how-it-works">
            <h3>COMO FUNCIONA O PROGRAMA?</h3>
            <div className="steps">
                <div className="row">
                    <div className="step">
                        <h1 style={{marginLeft: "-2rem"}}>1</h1>
                        <img src={img1} alt="" style={{marginLeft: "1rem"}}/>
                        <h2>PROCESSO SELETIVO</h2>
                        <p>Você está aqui! Vamos avaliar suas respostas para entender seu perfil!</p>
                    </div>
                    
                    <div className="step">
                        <h1 style={{marginLeft: "-3rem"}}>2</h1>
                        <img src={img2} alt="" style={{marginLeft: "1.5rem"}}/>
                        <h2>MENTORING</h2>
                        <p>Definindo sua Proposta de Valor! Você será mentorado por profissionais da área de tech e negócios!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="step">
                        <h1 style={{marginLeft: "-1.4rem"}}>3</h1>
                        <img src={img3} alt="" style={{marginLeft: "4rem"}}/>
                        <h2>DISCOVERY</h2>
                        <p>Processo de Double Diamond: Entendendo as oportunidades, desenhando soluções e definindo qual desenvolver para a documentação do seu protótipo!</p>
                    </div>

                    <div className="step">
                        <h1 style={{marginLeft: "-2.5rem"}}>4</h1>
                        <img src={img4} alt="" style={{marginLeft: "2rem"}}/>
                        <h2>SPRINTS</h2>
                        <p>2 SPRINTS da Fábrica de Softwares da Premiersoft para transformar a documentação em um produto pronto para MVP!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;