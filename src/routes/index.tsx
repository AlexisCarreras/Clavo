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
            <Route path="ObtenerEntradas" element={ <TicketOperation /> } />
            <Route path="ComoComprar" element={ <HowToBuy /> } />
            <Route path="ConfirmaTusDatos" element={ <DataEntry /> } />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router;
