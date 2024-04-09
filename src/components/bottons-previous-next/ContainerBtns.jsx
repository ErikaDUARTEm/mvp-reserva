import { useEffect, useState } from "react";
import { CONFIRM, HOME, HOURS } from "../../config-router/paths";
import "./ContainerBtns.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Alert } from "../../alert/Alert";

// eslint-disable-next-line react/prop-types
export function ContainerBtns({ selectedHour }) {
  const location = useLocation();
  const [isConfirmPage, setIsConfirmPage] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsConfirmPage(location.pathname === CONFIRM);
  }, [location.pathname]);

  useEffect(() => {
    setIsNextButtonDisabled(!selectedHour);
  }, [selectedHour]);

  function handleClick() {
    if (isConfirmPage && !showAlert) {
      Alert(
        "Estás seguro(a)?",
        "No podrás revertir luego de confirmar!",
        "Si, confirmar!",
        "No, cancelar!"
      ).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          navigate(HOME);
          window.location.reload();
        }
        setShowAlert(false); // Restablecer el estado de showAlert
        console.log("Alert result:", result);
      });
      setShowAlert(true); // Mostrar la alerta de confirmación
    }
  }
  return (
    <>
      <div className="container-previous-next">
        <Link to={location.pathname === HOURS ? HOME : HOURS}>
          {location.pathname !== HOME && (
            <button
              className="btn-previous"
              style={{ background: isConfirmPage ? "#2b363798" : "#354142" }}
            >
              <p>Anterior</p>
            </button>
          )}
        </Link>
        <Link to={selectedHour ? (location.pathname === HOME ? HOURS : CONFIRM) : "#"}>
          <button
            className={`btn-next${
              isNextButtonDisabled && !isConfirmPage ? " disabled" : ""
            }`}
            disabled={isNextButtonDisabled && !isConfirmPage}
            onClick={handleClick}
          >
            <p>{isConfirmPage ? "Confirmar" : "Siguiente"}</p>
          </button>
        </Link>
      </div>
    </>
  );
}
