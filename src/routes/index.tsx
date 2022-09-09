import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Overview } from "../containers";
import Confirm from "../containers/Confirm";
import HowToBuy from "../containers/HowToBuy";
import TicketOperation from "../containers/TicketOperation";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/ObtenerEntradas" element={ <TicketOperation /> } />
            <Route path="/ComoComprar" element={ <HowToBuy /> } />
            <Route path="/Confirmar" element={ <Confirm /> } />
            
            <Route path="/" element={ <Overview /> } />
        </Routes>
    </BrowserRouter> 
  )
}

export default Router;
