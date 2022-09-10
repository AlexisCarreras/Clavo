import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";  
import Pdf from '../../../assets/eTicketCLAVO.pdf';
  
const useStyles = makeStyles ({
    link: { 
      textDecoration: 'none',
    },
  })
  
export default function Modal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const [valueNombre, setValueNombre] = useState<string>('');
 
  //Conexión con WSP 
  function getLinkWhastapp() {
    setOpen(false);
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
        <DialogTitle id="form-dialog-title">Confirma tu Nombre</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Asegurate de completar el dato solicitado, una vez que confirmes
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
        </DialogContent>
        <DialogActions>  
          <a href={Pdf} className={classes.link} target="_blank" rel="noopener noreferrer" download="eTicketCLAVO.pdf"> 
            <Button onClick={() => getLinkWhastapp()} color="primary">
              Enviar
            </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
