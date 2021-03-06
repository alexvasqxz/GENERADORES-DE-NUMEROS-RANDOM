import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import MixedCongruential from "../../../Core/Classes/MixedCongruential";

import HistoryRow from "./HistoryRow";

import useStyles from "./HistoryListStyles";

interface HistoryListProps {
  multiplierA: number;
  incrementC: number;
  modulus: number;
  seed: number;
  iterations: number;
}

const HistoryList: React.FC<HistoryListProps> = ({
  multiplierA,
  incrementC,
  modulus,
  seed,
  iterations,
}) => {
  const classes = useStyles();

  const generator = new MixedCongruential(
    multiplierA,
    incrementC,
    modulus,
    seed,
    iterations
  );
  const rows = generator.history();

  return (
    <Card className={classes.cards}>
      <Grid container spacing={1}>
        <Grid item sm={12}>
          <Typography variant="h5" className={classes.header}>
            Historial
          </Typography>
        </Grid>
        <Grid item sm={12} md={12}>
          <Typography
            variant="subtitle1"
            className={classes.section2}
          >
            Este es el historial de todas las operaciones del metodo
          </Typography>
        </Grid>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white" }}>#</TableCell>
              <TableCell style={{ color: "white" }}>Semilla</TableCell>
              <TableCell style={{ color: "white" }}>Número Aleatorio</TableCell>
              <TableCell style={{ color: "white" }}>Random Ri</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <HistoryRow
                key={index}
                index={index}
                seed={row.seed}
                generated={row.generated}
                res={row.res}
              />
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Card>
  );
};

export default HistoryList;
