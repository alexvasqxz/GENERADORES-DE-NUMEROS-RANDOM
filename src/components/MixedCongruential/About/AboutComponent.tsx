import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
    },
    header: {
      fontWeight: "bold",
      alignItems: "center",
      textAlign: "center",
      color: ' #27AE60',
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    cards: {
      padding: theme.spacing(4),
      color: ' #FFFFFF',
      backgroundColor: ' #191d2b',
      borderRadius: "0.3px",
      border: "1px solid #7c8599",
    },
    section2: {
      margin: theme.spacing(2, 0),
      alignItems: "left",
      textAlign: "left",
    },
    imageCentered: {
      alignItems: "center",
      textAlign: "center",
    },
  })
);

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
            Este algoritmo combina el método congruncial lineal con el teorema de Hull Dobell para declarar si el generador tiene periodo completo.
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
                <i>Fig 3. </i>Formula Método Congruencial Mixto
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={12} lg={12}>
        <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            <b>El generador congruencial mixto tiene periodo completo si y sólo si:</b><br></br>
            <ol>
              <li>Sea c y m primos relativo (el máximo común divisor entre c y m es 1)</li>
              <li>Si q es un número primo que divide a m, entonces q divide a (a-1)</li>
              <li>Si 4 divide a m, entonces 4 divide a (a-1)</li>
            </ol>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AboutComponent;
