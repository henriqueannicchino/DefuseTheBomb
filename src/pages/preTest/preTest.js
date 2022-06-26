import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import FormTest from "../../components/formTest/formTest";

export default function PreTest() {
    
    const location =  useLocation();

    const [locationState, setLocationState] = useState({
        arithmeticOpts: []
    });

    const [stopWatch, setStopwatch] = useState({
        hour: 0, minute: 0, second: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStopwatch({
                second: stopWatch.second === 59? 0: stopWatch.second+1,
                minute: stopWatch.second === 59 && stopWatch.minute < 59? stopWatch.minute+1: stopWatch.second < 59? stopWatch.minute : 0,
                hour: stopWatch.minute === 59? stopWatch.hour+1: stopWatch.hour
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [stopWatch]);

    useEffect(() => {
        if(location.state) {
            setLocationState(location.state);
        }

    }, [location]);

    
    
    return(
        <div>
            <h1>{stopWatch.hour}:{stopWatch.minute}:{stopWatch.second}</h1>
            {
                locationState.arithmeticOpts.length > 0 
                ? <p>{locationState.arithmeticOpts[0].name}</p>
                : <></>
            }
            <FormTest/>
        </div>
    );
};