
import { Button, Paper } from '@material-ui/core';
import Flyer from '../../../assets/Images/flyer.jpg';
import RoomIcon from '@material-ui/icons/Room';
import DomainIcon from '@material-ui/icons/Domain';

import Info from './texts.json';
import './index.css';

const Date = () => {

  return (
    <div className='containerCalendar'>
      <div className='calendar'>
        <p id='monthName'>Noviembre</p>
        <p id='dayName'>Sábado</p>
        <p id='dayNumber'>12</p>
        <p id='year'>2022</p>
      </div>
    </div>
  )
}
 
const Overview = () => {
  return ( 
    <div className='root'> 
      <Paper elevation={10}>
        <img src={ Flyer } className="flyerImg" alt="Flyer de Clavo" />
        <div className='containerArticles'>
          <article className='articleDate'>
            { Date() }
          </article>
          <article className='articleInfo'>
            <p className='title'>
              { Info.titulo }
            </p>
            <p className='subtitle'>
              { Info.fecha }
            </p>
            <div className="iconText">
              <RoomIcon fontSize="small" />
              <p className='texts'>
                { Info.lugar }
              </p>
            </div>
            <div className="iconText">
              <DomainIcon fontSize="small" />
              <p className='texts'>
                { Info.direccion }
              </p>
            </div>
            <a href="https://goo.gl/maps/RDH9LXwwcKso6mS5A" rel="noreferrer" target="_blank">
              <Button className="buttonMaps">
                Ver en Google Maps
              </Button>
            </a>
          </article> 

        </div>
      </Paper>
    </div>
  )
}

export default Overview;