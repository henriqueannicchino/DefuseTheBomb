import React, {useState} from "react";
import { Link } from 'react-router-dom';

import Popup from "../../components/popUp/popUp";

import "./startScreen.css";

export default function StartScreen(){

    const [play, setPlay] = useState(false);
    const [brief, setBrief] = useState(false);
    const [arithmeticOpts, setArithmeticOpts] = useState([
        {name: "Soma", checked: false},
        {name: "Subtração", checked: false},
        {name: "Multiplicação", checked: false},
        {name: "Divisão", checked: false},
    ]);

    const handleChangeOpt = (position) => {
        const updatedArithmeticOpts = arithmeticOpts.map((opt, index) =>
            index === position ? {name: opt.name, checked: !opt.checked} : {name: opt.name, checked: opt.checked}
        );

        setArithmeticOpts(updatedArithmeticOpts);

    }

    function renderArithmeticOpts(opt, index){

        return(
            <label key={index}>
                <input 
                    type="checkbox"
                    checked={opt.checked}
                    onChange={() => handleChangeOpt(index)}
                />
                {opt.name}
            </label>
        );
    };

    function openBriefPopup(){

        for(let index=0; index<arithmeticOpts.length; index++){
            if(arithmeticOpts[index].checked === true){
                setPlay(false);
                setBrief(true);
                break;
            }
        }

    }

    return(
        <div className="mainDiv">
            <div className="menu">
                <h1>Desarme a Bomba</h1>
                <div className="buttons">
                    <button onClick={() => setPlay(true)}>
                        JOGAR
                    </button>
                    <button>
                        COMO JOGAR
                    </button>
                </div>
            </div>

            <Popup trigger={play} setTrigger={setPlay} maxWidth="200px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Escolha as Operações</h3>
                    {
                        arithmeticOpts.map(renderArithmeticOpts)
                    }
                    
                    <button onClick={() => openBriefPopup()}>Continuar</button>
                    
                </div>
            </Popup>

            <Popup trigger={brief} setTrigger={setBrief} maxWidth="250px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <p>
                        Um Terrorista implantou uma bomba em uma mochila e deixou em lugar público, 
                        algumas pesssoas suspeitaram da mochila e ligaram para o esquadrão anti bombas,
                        agora é seu trabalho como um agente do esquadrão anti bombas tentar desarmar a
                        bomba antes que o tempo acabe.
                    </p>
                    <Link to="/pre" state={{arithmeticOpts:arithmeticOpts}}>
                        <button style={{width: "100%"}}>Continuar</button>
                    </Link>
                </div>
            </Popup>
        </div>
    );
};