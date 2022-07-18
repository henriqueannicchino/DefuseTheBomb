import { useState } from "react";
import { useLocation } from "react-router-dom";
import './clock.css';

export default function Clock({startDate}) {
    
    const [currentTime, setCurrentTime] =  useState("0:0:0");
    const location =  useLocation();

    const updateTime = () => {
        const date2 = new Date();
        
        // get total seconds between the times
        let time = Math.abs(date2 - startDate) / 1000;
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
        if(location.pathname==="/pre")
            localStorage.setItem('preTime', `${hours}:${minutes}:${seconds}`);
        else
            localStorage.setItem('posTime', `${hours}:${minutes}:${seconds}`);
    }
    
    if(location.pathname==="/pre" || location.pathname==="/pos")
        setInterval(updateTime, 1000);

    return (
        <div className="clock">
            <h1>{currentTime}</h1>
        </div>
    )
}