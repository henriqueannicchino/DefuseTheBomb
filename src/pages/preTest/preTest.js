import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Clock from "../../components/clock/clock";
import FormTest from "../../components/formTest/formTest";

export default function PreTest() {
    
    const location =  useLocation();

    const [locationState, setLocationState] = useState({
        arithmeticOpts: []
    });

    const [stopWatch, setStopwatch] = useState({
        hour: 0, minute: 0, second: 0
    });

    var startDate = new Date();

    useEffect(() => {
        if(location.state) {
            setLocationState(location.state);
        }
        
    }, [location]);

    
    
    return(
        <div>
            <Clock startDate={startDate}/>
            {
                locationState.arithmeticOpts.length > 0 
                ? <p>{locationState.arithmeticOpts[0].name}</p>
                : <></>
            }
            <FormTest arithmeticOpts={["Soma"]} sizeOpts={1} algorithmismSize={1}/>
        </div>
    );
};