import { Component } from "react";
/* import MagAnimatic from "../components/HomeStrona/magAnimatic/magAnimatic"; */
import Koło from "../Images/Koło.png"
import "./Pages-Styles/biblioteka-altdorfu.styles.css";
import Title from "../Images/Title.png";
import {Link } from "react-router-dom";


class Home extends Component{
    render(){
        return(
            <div className="Strona">
                <div classname="Welcome">
                    <img src={Title} alt="Witajcie W Wielkiej Bibliotece Altdorfu" className="Title"/>
                    <h1 className="t">Nieoficialne kompedium zasad systemu Warhammer Fantasy Roleplay 4ed</h1>
                </div>
                <div className="M">
                    <div>
                        <span className="sideTop">Magia </span>
                        <h3 className="sideT">
                        Posiadanie zdolności magicznych sprawia, że w Imperium jest się jednocześnie obiektem strachu i podziwu. Dzisiaj posiadanie magicznych talentów nie jest nielegalne, ale uzdolnieni magicznie muszą odebrać wykształcenie w Kolegiach Magii, powstrzymać się od rzucania zaklęć lub mieć nadzieję, że nikt nie dostrzeże ich zakazanych praktyk.
                        </h3>
                        <Link to="/magia"><button className="button" ><span>Zaklęcia</span></button></Link>
                    </div>
                    <div className="Koło-background">
                        <img src={Koło} className="Koło" alt="Koło"/>
                    </div>
                </div>
                <div className="M">
                    <div>
                        <span className="sideTop">Profesje </span>
                        <h3 className="sideT">
                        Twoja Profesja to praca, którą wykonujesz, gdy nie szukasz przygód (albo, gdy przygody nie szukają ciebie). Opisuje twoje wyszkolenie, pozycję społeczną i perspektywy na przyszłość</h3>
                        <Link to="/profesje"><button className="button" ><span>Profesje</span></button></Link>
                    </div>
                    <div className="Koło-background">
                        <span className="sideTop">Talenty </span>
                        <h3 className="sideT">
                        Talentami postaci nazywamy wszelkiego rodzaju sztuczki, sekrety fachu jak i wyjątkowe zdolności bohatera, które nabył on w swoim życiu. Stanowią one podstawę każdej postaci i to właśnie one rozróżniają każdą postać od siebie.
                        </h3>
                        <Link to="/talenty"><button className="button" ><span>Talenty</span></button></Link>
                    
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Home;
