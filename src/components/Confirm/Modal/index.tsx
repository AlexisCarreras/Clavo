import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Modal() {
  const [open, setOpen] = React.useState(true);

  const [valueNombre, setValueNombre] = useState("");
  const [valueApellido, setValueApellido] = useState("");
  const [valueCel, setValueCel] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

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
            autoFocus
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
            autoFocus
            margin="dense"
            id="name"
            label="Celular (WhatsApp)"
            type="text"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
