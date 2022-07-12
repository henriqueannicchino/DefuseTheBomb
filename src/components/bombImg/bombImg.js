import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../popUp/popUp";

import './bombImg.css';

import bomb from "../../assets/Gifs/bomb.gif";
import explosion from "../../assets/Images/explosion.png";

export default function BombImg({arithmeticOpts, algorithmismSize}) {
    
    const [bombExploded, setBombExploded] =  useState(false);
    const [gameOverPopUp, setGameOverPopUp] = useState(false);

    const updateBomb = () => {
        if(localStorage.getItem('bombExploded') === "false"){
            setBombExploded(false);
        }
        else{
            setBombExploded(true);
            setGameOverPopUp(true);
        }
    }
    
    setInterval(updateBomb, 1000);

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
        </div>
    )
}