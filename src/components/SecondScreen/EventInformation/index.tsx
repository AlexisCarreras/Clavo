import { Button, Divider, Paper } from '@material-ui/core';

import Info from './texts.json';
import './index.css';
 
const EventInformation = () => {
  return ( 
    <div className='root'> 
      <Paper elevation={10} className='paper'>
        <h6 className='titleInformation'>
          INFORMACIÓN IMPORTANTE
        </h6>
        <p>
          {Info.cabecera}
        </p>
        <p>
          {Info.subCabecera}
        </p>
        <p className='titleFecha'>
          {Info.primerFecha}
        </p>
        <p>
          {Info.primerValor}
        </p>
        <p className='titleFecha'>
          {Info.segundaFecha}
        </p>
        <p>
          {Info.segundoValor}
        </p>
        <Divider className='divider'/> 
        <p className='titleFecha'>
          {Info.asistentes}
        </p>
        <p>
          {Info.infoAsistentes1}
        </p>
        <p> 
          {Info.infoAsistentes2}
        </p>
        <Divider className='divider'/> 
        <p className='titleFecha'>
          {Info.tituloHorario} 
        </p>
        <p>
          {Info.horarioPuerta}
        </p>
        <p>
          {Info.horarioClavo}
        </p>
        <p>
          {Info.horarioDj}
        </p>
        <Divider className='divider'/> 
        <Button variant="contained" className='buttonBuy'>
          COMPRAR ENTRADAS
        </Button>
      </Paper>
    </div>
  )
}

export default EventInformation;
 