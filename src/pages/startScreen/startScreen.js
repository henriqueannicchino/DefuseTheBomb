import React, {useState} from "react";
import { Link } from 'react-router-dom';

import Popup from "../../components/popUp/popUp";

import "./startScreen.css";

export default function StartScreen(){

    const [play, setPlay] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [brief, setBrief] = useState(false);
    const [arithmeticOpts, setArithmeticOpts] = useState([
        {name: "Soma", checked: false},
        {name: "Subtração", checked: false},
        {name: "Multiplicação", checked: false},
        {name: "Divisão", checked: false},
    ]);
    const [algorithmismSize, setAlgorithmismSize] = useState(1);

    const handleChangeOpt = (position) => {
        const updatedArithmeticOpts = arithmeticOpts.map((opt, index) =>
            index === position ? {name: opt.name, checked: !opt.checked} : {name: opt.name, checked: opt.checked}
        );

        setArithmeticOpts(updatedArithmeticOpts);
    }

    const handleAlgorithmismAmount = (e) => {
        setAlgorithmismSize(e.target.value);
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


    function openSecondPopup(){

        for(let index=0; index<arithmeticOpts.length; index++){
            if(arithmeticOpts[index].checked === true){
                setPlay(false);
                setPlay2(true);
                setBrief(false);
                break;
            }
        }

    }


    function openBriefPopup(){
        setPlay(false);
        setPlay2(false);
        setBrief(true);
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
                    
                    <button onClick={() => openSecondPopup()}>Continuar</button>
                    
                </div>
            </Popup>

            <Popup trigger={play2} setTrigger={setPlay2} maxWidth="200px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Escolha a quantidade máxima de algorismo nos números</h3>
                    
                    <div className="radioBox">
                        <label>
                            <input type="radio" value="1" onChange={handleAlgorithmismAmount} checked={algorithmismSize==="1" ? true : false} /> 
                            1 algorismo
                        </label>
                        <label>
                            <input type="radio" value="2" onChange={handleAlgorithmismAmount} checked={algorithmismSize==="2" ? true : false} /> 
                            2 algorismos
                        </label>
                        <label>
                            <input type="radio" value="3" onChange={handleAlgorithmismAmount} checked={algorithmismSize==="3" ? true : false} /> 
                            3 algorismos
                        </label>
                    </div>
                    
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
                    <Link to="/pre" state={{arithmeticOpts:arithmeticOpts, algorithmismSize: algorithmismSize}}>
                        <button style={{width: "100%"}}>Continuar</button>
                    </Link>
                </div>
            </Popup>
        </div>
    );
};