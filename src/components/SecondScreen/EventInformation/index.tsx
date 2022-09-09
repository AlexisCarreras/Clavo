import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Paper } from '@material-ui/core';

import Info from './texts.json';
import './index.css';
 
const useStyles = makeStyles ({
  buttonBuy: {
    padding: '10px 40px 10px 40px',
    backgroundColor: '#3D00E6',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: '13px',
    borderRadius: '10px',
    marginTop: '50px',
    marginBottom: '50px',
    '&:hover': {
      backgroundColor: '#1C0068',
    }
  },
  link: {
    textDecoration: 'none',
  }
});  
 
const EventInformation = () => {
  const classes = useStyles();

  return ( 
    <div className='root'> 
      <Paper elevation={10} className='paper'>
        <h6 className='titleInformation'>
          INFORMACIÓN IMPORTANTE
        </h6>
        <p className='cabecera'>
          {Info.cabecera}
        </p>
        <p className='subCabecera'>
          {Info.subCabecera}
        </p>
        <Divider className='divider'/> 
        <p className='titleFecha'>
          {Info.primerFecha}
        </p>
        <p>
          {Info.primerValor}
        </p>
        <p className='titleFecha'>
          {Info.segundaFecha}
        </p>
        <p className='ultimoTexto'>
          {Info.segundoValor}
        </p>
        <Divider className='divider'/> 
        <p className='titleFecha'>
          {Info.asistentes}
        </p>
        <p>
          {Info.infoAsistentes1}
        </p>
        <p className='ultimoTexto'> 
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
        <p className='ultimoTexto'> 
          {Info.horarioDj} 
        </p>
        <Divider className='divider'/>
          
        <a href="https://mpago.la/2kvEFD3" className={classes.link}>
          <Button variant="contained" className={classes.buttonBuy}>
            COMPRAR ENTRADAS
          </Button>  
        </a>   
      </Paper>
    </div>
  )
}

export default EventInformation;
 