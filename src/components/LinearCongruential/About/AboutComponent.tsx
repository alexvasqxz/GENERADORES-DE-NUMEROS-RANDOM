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
            METODO DE <br></br>CONFRUENCIA LINEAL
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            Es un algoritmo que fue propuesto en el año de 1951 por Derrick
            Henry Lehmer.
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <img src="./img/for2.png"
                width="300px"
                alt="Formula Metodo" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                className={classes.section2}
              >
                <i>Fig 2. </i>Formula Método Congruencia Lineal
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
            <ul>
              <li>El valor inicial <b>X0</b> es llamado semilla</li>
              <li><b>a</b> llamado multiplicador</li>
              <li><b>c</b> es el incremento</li>
              <li><b>m</b> es el módulo</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
