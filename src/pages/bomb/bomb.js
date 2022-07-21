import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Timer from "../../components/timer/timer";
import BombImg from "../../components/bombImg/bombImg";
import RenderQuestion from "../../components/renderQuestion/renderQuestion";
import './bomb.css';


export default function Bomb() {

    const location =  useLocation();

    var endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + 32);

    const [locationState, setLocationState] = useState({
        arithmeticOpts: [], algorithmismSize: ''
    });

    useEffect(() => {
        if(location.state) {
            setLocationState(location.state);
            localStorage.setItem('wrongAnswer', false);
            localStorage.setItem('correctAnswer', false);
            localStorage.setItem('bombExploded', false);
            localStorage.setItem('playDefuseBomb', false);
            localStorage.setItem('playBeep', false);
        }
        
    }, [location]);

    function checkValue(){
        const magicNum = localStorage.getItem('magicNum');
        const userAnswer = localStorage.getItem('userAnswer');

        if(magicNum === userAnswer) {
            localStorage.setItem('correctAnswer', true);
        }
        else {
            localStorage.setItem('wrongAnswer', true);
        } 
    }

    return(
        <div className="mainDiv" style={{backgroundColor:"#EDEDEE"}}>
            <Timer endDate={endDate}/>

            <div className="container">
                <RenderQuestion arithmeticOpts={locationState.arithmeticOpts} algorithmismSize={locationState.algorithmismSize} />
                
                <BombImg arithmeticOpts={locationState.arithmeticOpts} algorithmismSize={locationState.algorithmismSize} />

                <button className="button" onClick={()=>checkValue()}>Testar valor</button>
            </div>
        </div>
    )
} 