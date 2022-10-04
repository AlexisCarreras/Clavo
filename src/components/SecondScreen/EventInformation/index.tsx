import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Paper } from "@material-ui/core";

import Info from "./texts.json";
import "./index.css";

const useStyles = makeStyles({
  buttonBuy: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    padding: "10px 40px 10px 40px",
    backgroundColor: "#3D00E6",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: "13px",
    borderRadius: "10px",
    marginTop: "30px",
    marginBottom: "15px",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#1C0068",
    },
  },
  link: {
    textDecoration: "none",
  },
});

const EventInformation = () => {
  const classes = useStyles();

  const [count, setCount] = useState(0);

  const handleCount = (operation: string) => {
    if (operation === "-") {
      if (count > 0) setCount(count - 1);
    } else if (operation === "+") {
      if (count < 5) setCount(count + 1);
    }
  };

  return (
    <div className="rootEvent">
      <Paper elevation={10} className="paper">
        <h6 className="titleInformation">INFORMACIÓN IMPORTANTE</h6>
        <p className="cabecera">{Info.cabecera}</p>
        <p className="subCabecera">{Info.subCabecera}</p>
        <Divider className="divider" />
        <p className="titleFecha">{Info.primerFecha}</p>
        <p className="ultimoTexto">{Info.primerValor}</p>
        <p className="titleFecha">{Info.segundaFecha}</p>
        <p className="ultimoTexto">{Info.segundoValor}</p>
        <Divider className="divider" />
        <p className="titleFecha">{Info.asistentes}</p>
        <p className="textHorario">{Info.infoAsistentes1}</p>
        <p className="textHorario">{Info.infoAsistentes2}</p>
        <Divider className="divider" />
        <p className="titleFecha">{Info.tituloHorario}</p>
        <p className="textHorario">{Info.horarioPuerta}</p>
        <p className="textHorario">{Info.horarioClavo}</p>
        <p className="ultimoTexto">{Info.horarioDj}</p>
        <Divider className="divider" />

        <div className="containerCount">
          <div className="row1">
            <p className="entradas">Entradas:</p>
          </div>
          <Divider className="dividerEntradas" />
          <div className="row2">
            <p className="textCant">General:</p>
            <p className="textCant">
              {count === 1 || count === 0
                ? "$1.500"
                : count === 2
                ? "$3.000"
                : count === 3
                ? "$4.500"
                : count === 4
                ? "$6.000"
                : "$7.500"}
            </p>
            <div>
              <div className="buttonsCount">
                {count === 0 ? (
                  <Button disabled>
                    <p className="buttonCount">-</p>
                  </Button>
                ) : (
                  <Button onClick={() => handleCount("-")}>
                    <p className="buttonCount">-</p>
                  </Button>
                )}
                <p className="count">{count}</p>
                {count === 5 ? (
                  <Button disabled>
                    <p className="buttonCount">+</p>
                  </Button>
                ) : (
                  <Button onClick={() => handleCount("+")}>
                    <p className="buttonCount">+</p>
                  </Button>
                )}
              </div>
              <Divider className="dividerCount" />
            </div>
          </div>
          <Divider className="dividerEntradas" />
          {count === 0 ? (
            <Button variant="contained" disabled className={classes.buttonBuy}>
              COMPRAR ENTRADAS
            </Button>
          ) : count === 1 ? (
            <a href="https://mpago.la/1Dd3fM3" className={classes.link}>
              <Button variant="contained" className={classes.buttonBuy}>
                COMPRAR ENTRADAS
              </Button>
            </a>
          ) : count === 2 ? (
            <a href="https://mpago.la/1xWuAcU" className={classes.link}>
              <Button variant="contained" className={classes.buttonBuy}>
                COMPRAR ENTRADAS
              </Button>
            </a>
          ) : count === 3 ? (
            <a href="https://mpago.la/1vxv7Ad" className={classes.link}>
              <Button variant="contained" className={classes.buttonBuy}>
                COMPRAR ENTRADAS
              </Button>
            </a>
          ) : count === 4 ? (
            <a href="https://mpago.la/31AwLxA" className={classes.link}>
              <Button variant="contained" className={classes.buttonBuy}>
                COMPRAR ENTRADAS
              </Button>
            </a>
          ) : (
            <a href="https://mpago.la/2ZBhJBK" className={classes.link}>
              <Button variant="contained" className={classes.buttonBuy}>
                COMPRAR ENTRADAS
              </Button>
            </a>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default EventInformation;
