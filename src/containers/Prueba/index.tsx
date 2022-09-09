import { makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
 
import { Headboard, Header } from '../../components';
import Modal from '../../components/Confirm/Modal';

const useStyles = makeStyles ((theme) => ({
  root: {
    backgroundColor: '#F6F6F6',
    minHeight: '90.2vh',
  },
  containerAcordion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5vh',
    paddingBottom: '5vh'
  }, 
  acordion: {
    backgroundColor: '#333',
    width: '70%', 
  },
  title: {
    color: '#333',
    paddingBottom: '5vh',
    fontSize: '23px',
  },
  heading: {
    color: '#FAFAFA',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular, 
  },
  icon: {
    color: 'white',
  },
  text: {
    color: '#FAFAFA'
  },
}) 
); 
 
const Prueba = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header /> 
      <Headboard />
      <div className={classes.containerAcordion}>
      <Typography className={classes.title}>Esto es una prueba</Typography>
      <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Elegí tu show</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            En nuestra página principal tendrás una lista de los próximos shows de la banda. Elegí el evento al que quieras asistir, veras toda la información sobre el mismo y tendrás disponible el botón de COMPRAR ENTRADAS.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <Modal /> 
    </div>
  )
}   

export default Prueba; 