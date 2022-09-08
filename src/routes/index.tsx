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
            <Route path="obtenerentradas" element={ <TicketOperation /> } />
            <Route path="comocomprar" element={ <HowToBuy /> } />
            <Route path="confirmatusdatos" element={ <DataEntry /> } />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router;
