import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "../popUp/popUp";

import './bombImg.css';

import bomb from "../../assets/Gifs/bomb.gif";
import explosion from "../../assets/Images/explosion.png";

export default function BombImg({arithmeticOpts, algorithmismSize}) {
    const history = useNavigate();
    
    const [bombExploded, setBombExploded] =  useState(false);
    const [gameOverPopUp, setGameOverPopUp] = useState(false);
    const [correctPopUp, setCorrectPopUp] = useState(false);

    const updateBomb = () => {
        if(localStorage.getItem('correctAnswer') !== "true"){
            if(localStorage.getItem('bombExploded') === "false"){
                setBombExploded(false);
            }
            else{
                setBombExploded(true);
                setGameOverPopUp(true);
            }
        }
        else {
            setCorrectPopUp(true);
        }
    }
    
    setInterval(updateBomb, 1000);

    function handlePopUp(){

        const bombNum = parseInt(localStorage.getItem('bombNum'));
        if(bombNum < 10){
            localStorage.setItem('bombNum', bombNum+1);
            window.location.reload();
        }
        else{
            history('/pos', {state:{arithmeticOpts:arithmeticOpts, algorithmismSize: algorithmismSize}});
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
                    <h3>Game Over</h3>
                    
                    <Link to="/pos" state={{arithmeticOpts:arithmeticOpts, algorithmismSize: algorithmismSize}}>
                        <button className="buttonOver" >Continuar</button>
                    </Link>
                </div>
            </Popup>

            <Popup trigger={correctPopUp} setTrigger={setCorrectPopUp} maxWidth="200px">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>Parabéns</h3>
                    
                    <button className="button" onClick={()=>handlePopUp()}>Continuar</button>
                </div>
            </Popup>
        </div>
    )
}