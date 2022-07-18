import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Timer from "../../components/timer/timer";
import BombImg from "../../components/bombImg/bombImg";
import RenderQuestion from "../../components/renderQuestion/renderQuestion";
import { useNavigate } from "react-router-dom";
import './bomb.css';


export default function Bomb() {

    const location =  useLocation();
    const history = useNavigate();

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
        }
        
    }, [location]);

    function checkValue(){
        const magicNum = localStorage.getItem('magicNum');
        const userAnswer = localStorage.getItem('userAnswer');

        if(magicNum === userAnswer) {
            const bombNum = parseInt(localStorage.getItem('bombNum'));
            if(bombNum < 10){
                localStorage.setItem('bombNum', bombNum+1);
                window.location.reload();
            }
            else{
                history('/pos', {state:{arithmeticOpts: locationState.arithmeticOpts, algorithmismSize: locationState.algorithmismSize}});
            }
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