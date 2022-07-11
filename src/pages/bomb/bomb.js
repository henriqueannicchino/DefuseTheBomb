import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Timer from "../../components/timer/timer";
import './bomb.css';

import bomb from "../../assets/Gifs/bomb.gif";
import explosion from "../../assets/Images/explosion.png";

export default function Bomb() {

    const location =  useLocation();

    var endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + 47);

    const [locationState, setLocationState] = useState({
        arithmeticOpts: [], algorithmismSize: ''
    });

    const [bombExploded, setBombExploded] = useState(false);

    useEffect(() => {
        if(location.state) {
            setLocationState(location.state);
        }
        
    }, [location]);


    function arithmetic(operation, num1, num2){
        switch(operation) {
            case 'Soma':
                return num1+num2;
            case 'Subtração':
                return num1-num2;
            case 'Multiplicação':
                return num1*num2;
            case 'Divisão':
                return num1/num2;
            default:
                return -1;            
        }
    }

    function renderQuestion(index){
        
        let maxNum = 10, num1=1, num2=1;
        if(locationState.algorithmismSize!==NaN){
            maxNum = Math.pow(10,(parseInt(locationState.algorithmismSize)));

            num1 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
            num2 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        }
        let posInput = Math.floor(Math.random() * (4 - 1)) + 1;
        const arithmeticOpt = Math.floor(Math.random() * (locationState.arithmeticOpts.length - 0)) + 0;
        //console.log(arithmeticOpts[0]);
        if(locationState.arithmeticOpts[arithmeticOpt]==="Soma"){
            const num3 = arithmetic(locationState.arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                return(
                    <div key={index}>
                        <input type="number" required></input>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>+</span>
                        <input type="number" required></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required></input>
                    </div>
                )
            }
        }
        else if(locationState.arithmeticOpts[arithmeticOpt]==="Subtração"){
            if(num2 > num1) {
                let numTemp = num1;
                num1 = num2;
                num2 = numTemp;
            }
            const num3 = arithmetic(locationState.arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                return(
                    <div key={index}>
                        <input type="number" required></input>
                        <span>-</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>-</span>
                        <input type="number" required></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>-</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required></input>
                    </div>
                )
            }
        }
        if(locationState.arithmeticOpts[arithmeticOpt]==="Multiplicação"){
            const num3 = arithmetic(locationState.arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                return(
                    <div key={index}>
                        <input type="number" required></input>
                        <span>*</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>*</span>
                        <input type="number" required></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>*</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required></input>
                    </div>
                )
            }
        }


        if(locationState.arithmeticOpts[arithmeticOpt]==="Divisão"){
            if(num2 > num1) {
                let numTemp = num1;
                num1 = num2;
                num2 = numTemp;
            }
            if(num2==0)
                num2=1;
            const num3 = arithmetic(locationState.arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                return(
                    <div key={index}>
                        <input type="number" required></input>
                        <span>/</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>/</span>
                        <input type="number" required></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>/</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required></input>
                    </div>
                )
            }
       }  
    }

    function updateBomb(){
        localStorage.getItem('bombExploded') === "false" 
        ? setBombExploded(false)
        : setBombExploded(true)
    }

    return(
        <div className="mainDiv" style={{backgroundColor:"#EDEDEE"}}>
            <Timer endDate={endDate} updateBomb={updateBomb}/>

            <div className="container">
                {renderQuestion(0)}

                {
                    bombExploded === false
                    ? <img src={bomb} alt="bomb" />
                    : <img src={explosion} alt="explosion" />
                }
            </div>
        </div>
    )
}