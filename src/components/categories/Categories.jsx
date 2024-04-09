import { useState } from "react";
import "./Categories.css";
import { ShowCategories } from "./ShowCategories";
import { useCategories } from "../../context/CategoriesContext";

export function Categories({setSelectedItems}) {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  const { categories} = useCategories();
  const [openStates, setOpenStates] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null)

  const uniqueCategories = [
    ...new Set(categories.map((service) => service.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setOpenStates((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <>
      <section className="section-categories">
        <div className="chart">
          <p>Categorías</p>
            {uniqueCategories.map((category, index) => (
              <ul key={index} className="container-category">
                <li className="container-category-btn">
                  <span>{category}</span>
                  <button key={index} onClick={() =>handleCategoryClick(category)}>
                    <img
                      src={
                        openStates[category] 
                          ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nO3OsQ0AAAzCMP5/uv0CMdhS9iQAwJgrtTsAAKTtAXedM82lGNqdAAAAAElFTkSuQmCC"
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpklEQVR4nO3WX0vCYBTHcV9WvpygPxSWFNOsNB9p/lmxbFsbm23TactNMlQkkITnPuo1nXioyzPXhZxuPPC5+o3teyVmMpvb3D/daDTLDuP5GSaK3rbIg8JovgyjOSRYkgf1wykfhDPAiI08qNef8t5gCqj+PwR5wYT7wQQwYiMP6vhj/th9BYzYyINsd8xtdwwJ6INM54VbnRfAiI08SLdjbtgjwIiNPEiz4i/NigEXfa7tQ21jlFWNaKEaw/dE+vDjzohgFfHMyncY0UJ8KzXoVgvZrfYMNEKWGqS0Q6a0QyDCUoPq6oA11CegUFcH6UHXSsDkmz5QuFaC9KBaM2C1VgAkmn8Iqta7rNroAYl6Nz2o0nCzZdlflGX/Pcml7H2UZR9W+X0m8R3iGxdyd31/5Eo19+u85gGKeev7YfzrFa9cflZ1ASM28iCp4nCp0gGcQx90cuHw00sHMGIjDzou2TxfsgEjNvKgXMHkuaIFqIJJH3QgmfxQMgEjNvKgvZMHvn/6ABixkQft5PXlbl4HjNjog460re3cfQsjNvKgzW0u83PfL7PnEn3XyHAAAAAASUVORK5CYII="
                      }
                      alt="category"
                    />
                  </button>
                  {openStates[category] && (
                    <div className="container-all-service">
                        <ShowCategories categories={categories} category={category} setSelectedItems={setSelectedItems}/>
                    </div>
                  )}
                </li>
              </ul>
            ))}
          </div>
      </section>
    </>
  );
}
