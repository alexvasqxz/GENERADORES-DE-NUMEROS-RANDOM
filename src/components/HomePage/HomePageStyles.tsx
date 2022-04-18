import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: ' #191d2b',
      minHeight: "100vh",
      color: ' #27AE60;',
      flexFlow: "1",
    },
    container: {
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
      color: ' #FFFFFF;',
    },
    text2: {
      fontFamily: "Montserrat-Bold",
      color: ' #27AE60;',
    },
    cards: {
      backgroundColor: ' #454e56',
      padding: theme.spacing(4),
      color: ' #b2becd',
      borderRadius: "0.3px",
      boxShadow: "7px 7px rgba(155, 167, 192, .8)",
      border: "3px solid #454e56",
      minHeight: "140px",
      "&:hover": {
        background: " #27AE60",
        color: ' #FFFFFF',
        border: "3px solid #27AE60",
      },
    },

    darkcard: {
      backgroundColor: ' #191d2b',
      padding: theme.spacing(4),
      borderRadius: "3px",
      boxShadow: "7px 7px rgba(155, 167, 192, .8)",
      border: "3px solid #27AE60",
      minHeight: "140px",
      color: ' #FFFFFF',

    },
    header: {
      fontWeight: "bold",
      textAlign: "center",
    },
    section2: {
      margin: theme.spacing(2),
    },
    content: {
      paddingTop: "2%",
    },
    section3: {
      margin: theme.spacing(1, 1, 1),
    },
  })
);

export default useStyles;
