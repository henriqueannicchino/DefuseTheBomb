import React from "react";

export default function RenderQuestion({arithmeticOpts, algorithmismSize}){

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

    function renderTheQuestion(index){
        let maxNum = 10, num1=1, num2=1;
        if(!isNaN(algorithmismSize)){
            maxNum = Math.pow(10,(parseInt(algorithmismSize)));
    
            num1 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
            num2 = Math.floor(Math.random() * ( maxNum!==0?maxNum:10 - 0)) + 0;
        }
        let posInput = Math.floor(Math.random() * (4 - 1)) + 1;
        const arithmeticOpt = Math.floor(Math.random() * (arithmeticOpts.length - 0)) + 0;
        
        if(arithmeticOpts[arithmeticOpt]==="Soma"){
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                localStorage.setItem('magicNum', num1);
                return(
                    <div key={index}>
                        <input type="number" required onChange={handleChange}></input>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                localStorage.setItem('magicNum', num2);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>+</span>
                        <input type="number" required onChange={handleChange}></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                localStorage.setItem('magicNum', num3);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>+</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required onChange={handleChange}></input>
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
                localStorage.setItem('magicNum', num1);
                return(
                    <div key={index}>
                        <input type="number" required onChange={handleChange}></input>
                        <span>-</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                localStorage.setItem('magicNum', num2);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>-</span>
                        <input type="number" required onChange={handleChange}></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                localStorage.setItem('magicNum', num3);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>-</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required onChange={handleChange}></input>
                    </div>
                )
            }
        }
        if(arithmeticOpts[arithmeticOpt]==="Multiplicação"){
            if(num1===0)
                num1++;
            if(num2===0)
                num2++;
            const num3 = arithmetic(arithmeticOpts[arithmeticOpt], num1, num2);
            if(posInput===0){
                localStorage.setItem('magicNum', num1);
                return(
                    <div key={index}>
                        <input type="number" required onChange={handleChange}></input>
                        <span>*</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                localStorage.setItem('magicNum', num2);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>*</span>
                        <input type="number" required onChange={handleChange}></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                localStorage.setItem('magicNum', num3);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>*</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required onChange={handleChange}></input>
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
                localStorage.setItem('magicNum', num1);
                return(
                    <div key={index}>
                        <input type="number" required onChange={handleChange}></input>
                        <span>/</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else if(posInput===1){
                localStorage.setItem('magicNum', num2);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>/</span>
                        <input type="number" required onChange={handleChange}></input>
                        <span>=</span>
                        <span>{num3}</span>
                    </div>
                )
            }
            else {
                localStorage.setItem('magicNum', num3);
                return(
                    <div key={index}>
                        <span>{num1}</span>
                        <span>/</span>
                        <span>{num2}</span>
                        <span>=</span>
                        <input type="number" required onChange={handleChange}></input>
                    </div>
                )
            }
       }  
    }

    function handleChange(e){
        localStorage.setItem('userAnswer', e.target.value);
    }

    return(
        <div>
            {renderTheQuestion(0)}
        </div>
    )

}