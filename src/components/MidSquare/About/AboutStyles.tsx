import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
    },
    header: {
      fontWeight: "bold",
      alignItems: "center",
      textAlign: "center",
      color: ' #27AE60',
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    cards: {
      padding: theme.spacing(4),
      color: ' #FFFFFF',
      backgroundColor: ' #191d2b',
      borderRadius: "0.3px",
      border: "1px solid #7c8599",
    },
    section2: {
      margin: theme.spacing(2, 0),
      alignItems: "left",
      textAlign: "left",
    },
    imageCentered: {
      alignItems: "center",
      textAlign: "center",
    },
  })
);

export default useStyles;
