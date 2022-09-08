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

  const [open, setOpen] = React.useState(true);

  const [valueNombre, setValueNombre] = useState("");
  const [valueApellido, setValueApellido] = useState("");
  const [valueCel, setValueCel] = useState("");

  //Conexión con WSP
  function getLinkWhastapp() {
    var url =
      "https://api.whatsapp.com/send?phone=" +
      "541121936289" +
      "&text=" +
      encodeURIComponent(
        "Gracias por comprar tu entrada para C.L.A.V.O en Circus Bar (12 de Noviembre). Envìa el mensaje para coordinar la entrega de la entrada."
      );

    return window.open(url);
  }

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Confirma tus datos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Completa obligatoriamente todos los datos solicitados, una vez hecho
            seras redirigido a Whatsapp donde coordinaras la entrega de tu
            entrada.
          </DialogContentText>
          <TextField
            onChange={(e) => setValueNombre(e.target.value)}
            value={valueNombre}
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => setValueApellido(e.target.value)}
            value={valueApellido}
            margin="dense"
            id="name"
            label="Apellido"
            type="text"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => setValueCel(e.target.value)}
            value={valueCel}
            margin="dense"
            id="name"
            label="Celular (WhatsApp)"
            type="text"
            fullWidth
            required
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
