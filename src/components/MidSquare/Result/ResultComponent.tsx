import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

import useStyles from "./ResultStyles";

interface ResultComponentProps {
  answer: number;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ answer }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cards}>
      <Typography variant="h5" className={classes.header}>
            Resultado
      </Typography>
      <Box className={classes.center}>
        <Typography component="h4" variant="h4" style={{ color: "#FFFFFF"}}>
          <DoubleArrowRoundedIcon style={{ fontSize: "20px",color: "#FFFFFF"}} />
          <span> </span>{answer}
        </Typography>
      </Box>
    </Card>
  );
};

export default ResultComponent;
