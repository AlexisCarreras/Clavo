import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { Overview } from "../containers";
import TicketOperation from "../containers/TicketOperation";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={ <Overview /> } />
            <Route path="obtenerEntradas" element={ <TicketOperation /> } />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Router;
