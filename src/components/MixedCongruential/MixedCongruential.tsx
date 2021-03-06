import React from "react";
import { useState, useCallback } from "react";
import { History } from "history";

import AboutComponent from "./About";
import InputComponent from "./Input";
import HistoryList from "./History";
import PassOrFail from "./Validation";
import Smirnov from "./Smirnov";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import MixedCongruentialMethod from "../../Core/Classes/MixedCongruential";

import useStyles from "./MixedCongruentialStyles";
import SquaredChi from "./SquaredChi";

interface MixedCongruentialProps {
  history: History;
}

const MixedCongruential: React.FC<MixedCongruentialProps> = ({ history }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [seed, setSeed] = useState(0);
  const [multiA, setMultiA] = useState(0);
  const [incrC, setIncrC] = useState(0);
  const [modulus, setModulus] = useState(0);
  const [iterations, setIterations] = useState<number>(10);

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  const handleSeedChange = (event: any) => {
    setError("");
    setSeed(parseInt(event.target.value) || 0);
  };

  const handleMultiChange = (event: any) => {
    setMultiA(parseInt(event.target.value) || 0);
  };

  const handleIncrCChange = (event: any) => {
    setIncrC(parseInt(event.target.value) || 0);
  };

  const handleModulusChange = (event: any) => {
    setModulus(parseInt(event.target.value) || 0);
  };

  const handleItersChange = (event: any) => {
    setIterations(parseInt(event.target.value) || 0);
  };

  const recalculateRandNumber = (
    multiplierA: number,
    incrementC: number,
    modulus: number,
    seed: number,
    iterations: number
  ) => {
    const generator = new MixedCongruentialMethod(
      multiplierA,
      incrementC,
      modulus,
      seed,
      iterations
    );

    generator.generate();
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.text}>
          <IconButton size="medium" onClick={navBack}>
          <ArrowBackIosIcon className={classes.arrow}
              fontSize="inherit" />
            </IconButton>
          METODO
        </Typography>
        <Typography variant="h4" className={classes.text2}>
          CONGRUENCIAL MIXTO
        </Typography>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} md={12} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <AboutComponent />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <PassOrFail
                    multiplierA={multiA}
                    incrementC={incrC}
                    modulus={modulus}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <InputComponent
                    multiplierA={multiA}
                    incrementC={incrC}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                    handleSeedChange={handleSeedChange}
                    handleMultiChange={handleMultiChange}
                    handleIncrCChange={handleIncrCChange}
                    handleModulusChange={handleModulusChange}
                    handleItersChange={handleItersChange}
                    recalculateRandNumber={recalculateRandNumber}
                    error={error}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <SquaredChi
                    multiplierA={multiA}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                    incrementC={incrC}
                  />
                </Grid>{" "}
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <Smirnov
                    multiplierA={multiA}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                    incrementC={incrC}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12}>
              <Grid container spacing={3}>
                <Grid item xl={12} lg={12} md={12} sm={12}>
                  <HistoryList
                    multiplierA={multiA}
                    incrementC={incrC}
                    modulus={modulus}
                    seed={seed}
                    iterations={iterations}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MixedCongruential;
