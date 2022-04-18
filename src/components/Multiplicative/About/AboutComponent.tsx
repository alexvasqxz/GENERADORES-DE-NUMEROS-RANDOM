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
            Método Congruencial Mixto
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            El método congruencial multiplicativo (método de Lehmer) es un tipo
            de generador congruencial lineal.
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
          <Grid item sm={12}>
              <img src="./img/for3.png"
                width="300px"
                alt="Formula Metodo" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                className={classes.section2}
              >
                <i>Fig 4.</i> Formula Método Congruencial Multiplicativo
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} lg={12}>
        <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            <b>Los requisitos que deben satisfacer los parámetros son:</b><br></br>
            <ol>
              <li>X0, a, m iguales o mayores a 0 y enteros</li>
              <li>m mayor a a</li>
              <li>m mayor a X0</li>
            </ol>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
