import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import useStyles from "./AboutStyles";

const AboutComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.header}>
            MÉTODO DE <br></br>LOS CUADRADOS MEDIOS
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            Es un algoritmo no congruencial que fue propuesto en los años
            cuarenta del siglo XX por Von Neumann y Nicholas Metropolis.
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <img
                src="./img/for1.png"
                width="300px"
                alt="Formula Metodo"
              />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                className={classes.section2}
              >
                <i>Fig 1. </i>Formula Método Cuadrados Medios
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} lg={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            Inputs: <br></br>
            Para el método de los cuadrados medios solamente se necesita un
            valor, en este caso de 4 digitos, llamado "Valor Semilla" el cual esta
            representado como Xi en la formula
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
