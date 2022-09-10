import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles ({
    link: { 
      textDecoration: 'none',
    },
  })
  

export default function Modal() {
  const classes = useStyles();

  const [open] = React.useState(true);

  const [valueNombre, setValueNombre] = useState<string>('');
  const [valueEmail, setValueEmail] = useState<string>('');
   
 
  //Conexión con WSP 
  function getLinkWhastapp() {
    var url =
      "https://api.whatsapp.com/send?phone=" +
      "541121936289" + 
      "&text=" +
      encodeURIComponent(
        `Gracias ${valueNombre} por comprar tu entrada para C.L.A.V.O en Circus Bar (12 de Noviembre). Envía este mensaje para coordinar la entrega de tu entrada física.`
      );

    return window.open(url);
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirma tus datos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Asegurate de completar todos los datos solicitados, una vez que confirmes
            seras redirigido a Whatsapp donde coordinaras la entrega de tu
            entrada física. <br />
            Además, se iniciara la descarga del comprobante de tu entrada.
          </DialogContentText>
          <TextField
            required
            onChange={(e) => setValueNombre(e.target.value)}
            value={valueNombre}
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
          />
          <TextField
            required
            onChange={(e) => setValueEmail(e.target.value)}
            value={valueEmail}
            margin="dense"
            id="name"
            label="Email"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Link to="/ObtenerEntradas" className={classes.link}>
            <Button onClick={() => getLinkWhastapp()} color="primary">
              Enviar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
