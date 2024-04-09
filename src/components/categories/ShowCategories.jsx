import { useState, useEffect } from "react";
import "./ShowCategories.css";

export function ShowCategories({ categories, category, setSelectedItems }) {
  const [selectedItemsLocal, setSelectedItemsLocal] = useState([]);
 

  const handleItemClick = (item) => {
    if (selectedItemsLocal.includes(item)) {
      setSelectedItemsLocal(selectedItemsLocal.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItemsLocal([...selectedItemsLocal, item]);
    }
  };
  useEffect(() => {
    setSelectedItems(selectedItemsLocal);
    // Guardar en localStorage
    localStorage.setItem("servicios", JSON.stringify(selectedItemsLocal));
  }, [selectedItemsLocal, setSelectedItems]);


  useEffect(() => {
    setSelectedItems(selectedItemsLocal);
   
  }, [selectedItemsLocal, setSelectedItems]);

  return (
    <>
      {categories
        .filter((service) => service.category === category)
        .map((item, index) => (
          <div key={index} className="container-service">
            <div className="container-text">
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
            <div className="container-button">
              <button
                onClick={() => handleItemClick(item)}
                style={{
                  background: selectedItemsLocal.includes(item) ? "#354142" : "#2b363798"
                }}
              >
                {selectedItemsLocal.includes(item) ? "Seleccionado" : "Seleccionar"}
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
