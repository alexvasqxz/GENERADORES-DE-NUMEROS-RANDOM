import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  index: number;
  seed: number;
  squared?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  index,
  seed,
  squared,
  res,
}) => {
  return (
    <TableRow key={index + "-" + seed}>
      <TableCell style={{ color: "white" }} component="th" scope="row">
        {index}
      </TableCell>
      <TableCell style={{ color: "white" }} component="th" scope="row">
        {seed}
      </TableCell>
      <TableCell style={{ color: "white" }} align="right">{squared}</TableCell>
      <TableCell style={{ color: "white" }} align="right">{res}</TableCell>
    </TableRow>
  );
};

export default HistoryRow;
