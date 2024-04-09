import { useEffect, useState } from "react";
import { ContainerBtns } from "../components/bottons-previous-next/ContainerBtns";
import { Hors } from "../components/hours/Hors";
import "../components/hours/Hors.css"
import "../components/bottons-previous-next/ContainerBtns.css"

export function Turnos (){
    const [selectedHour, setSelectedHour] = useState(localStorage.getItem("turno"));

    useEffect(() => {
        setSelectedHour(null)
    }, []);

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
        localStorage.setItem("turno", hour); 
      };

    
    return(
        <>
            <Hors onHourSelect={handleHourSelect}/>
            <ContainerBtns selectedHour={selectedHour}/>
        </>
    )
}