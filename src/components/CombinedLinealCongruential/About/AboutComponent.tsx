import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import useStyles from "../CombinedLinealStyles";

const AboutComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.header}>
            Método Congruencial Lineal Combinado
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            Desarrollado por Pierre L'Écuyer en 1998
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
          <Grid item sm={12}>
              <img src="./img/for4.png"
                width="300px"
                alt="Formula Metodo" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                className={classes.section2}
              >
                <i>Fig 5. </i>Formula Método Congruencial Lineal Combinado
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} lg={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            El método congruencial lineal combinado hace uso del método
            congruencial multiplicativo, de manera en que al combinar varios de
            estos generadores es posible crear un generador con un periodo mas
            grande que cada uno de sus generadores de manera individual.
            El periodo maximo para este generador esta dado por:
          </Typography>
        </Grid>
        <Grid item sm={12} lg={12} className={classes.imageCentered}>
          <Grid container spacing={1}>
          <Grid item sm={12}>
              <img src="./img/for5.png"
                width="300px"
                alt="Formula Metodo" />
            </Grid>
            <Grid item sm={12}>
              <Typography
                variant="caption"
                className={classes.section2}
              >
                <i>Fig 5. </i>Formula Método Congruencial Lineal Combinado
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
