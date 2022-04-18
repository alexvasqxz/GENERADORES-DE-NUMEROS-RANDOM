import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

interface HistoryRowProps {
  index: number;
  seed: number;
  generated?: number;
  res: number;
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  index,
  seed,
  generated,
  res,
}) => {
  return (
    <TableRow key={seed}>
      {generated || res ? (
        <>
          <TableCell component="th" scope="row" style={{ color: "white" }}>
            {index}
          </TableCell>
          <TableCell component="th" scope="row" style={{ color: "white" }}>
            {seed}
          </TableCell>
          <TableCell style={{ color: "white" }}>{generated}</TableCell>
          <TableCell style={{ color: "white" }}>{res}</TableCell>
        </>
      ) : (
        <></>
      )}
    </TableRow>
  );
};

export default HistoryRow;
