import './style.css';
import israel from './israel.png';
import ps from './premiersoft.svg'
import ciblu from './ciblu.png';
import cocriar from './cocriar.svg';
import gene from './gene.png';
import scangels from './scangels.png';
import vector1 from './vector1.svg';
import vector2 from './vector2.svg';

function Footer() {
    return (
        <div className="footer">
            <img src={ps} alt="Premiersoft" className="ps"/>

            <h2>APOIADORES</h2>
            <div className="apoiadores">
                <img src={cocriar} alt="cocriar" style={{width: "20%"}}/>
                <img src={ciblu} alt="" style={{width: "22%"}}/>
                <img src={scangels} alt="" style={{width: "18%"}}/>
                <img src={israel} alt="" style={{width: "10%"}}/>
                <img src={gene} alt="" style={{width: "10%"}}/>
            </div>

            <p>Todos os direitor reservados a Premiersoft 2022  |  Veja as nossa políticas de privacidade</p>
            <img src={vector2} className="bottom1" alt="" />
            <img src={vector1} className="bottom2" alt="" />
        </div>
    )
}

export default Footer;