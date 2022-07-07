import React from "react";
import './formTest.css';

export default function FormTest({arithmeticOpts, sizeOpts, algorithmismSize}) {

    //temporario
    const amountQuestions = [0,1,2,3,4,5,6,7,8,9];

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
        const maxNum = 10*(parseInt(algorithmismSize)-1);

        let posInput = Math.floor(Math.random() * (4 - 1)) + 1;
        const arithmeticOpt = Math.floor(Math.random() * (sizeOpts - 0)) + 0;
        let num1 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        let num2 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        //console.log(arithmeticOpts[0]);
        if(arithmeticOpts[arithmeticOpt]==="Soma"){
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
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
        else if(arithmeticOpts[arithmeticOpt]==="Subtração"){
            if(num2 > num1) {
                let numTemp = num1;
                num1 = num2;
                num2 = numTemp;
            }
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
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
        if(arithmeticOpts[arithmeticOpt]==="Divisão" && num2===0){
            num2=1;

       }

        return(
            <p>hhh</p>
        )
    }

    return(
        <div className="mainDiv">
            <div className="container">
                <form className="form">
                    {amountQuestions.map(renderQuestions)}

                    <button className="button" type="submit">Continuar</button>
                </form>
            </div>
        </div>
    );
};