import React, {useState} from "react";
import { Link } from 'react-router-dom';

import Popup from "../../components/popUp/popUp";

import "./startScreen.css";

export default function StartScreen(){
    localStorage.removeItem("wrongAnswer");
    localStorage.removeItem("bombTime");
    localStorage.removeItem("userAnswer");
    localStorage.removeItem("correctAnswer");
    localStorage.removeItem("bombExploded");
    localStorage.removeItem("preTime");
    localStorage.removeItem("magicNum");
    localStorage.removeItem("bombNum");
    localStorage.removeItem("posTime");
    localStorage.removeItem("playBeep");
    localStorage.removeItem("playDefuseBomb");
    localStorage.removeItem("preResult");
    localStorage.removeItem("posResult");
    


    const [play, setPlay] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [brief, setBrief] = useState(false);
    const [howToPlay, setHowToPlay] = useState(false);
    const [arithmeticOpts, setArithmeticOpts] = useState([
        {name: "Soma", checked: false},
        {name: "Subtração", checked: false},
        {name: "Multiplicação", checked: false},
        {name: "Divisão", checked: false},
    ]);
    const [algorithmismSize, setAlgorithmismSize] = useState(1);

    let [arithmeticOptsArray, setArithmeticOptsArray] = useState([]);

    if(localStorage.getItem('refresh') === "true"){
        localStorage.removeItem("refresh");
        window.location.reload();
    }

    const handleChangeOpt = (position) => {

        let arithmeticOptsArrayTemp = arithmeticOptsArray;

        if(arithmeticOptsArrayTemp.indexOf(arithmeticOpts[position].name) === -1){
            arithmeticOptsArrayTemp.push(arithmeticOpts[position].name);
        }
        else{
            let arithmeticIndex = arithmeticOptsArrayTemp.findIndex(arithmeticOpt => arithmeticOpt === arithmeticOpts[position].name);
            arithmeticOptsArrayTemp.splice(arithmeticIndex, 1);
        }

        const updatedArithmeticOpts = arithmeticOpts.map((opt, index) =>
            index === position ? {name: opt.name, checked: !opt.checked} : {name: opt.name, checked: opt.checked}
        );

        setArithmeticOpts(updatedArithmeticOpts);
        setArithmeticOptsArray(arithmeticOptsArrayTemp);
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
        <div className="mainDiv" style={{background: "linear-gradient(rgba(136,17,7,0.5), rgba(195,18,0,255), black)"}}>
            
            <div className="menu">
                <h1>Calculator Bomb</h1>
                <div className="buttons">
                    <button onClick={() => setPlay(true)}>
                        JOGAR
                    </button>
                    <button onClick={() => setHowToPlay(true)}>
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
                    <h3>Escolha a quantidade máxima de algarismo nos números</h3>
                    
                    <div className="radioBox">
                        <label>
                            <input type="radio" value="1" onChange={handleAlgorithmismAmount} checked={algorithmismSize==="1" ? true : false} /> 
                            1 algarismo
                        </label>
                        <label>
                            <input type="radio" value="2" onChange={handleAlgorithmismAmount} checked={algorithmismSize==="2" ? true : false} /> 
                            2 algarismos
                        </label>
                        <label>
                            <input type="radio" value="3" onChange={handleAlgorithmismAmount} checked={algorithmismSize==="3" ? true : false} /> 
                            3 algarismos
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
                    <Link to="/pre" state={{arithmeticOpts:arithmeticOptsArray, algorithmismSize: algorithmismSize}}>
                        <button style={{width: "100%"}}>Continuar</button>
                    </Link>
                </div>
            </Popup>

            <Popup trigger={howToPlay} setTrigger={setHowToPlay} maxWidth="250px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span><strong>Passo 1:</strong> Clique no botão jogar.</span>
                    <span><strong>Passo 2:</strong> Marque as Operações que deseja praticar e em seguida clique em Continuar.</span>
                    <span><strong>Passo 3:</strong> Selecione a quantide máxima de digítos que deseja.</span>
                    <span><strong>Passo 4:</strong> Tente resolver as operações do aquecimento antes da bomba para se preparar, não há limite de tempo nessa fase</span>
                    <span>
                        <strong>Passo 5:</strong> 
                        Insira o valor que esteja faltando na operação da bomba para continuar, 
                        serão exibidas um total de dez bombas cada uma com um tempo limite de 30 segundos,
                        as operações serão baseadas nas repostas dadas nos passos 2 e 3.
                    </span>
                    <span>
                        <strong>Passo 6:</strong> 
                        Caso tenha conseguido desarmar pelo menos quatro bombas você será direcionado para uma nova lista de operações, 
                        para se manter preparado e rápido para situações futuras em que se necessite de um raciocínio lógico mais acelerado, 
                        não há limite de tempo nessa fase
                    </span>
                </div>
            </Popup>
        </div>
    );
};