import { useEffect, useState } from "react";
import "./Hors.css";
import NavBar from "../navbar/Navbar";
import { useProgress } from "../../context/ProgressContext";
import { HOURS } from "../../config-router/paths";
import { useServices } from "../../context/ServicesContext";

export function Hors({ onHourSelect }) {
  const { progress, setProgress } = useProgress();
  const [selectedHour, setSelectedHour] = useState();
  const { dates, morningHors, afternoonHors } = useServices();

  useEffect(() => {
    const savedData = localStorage.getItem("turno");
    if (savedData) {
      setSelectedHour(savedData);
    }
  }, []);
  const handleHourSelect = (hour) => {
    const newHour = hour;
    setSelectedHour(newHour);
    localStorage.setItem("turno", newHour);
    onHourSelect(hour);
  };
  useEffect(() => {
    if (HOURS) {
      setProgress(60);
    }
  }, [setProgress]);

  return (
    <>
      <NavBar text={"Seleccionar horario"} progress={progress} />
      <section className="section-hours">
        <div className="chart">
          <div className="container-text-hours">
            <p>Próximos turnos disponibles</p>
            <ul>{dates}</ul>
          </div>
          <div className="container-hours">
            <ul>
              {morningHors.map((hour, index) => (
                <button
                  className="btn-hour"
                  onClick={() => handleHourSelect(hour)}
                  key={index}
                  style={{
                    background: selectedHour
                      ? selectedHour === hour
                        ? "#545353"
                        : "#dcdde4"
                      : "#dcdde4",
                    color: selectedHour
                      ? selectedHour === hour
                        ? "white"
                        : ""
                      : "", // Cambiar el color del texto según el estado
                  }}
                >
                  {hour}
                </button>
              ))}
            </ul>
          </div>
          <div className="container-text-hours">
            <ul>{dates}</ul>
          </div>
          <div className="container-hours">
            <ul>
              {afternoonHors.map((hour, index) => (
                <button
                  className="btn-hour"
                  key={index}
                  onClick={() => handleHourSelect(hour)}
                  style={{
                    background: selectedHour
                      ? selectedHour === hour
                        ? "#545353"
                        : "#dcdde4"
                      : "#dcdde4",
                    color: selectedHour
                      ? selectedHour === hour
                        ? "white"
                        : ""
                      : "",
                  }}
                >
                  {hour}
                </button>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
