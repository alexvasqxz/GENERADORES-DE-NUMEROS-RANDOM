import React, { useState, useCallback } from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import useStyles from "./ValidationStyles";
import MixedCongruential from "../../../Core/Classes/MixedCongruential";
import SmirnovTest from "../../../Core/Classes/Smirnov";

interface PassOrFailProps {
  multiplierA: number;
  modulus: number;
  seed: number;
  iterations: number;
  incrementC: number;
}

const Smirnov: React.FC<PassOrFailProps> = ({
  multiplierA,
  modulus,
  seed,
  iterations,
  incrementC,
}) => {
  const classes = useStyles();
  const generator = new MixedCongruential(
    multiplierA,
    incrementC,
    modulus,
    seed,
    iterations
  );
  generator.generate();

  const [alpha, setAlpha] = useState(0.1);
  const test = new SmirnovTest(generator.ri, alpha);

  const handleChange = useCallback(
    (event: any) => {
      setAlpha(event.target.value);
    },
    [alpha, setAlpha]
  );

  return (
    <Card className={classes.cards}>
      <Grid container spacing={1}>
        <Grid item sm={12} md={12}>
        <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.header}
          >
            Kolmogorov-Smirnov
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            {test.test()}
          </Typography>
        </Grid>

        <Grid item sm={12}>
          <InputLabel id="demo-simple-select-outlined-label" style={{ color: "white" }}>ALPHA</InputLabel><br></br>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={alpha}
            style={{ color: "white" }}
            onChange={handleChange}
          >
            <MenuItem value={0.2}>0.2</MenuItem>
            <MenuItem value={0.1}>0.1</MenuItem>
            <MenuItem value={0.05}>0.05</MenuItem>
            <MenuItem value={0.02}>0.02</MenuItem>
            <MenuItem value={0.01}>0.01</MenuItem>
            <MenuItem value={0.005}>0.005</MenuItem>
            <MenuItem value={0.002}>0.002</MenuItem>
            <MenuItem value={0.001}>0.001</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Smirnov;
