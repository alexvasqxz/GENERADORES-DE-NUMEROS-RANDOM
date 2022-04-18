import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import MidSquareGenerator from "../../../Core/Classes/MidSquare";

import useStyles from "./InputStyles";

const ErrorMessage = styled.div`
  position: fixed;
  color: red;
  font-size: 15px;
  margin-top: 20px;
`;

const recalculateRandNumber = (seed: number, iterations: number) => {
  const generator = new MidSquareGenerator(seed, iterations);
  return generator.generate();
};

interface InputComponentProps {
  error: string;
  seed: number;
  iterations: number;
  onSeedChange({ target }: any): void;
  onIterationsChange({ target }: any): void;
  setRand(a: number): void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  seed,
  iterations,
  onSeedChange,
  onIterationsChange,
  setRand,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography variant="h5" className={classes.header}>
            Parametros
      </Typography>
      <Typography variant="subtitle1" className={classes.section2}>
        Llena los datos solicitados y selecciona generar para obtener tu número
        aleatorio.
      </Typography>
      <ErrorMessage data-testid="error-message">{error}</ErrorMessage>
      <Box className={classes.content}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              label="Semilla"
              variant="outlined"
              defaultValue="0"
              size="small"
              inputProps={{ maxLength: 4, style: { color: "white" }}}
              value={seed}
              onChange={onSeedChange}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              label="Iteraciones"
              variant="outlined"
              defaultValue="0"
              size="small"
              inputProps={{ maxLength: 3, style: { color: "white" }}}
              value={iterations}
              onChange={onIterationsChange}
            />
          </Grid>

          <Grid item sm={6}>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: ' #27AE60', color: ' #FFFFFF' }}
              onClick={() => {
                const value: number = recalculateRandNumber(seed, iterations);
                setRand(value);
              }}
            >
              Generar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default InputComponent;
