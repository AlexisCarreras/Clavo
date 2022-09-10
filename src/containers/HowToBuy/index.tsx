import { Grid, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Headboard, Header } from "../../components";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F6F6F6",
    minHeight: "90.2vh",
  },
  containerAcordion: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "5vh",
    paddingBottom: "5vh",
  },
  acordion: {
    backgroundColor: "#333",
    width: "70%",
  },
  title: {
    color: "#333",
    paddingBottom: "5vh",
    fontSize: "1.5em",
  },
  heading: {
    color: "#FFFF",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  icon: {
    color: "white",
  },
  text: {
    fontWeight: 100,
    color: "#FAFAFA",
  },
}));

const HowToBuy = () => {
  const classes = useStyles();

  localStorage.setItem("pageIndex", "false");

  return (
    <div className={classes.root}>
      <Header />
      <Headboard />
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.containerAcordion}>
            <Typography className={classes.title}>
              ¿Cómo comprar con nuestro sistema?
            </Typography>
            <Accordion className={classes.acordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Elegí tu show
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.text}>
                  En nuestra página principal tendrás un listado de los próximos
                  shows de la banda. Elegí el evento al que quieras asistir,
                  veras toda la información sobre el mismo y tendrás disponible
                  el botón de COMPRAR ENTRADAS.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.acordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Formas de pago
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.text}>
                  La venta de entradas se realiza por medio del sistema de
                  Mercado Pago. <br />
                  Podes abonar tu entrada con los distintos medios de pagos
                  disponibles por la plataforma: Mercado Pago, Débito, Crédito,
                  y Efectivo (Pago Fácil o Rapipago).
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.acordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Cargá tus datos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.text}>
                  Una vez realizado y confirmado el pago, podes volver al sitio
                  para llenar tus datos: Nombre, apellido, celular y email. Es
                  MUY importante que todos los datos sean reales ya que
                  cualquier consulta o soporte necesario, se necesitaran los
                  datos del comprador. <br />
                  Una vez cargados todos los datos, haces click en “CONFIRMAR”.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.acordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  ¿Cómo retiro mi entrada?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.text}>
                  Una vez que realices la compra y completes tus datos, se
                  descargará el comprobante de tu entrada y serás redirigido a
                  WhatsApp, donde coordinaras la entrega de tu entrada física
                  durante esa semana.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.acordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  ¿Qué pasa si falla o se demora el proceso de compra?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.text}>
                  Si ocurre un error o demora en el pago a través de la
                  plataforma de mercado pago, envianos el comprobante o captura
                  por email: clavosupport@hotmail.com.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.acordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  ¿Qué pasa si no se descarga mi comprobante de entrada?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.text}>
                  Si la descarga no se realiza automáticamente, no te preocupes.
                  Envía el mensaje por WhatsApp generado automáticamente para
                  poder coordinar la entrega de tu entrada física y pedinos tu
                  comprobante virtual.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowToBuy;
