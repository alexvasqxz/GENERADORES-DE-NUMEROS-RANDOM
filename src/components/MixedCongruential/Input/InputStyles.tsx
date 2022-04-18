import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
      color: " #FFFFFF",
    },
    header: {
      fontWeight: "bold",
      alignItems: "center",
      textAlign: "center",
      color: ' #27AE60',
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    cards: {
      padding: theme.spacing(4),
      color: " #FFFFFF",
      backgroundColor: ' #191d2b',
      borderRadius: "0.3px",
      border: "3px solid #7c8599",
    },
    section2: {
      margin: theme.spacing(2, 0),
      alignItems: "left",
      textAlign: "left",
    },
    center: {
      textAlign: "center",
      color: " #FFFFFF",
      fontFamily: "Montserrat-Bold",
    },
  })
);

export default useStyles;
