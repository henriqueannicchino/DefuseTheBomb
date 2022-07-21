import { useLocation } from "react-router-dom";
import { useState } from "react";
import Bomb_timer from "../../assets/Sound/Bomb_timer_sound.mp3";
import Bomb_explosion from "../../assets/Sound/Bomb_explosion_sound.mp3";
import Shao_Kahn_MK3 from "../../assets/Sound/Shao_Kahn_MK3.mp3";
import './timer.css';

export default function Timer({endDate}) {
    let beepSound = new Audio(Bomb_timer);
    let explosionSound = new Audio(Bomb_explosion);
    let ShaoKahnLaugh = new Audio(Shao_Kahn_MK3);
    
    const [currentTime, setCurrentTime] =  useState("0:0:0");
    const location =  useLocation();

    const updateTime = () => {
        
        if(localStorage.getItem('bombExploded') === "false" && localStorage.getItem('correctAnswer') === "false" && location.pathname==="/bomb"){
            const date2 = new Date();

            // get total seconds between the times
            let time = Math.abs(endDate - date2) / 1000;
            if((time>0 && endDate < date2) || localStorage.getItem('wrongAnswer') === "true"){
                console.log(time, endDate, localStorage.getItem('wrongAnswer'));
                time=0;
                localStorage.setItem('bombExploded', true);
                explosionSound.play();
                setTimeout(function() {
                    ShaoKahnLaugh.play();
                }, 500);
                clearInterval(interval);
            }
            else{
                localStorage.setItem('bombExploded', false);
            }

            // calculate (and subtract) whole days
            let days = Math.floor(time / 86400);
            time -= days * 86400;
            // calculate (and subtract) whole hours
            let hours = Math.floor(time / 3600) % 24;
            time -= hours * 3600;
            // calculate (and subtract) whole minutes
            let minutes = Math.floor(time / 60) % 60;
            time -= minutes * 60;
            // what's left is seconds
            let seconds = parseInt(time % 60);
            if((seconds < 8) && localStorage.getItem('playBeep') === "false" && localStorage.getItem('wrongAnswer') === "false"){
                localStorage.setItem('playBeep', true);            
                beepSound.play();
            }
            
            if(localStorage.getItem('bombExploded') === "true"){
                clearInterval(interval);
            }

            setCurrentTime(`${hours}:${minutes}:${seconds}`);
            localStorage.setItem('bombTime', `${hours}:${minutes}:${seconds}`);
        }
    }
    
    let interval = setInterval(updateTime, 1000);

    return (
        <div className="clock">
            <h1>{currentTime}</h1>
        </div>
    )
}