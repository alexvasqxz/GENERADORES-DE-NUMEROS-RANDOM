import React from "react";
import { useState, useCallback } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { History } from "history";

// DESIGN
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AboutComponent from "./About";
import ResultComponent from "./Result";
import InputComponent from "./Input";
import { HistoryList } from "./History";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: ' #191d2b',
      minHeight: "100vh",
      color: ' #FFFFFF',
      flexFlow: "1",
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
    },
    text2: {
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
      color: ' #27AE60',
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    center: {
      textAlign: "center",
      color: " #ffffff",
      fontFamily: "Montserrat-Bold",
    },
    arrow: {
      color: " #ffffff",
    },
  })
);

interface MidSquareScreenProps {
  history: History;
}

const MidSquareScreen: React.FC<MidSquareScreenProps> = ({ history }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [seed, setSeed] = useState(0);
  const [iterations, setIterations] = useState<number>(20);
  const [rand, setRand] = useState<number>(0.0);

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  const onSeedChange = useCallback(
    ({ target }) => {
      setError("");
      setSeed(parseInt(target.value) || 0);
    },
    [setSeed]
  );

  const onIterationsChange = useCallback(
    ({ target }) => {
      setIterations(parseInt(target.value) || 0);
    },
    [setIterations]
  );

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.text}>
          <IconButton size="medium" onClick={navBack}>
            <ArrowBackIosIcon className={classes.arrow}
              fontSize="inherit" />
          </IconButton>
          METODO DE LOS
        </Typography>
        <Typography variant="h4" className={classes.text2}>
          CUADRADOS MEDIOS
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <AboutComponent />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <InputComponent
                    seed={seed}
                    iterations={iterations}
                    setRand={setRand}
                    onSeedChange={onSeedChange}
                    onIterationsChange={onIterationsChange}
                    error={error}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <ResultComponent answer={rand} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <HistoryList seed={seed} iterations={iterations} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MidSquareScreen;
