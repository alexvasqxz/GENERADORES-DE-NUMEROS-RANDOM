import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    cards: {
      padding: theme.spacing(4),
      backgroundColor: ' #191d2b',
      color: ' #FFFFFF',
      borderRadius: "0.3px",
      border: "3px solid #7c8599",
  },
  center: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontFamily: "Montserrat-Bold",
  },
    textField: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    header: {
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
      color: ' #27AE60',
  },
  section2: {
    margin: theme.spacing(2, 0),
    color: ' #FFFFFF',
},
  })
);

export default useStyles;
