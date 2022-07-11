import { useState } from "react";
import './timer.css';

export default function Timer({endDate, updateBomb}) {
    
    const [currentTime, setCurrentTime] =  useState("0:0:0");
    //console.log(startDate);

    const updateTime = () => {
        const date2 = new Date();

        // get total seconds between the times
        let time = Math.abs(endDate - date2) / 1000;
        if(time>0 && endDate < date2){
            time=0;
            localStorage.setItem('bombExploded', true);
            updateBomb();
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

        setCurrentTime(`${hours}:${minutes}:${seconds}`);
        localStorage.setItem('bombTime', `${hours}:${minutes}:${seconds}`);
    }
    
    setInterval(updateTime, 1000);

    return (
        <div className="clock">
            <h1>{currentTime}</h1>
        </div>
    )
}