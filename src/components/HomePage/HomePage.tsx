import React from "react";
import { History } from "history";
import { useCallback } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';

import useStyles from "./HomePageStyles";

interface HomePageProps {
  history: History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
  const classes = useStyles();

  const navToMidSquare = useCallback(() => {
    history.push(`midsquare`);
  }, [history]);

  const navToLinCong = useCallback(() => {
    history.push(`lincong`);
  }, [history]);

  const navToLinMixed = useCallback(() => {
    history.push(`linmixed`);
  }, [history]);

  const navToMultiplicative = useCallback(() => {
    history.push(`multiplicative`);
  }, [history]);

  const navToCombinedLineal = useCallback(() => {
    history.push(`combinedlineal`);
  }, [history]);

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <Typography variant="h4" className={classes.text} align="center">
            SIMULADOR DE
          </Typography>
          <Typography variant="h4" className={classes.text2} align="center">
            NUMEROS ALEATORIOS
          </Typography>
        </div>

        <Box className={classes.content}>
          <Grid container spacing={5}>
            {/* metodo centros cuadrados */}
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <CardActionArea onClick={navToMidSquare.bind(null)}>
                <Card className={classes.cards}>
                  <Typography className={classes.header} variant="h5">
                    Método de los <br></br>Centros Cuadrados
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
            {/* Método de Congruencia Lineal */}
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <CardActionArea onClick={navToLinCong.bind(null)}>
                <Card className={classes.cards}>
                  <Typography className={classes.header} variant="h5">
                    Método de <br></br>Congruencia Lineal
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
            {/* Método de Congruencia Mixto */}
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <CardActionArea onClick={navToLinMixed.bind(null)}>
                <Card className={classes.cards}>
                  <Typography className={classes.header} variant="h5">
                    Método <br></br>Congruencial Mixto
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
            {/* generador multiplicativo */}
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <CardActionArea onClick={navToMultiplicative.bind(null)}>
                <Card className={classes.cards}>
                  <Typography className={classes.header} variant="h5">
                    Generador <br></br>Multiplicativo
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
            {/* Medtodo Congruencial Lineal Combinado */}
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <CardActionArea onClick={navToCombinedLineal.bind(null)}>
                <Card className={classes.cards}>
                  <Typography className={classes.header} variant="h5">
                    Método Congruencial<br></br> Lineal Combinado
                  </Typography>
                </Card>
              </CardActionArea>
            </Grid>
              {/* Medtodo Congruencial Lineal Combinado */}
              <Grid item xl={6} lg={6} md={6} sm={12}>
              <CardActionArea>
                <Card className={classes.darkcard}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        align="left"
                        className={classes.section2}
                      >
                        Gustavo Vasquez Acosta
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        align="left"
                        className={classes.section2}
                      >
                       Nicolas Gazzolo Varela
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.section2}
                      >
                        A00823326
                      </Typography>
                        <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.section2}
                      >
                        A01339945
                      </Typography>
                    </Grid>
                    
                  </Grid>
                </Card>
              </CardActionArea>
            </Grid>
            
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
