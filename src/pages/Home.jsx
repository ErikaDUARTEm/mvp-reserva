import { useEffect, useState } from "react";
import { Categories } from "../components/categories/Categories";
import NavBar from "../components/navbar/Navbar";
import { useProgress } from "../context/ProgressContext";
import { HOURS } from "../config-router/paths";
import { ContainerBtns } from "../components/bottons-previous-next/ContainerBtns";

export function Home() {
  const { progress, setProgress } = useProgress();
  const [selectedItems, setSelectedItems] = useState([]);
  
  useEffect(() => {
    if (HOURS) {
      setProgress(30);
    }
  }, [setProgress]);
 
  return (
    <>
      <NavBar progress={progress} text={"Seleccionar servicio"} />
      <Categories setSelectedItems={setSelectedItems} />
      {selectedItems.length > 0 && <ContainerBtns selectedHour={selectedItems} />}
    </>
  );
}
