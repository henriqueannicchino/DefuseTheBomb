import React from "react";


export default function FormTest({arithmeticOpts, sizeOpts, algorithmismSize}) {
    
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

    function renderQuestions(){
        const maxNum = 10*(parseInt(algorithmismSize)-1);

        let posInput = Math.floor(Math.random() * (4 - 1)) + 1;
        const arithmeticOpt = Math.floor(Math.random() * (sizeOpts - 0)) + 0;
        const num1 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        const num2 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        //console.log(arithmeticOpts[0]);
        if(arithmeticOpts[arithmeticOpt]==="Soma"){
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                return(
                    <div>
                        <input></input>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                return(
                    <div>
                        <span>{num1}</span>
                        <span>+</span>
                        <input></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                return(
                    <div>
                        <span>{num1}</span>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input></input>
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
        <div>
            {renderQuestions()}
            <input></input>
            <span>+</span>
            <span>5</span>
            <span>=</span>
            <span>10</span>
        </div>
    );
};