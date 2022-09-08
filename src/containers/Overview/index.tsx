import { Body } from "../../components";
import './index.css';

const Overview = () => {

  localStorage.setItem('pageIndex', 'true');

  return (
    <div className="fondoInicio">
        <Body />
    </div>
  ) 
}

export default Overview;
