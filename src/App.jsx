import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HOURS, CONFIRM, HOME } from "./config-router/paths.js";
import "./App.css";
import { Home } from "./pages/Home";
import { Turnos } from "./pages/Turnos";
import { ContainerButtons } from "./components/container-button-img/ContainerButtons.jsx";
import { Confirm } from "./pages/Confirm.jsx";
import { ProgressContextProvider } from "./context/ProgressContext.jsx";
import { CategoriesContextProvider } from "./context/CategoriesContext.jsx";
import { ServicesContextProvider } from "./context/ServicesContext.jsx";

const App = () => {
  return (
    <Router>
      <ProgressContextProvider>
        <CategoriesContextProvider>
          <ServicesContextProvider>
            <Routes>
              <Route path={HOME}>
                <Route index element={<Home />} />
                <Route path={HOURS} element={<Turnos />} />
                <Route path={CONFIRM} element={<Confirm />} />
              </Route>
            </Routes>
            <ContainerButtons />
          </ServicesContextProvider>
        </CategoriesContextProvider>
      </ProgressContextProvider>
    </Router>
  );
};

export default App;
