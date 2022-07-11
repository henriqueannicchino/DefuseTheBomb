import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Clock from "../../components/clock/clock";
import FormTest from "../../components/formTest/formTest";

export default function PreTest() {
    
    const location =  useLocation();

    const [locationState, setLocationState] = useState({
        arithmeticOpts: [], algorithmismSize: ''
    });

    var startDate = new Date();

    useEffect(() => {
        if(location.state) {
            setLocationState(location.state);
        }
        
    }, [location]);

    
    
    return(
        <div style={{backgroundColor:"#EDEDEE"}}>
            <Clock startDate={startDate}/>

            <FormTest 
                arithmeticOpts={locationState.arithmeticOpts} 
                sizeOpts={locationState.arithmeticOpts.length} 
                algorithmismSize={locationState.algorithmismSize}
                preTest={true}
            />
        </div>
    );
};