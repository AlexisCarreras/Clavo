import { makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Headboard, Header } from '../../components';
import './index.css';

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
 
const HowToBuy = () => { 
  const classes = useStyles();

  localStorage.setItem('pageIndex', 'false');

  return (
    <div className={classes.root}>
      <Header />
      <Headboard />
      <div className={classes.containerAcordion}>
      <Typography className={classes.title}>¿Cómo comprar con nuestro sistema?</Typography>
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
      <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Elegí la cantidad de entradas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Una vez que encontraste tu evento, corroborá que sea en día y lugar que vos estás buscando y luego bajá, y elegí el tipo y la cantidad de entradas que querés comprar; luego dale click a “Comprar!”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Cargá tus datos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            A continuación, llenas tus datos: Nombres, apellidos, DNI y email.
            Es MUY importante que todos los datos sean reales ya que, tu nombre, apellido y DNI son necesarios para que puedas acceder al show, y el email que pongas es a donde te van a llegar las entradas.
            Una vez cargados todos los datos, tenés que tildar más abajo que leíste y aceptas los Términos y Condiciones de nuestro sitio, y una vez hecho esto, haces click en “Realizar el pedido”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Formas de pago</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            La venta de entradas se realiza por medio de Mercado Pago, podes abonar tu entrada con todos los medios de pagos disponibles por la plataforma. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>¿Cómo retiro mi entrada?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Una vez que realices la compra y completes tus datos, serás redirigido a WhatsApp, donde coordinaras la entrega de tu entrada durante esa semana.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default HowToBuy;
