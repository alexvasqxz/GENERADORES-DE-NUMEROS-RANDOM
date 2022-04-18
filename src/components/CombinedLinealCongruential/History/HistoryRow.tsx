import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  seed: number;
  generated?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({ seed, generated, res }) => {
  return (
    <TableRow key={seed}>
      <TableCell component="th" scope="row" style={{ color: "white" }}>
        {seed}
      </TableCell>
      <TableCell style={{ color: "white" }}>{generated}</TableCell>
      <TableCell style={{ color: "white" }}>{res}</TableCell>
    </TableRow>
  );
};

export default HistoryRow;
