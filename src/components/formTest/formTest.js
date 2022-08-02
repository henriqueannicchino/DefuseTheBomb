import React from "react";
import { useNavigate } from "react-router-dom";

import './formTest.css';

export default function FormTest({arithmeticOpts, sizeOpts, algorithmismSize, preTest}) {

    const amountQuestions = [0,1,2,3,4,5,6,7,8,9];
    const history = useNavigate();
    var numOp = [];
    var testResult = [];

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

    function renderQuestions(Data, index){
        
        let maxNum = 10, num1=1, num2=1;

        if(!isNaN(algorithmismSize)){
            maxNum = Math.pow(10,(parseInt(algorithmismSize)));

            num1 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
            num2 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        }
        let posInput = Math.floor(Math.random() * (4 - 1)) + 1;
        const arithmeticOpt = Math.floor(Math.random() * (sizeOpts - 0)) + 0;
        if(arithmeticOpts[arithmeticOpt]==="Soma"){
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                numOp.push({
                    "num1": num1,
                    "num2": num2,
                    "num3": num3,
                    "op": "+",
                    "posInput": posInput,
                })
                return(
                    <div key={index}>
                        <input type="number" id={"op"+index} required></input>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                numOp.push({
                    "num1": num1,
                    "num2": num2,
                    "num3": num3,
                    "op": "+",
                    "posInput": posInput,
                })
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>+</span>
                        <input type="number" id={"op"+index} required></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                numOp.push({
                    "num1": num1,
                    "num2": num2,
                    "num3": num3,
                    "op": "+",
                    "posInput": posInput,
                })
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" id={"op"+index} required></input>
                    </div>
                )
            }
        }
        else if(arithmeticOpts[arithmeticOpt]==="Subtração"){
            if(num2 > num1) {
                let numTemp = num1;
                num1 = num2;
                num2 = numTemp;
            }
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                numOp.push({
                    "num1": num1,
                    "num2": num2,
                    "num3": num3,
                    "op": "-",
                    "posInput": posInput,
                })
                return(
                    <div key={index}>
                        <input type="number" id={"op"+index} required></input>
                        <span>-</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                numOp.push({
                    "num1": num1,
                    "num2": num2,
                    "num3": num3,
                    "op": "-",
                    "posInput": posInput,
                })
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>-</span>
                        <input type="number" id={"op"+index} required></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                numOp.push({
                    "num1": num1,
                    "num2": num2,
                    "num3": num3,
                    "op": "-",
                    "posInput": posInput,
                })
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>-</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" id={"op"+index} required></input>
                    </div>
                )
            }
        }
        if(arithmeticOpts[arithmeticOpt]==="Multiplicação"){
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
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

        if(arithmeticOpts[arithmeticOpt]==="Divisão"){
            if(num2 > num1) {
                let numTemp = num1;
                num1 = num2;
                num2 = numTemp;
            }
            if(num2===0)
                num2=1;
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
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

    function handleSubmit(e){
        e.preventDefault();
        numOp.forEach((element, index) => {
            const userAnswer = document.getElementById("op"+index).value;
            testResult.push({
                "num1": element.num1,
                "num2": element.num2,
                "num3": element.num3,
                "op": element.op,
                "posInput": element.posInput,
                "userAnswer": userAnswer
            })   
        });

        if(preTest===true){
            localStorage.setItem("preResult", JSON.stringify(testResult));
            history('/bomb', {state:{arithmeticOpts: arithmeticOpts, algorithmismSize: algorithmismSize}});
        }
        else{
            localStorage.setItem("posResult", JSON.stringify(testResult));
            history('/results', {state:{arithmeticOpts: arithmeticOpts, algorithmismSize: algorithmismSize}});
        }
    }

    return(
        <div className="mainDiv">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    {amountQuestions.map(renderQuestions)}
                    

                    <button className="button" type="submit">{preTest===true?"Continuar":"Ir para resultados"}</button>
                </form>
            </div>
        </div>
    );
};