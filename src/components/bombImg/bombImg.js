import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Bomb_defused from "../../assets/Sound/Bomb_has_been_defused.mp3";
import Popup from "../popUp/popUp";

import './bombImg.css';

import bomb from "../../assets/Gifs/bomb.gif";
import explosion from "../../assets/Images/explosion.png";

export default function BombImg({arithmeticOpts, algorithmismSize}) {
    let bombDefusedSound = new Audio(Bomb_defused);

    const history = useNavigate();
    
    const [bombExploded, setBombExploded] =  useState(false);
    const [gameOverPopUp, setGameOverPopUp] = useState(false);
    const [correctPopUp, setCorrectPopUp] = useState(false);

    const updateBomb = () => {
        if(localStorage.getItem('correctAnswer') === "false"){
            if(localStorage.getItem('bombExploded') === "false"){
                setBombExploded(false);
            }
            else{
                setBombExploded(true);
                setGameOverPopUp(true);
            }
        }
        else {
            if(localStorage.getItem('playDefuseBomb') === "false"){
                localStorage.setItem('playDefuseBomb', true);
                bombDefusedSound.play();
                clearInterval(interval);
            }
            setCorrectPopUp(true);
        }
    }
    
    let interval = setInterval(updateBomb, 1000);

    function handlePopUp(){

        const bombNum = parseInt(localStorage.getItem('bombNum'));
        if(bombNum < 10){
            localStorage.setItem('bombNum', bombNum+1);
            window.location.reload();
        }
        else{
            if(bombNum < 4){
                history('/');
            }
            else{
                history('/pos', {state:{arithmeticOpts:arithmeticOpts, algorithmismSize: algorithmismSize}});
            }
        }
        
    }

    return (
        <div>
            {
                bombExploded === false
                ? <img src={bomb} alt="bomb" className="img" />
                : <img src={explosion} alt="explosion" className="img" />
            }

            <Popup trigger={gameOverPopUp} setTrigger={setGameOverPopUp} maxWidth="200px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Voc?? n??o conseguiu desarmar a bomba</h3>
                    
                    {
                        parseInt(localStorage.getItem('bombNum')) < 4 
                        ?
                        <Link to="/">
                            <button className="buttonOver" >Continuar</button>
                        </Link>
                        :
                        <Link to="/pos" state={{arithmeticOpts:arithmeticOpts, algorithmismSize: algorithmismSize}}>
                            <button className="buttonOver" >Continuar</button>
                        </Link>
                    }
                </div>
            </Popup>

            <Popup trigger={correctPopUp} setTrigger={setCorrectPopUp} maxWidth="200px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>bomba desarmada com sucesso</h3>
                    
                    <button className="button" onClick={()=>handlePopUp()}>Continuar</button>
                </div>
            </Popup>
        </div>
    )
}