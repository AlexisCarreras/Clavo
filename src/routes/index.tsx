import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Overview } from "../containers";
import DataEntry from "../containers/DataEntry";
import HowToBuy from "../containers/HowToBuy";
import TicketOperation from "../containers/TicketOperation";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={ <Overview /> } />
            <Route path="ConfirmaTusDatos" element={ <DataEntry /> } />
            <Route path="/ObtenerEntradas" element={ <TicketOperation /> } />
            <Route path="/ComoComprar" element={ <HowToBuy /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
