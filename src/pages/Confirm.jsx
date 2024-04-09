import NavBar from "../components/navbar/Navbar";
import {useProgress } from "../context/ProgressContext";
import { CONFIRM } from "../config-router/paths.js";
import { useEffect, useState } from "react";
import { ConfirmSelect } from "../components/confirm/ConfirmSelect";
import { ContainerBtns } from "../components/bottons-previous-next/ContainerBtns.jsx";

export function Confirm(){
    const { progress, setProgress } = useProgress();
    const [selecteHour, setSelectHour] = useState(null);
    const [date, setDate] = useState(null);
    const [selectedItemsLocal, setSelectedItemsLocal] = useState([]);

    
    useEffect(() => {
      setDate(localStorage.getItem('fecha'))
      setSelectHour(localStorage.getItem("turno"))
      const serviciosFromLocalStorage = localStorage.getItem("servicios");
      if (serviciosFromLocalStorage) {
        // Parseamos los datos del localStorage a un array de objetos
        setSelectedItemsLocal(JSON.parse(serviciosFromLocalStorage));
      }
      if (CONFIRM) {
        setProgress(80);
      }
    }, [setProgress]);
   
    return(
        <>
            <NavBar text={"Confirmar turno"} progress={progress}/>
            <ConfirmSelect selecteHour={selecteHour} date={date} selectedItemsLocal={selectedItemsLocal}/>
            <ContainerBtns selecteHour={selecteHour} isConfirmPage={true}/>
        </>
    )
}