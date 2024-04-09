import { createContext, useContext, useEffect, useState } from "react";
import hoursData from "../slots.json";
// Creamos el contexto
export const ServicesContext = createContext();

// eslint-disable-next-line react/prop-types
export const ServicesContextProvider = ({ children }) => {

  const [dates, setDates] = useState();
  const [morningHors, setMorningHors] = useState([]);
  const [afternoonHors, setAfternoonHors] = useState([]);

  const formatDate = (dateString) => {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];

    const [year, monthIndex, day] = dateString.split("-");
    const month = months[parseInt(monthIndex, 10) - 1];

    return `${parseInt(day, 10)} de ${month}`;
  };
  //Esto es porque en el json() la fecha viene en formato AÑO/MES/DIA pero en la pantalla confirm se muestra 
  //Dia-mes-año
  const formatDateNumber = (fecha) =>{
    const dateNew = new Date(fecha);

    // obtiene el día, mes y año de la fecha
    const day = dateNew.getUTCDate();
    const month = dateNew.getMonth() + 1; // se suma 1 porque los meses en JavaScript comienzan desde 0
    const year = dateNew.getFullYear();
    
    // formatea la fecha en el formato deseado "DD/MM/YYYY"
    return `${day}/${month}/${year}`;
    
  }

  useEffect(() => {
    localStorage.clear();
    const getData = async () => {
      try {
        const datos = hoursData;
        // Dividir las fechas y horas
        const dates = formatDate(datos.date);
        const hours = datos.availableTimeslots;
        //Guardo fecha en localstorage
        const dateFormat = formatDateNumber(datos.date)
        localStorage.setItem("fecha", dateFormat)
        localStorage.getItem("fecha");

        // Filtrar las horas para la mañana y la tarde
        const morningHours = hours.filter((hour) => {
          //Horas de la mañana
          const time = parseInt(hour.split(":")[0], 10);
          return time < 12;
        });

        const afternoonHours = hours.filter((hour) => {
          //Horas del turno tarde
          const time = parseInt(hour.split(":")[0], 10);
          return time >= 12;
        });

        // Actualizar los estados
        setDates(dates);
        setMorningHors(morningHours);
        setAfternoonHors(afternoonHours);
       
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <ServicesContext.Provider value={{ dates, morningHors, afternoonHors}}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useProgress debe ser usado dentro de un ProgressProvider");
  }
  return context;
};
