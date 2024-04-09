import "./ConfirmSelect.css";
// eslint-disable-next-line react/prop-types
export function ConfirmSelect({ selecteHour, date, selectedItemsLocal }) {
  console.log(selectedItemsLocal);

  return (
    <>
      <section className="section-confirm">
        <div className="container-confirm">
          <ul>
            {selectedItemsLocal &&
              selectedItemsLocal.map((item, index) => (
                <li key={index}>Servicio: {item.name}</li>
              ))}
          </ul>

          <p>
            Fecha: {date} {selecteHour}
          </p>
        </div>
      </section>
    </>
  );
}
