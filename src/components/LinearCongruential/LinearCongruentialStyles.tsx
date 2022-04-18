import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: ' #191d2b',
      minHeight: "100vh",
      color: ' #FFFFFF',
      flexFlow: "1",
      padding: theme.spacing(2),
    },
    text: {
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
    },
    text2: {
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
      color: ' #27AE60',
    },
    content: {
      paddingTop: theme.spacing(3),
    },
    center: {
      textAlign: "center",
      color: theme.palette.primary.main,
      fontFamily: "Montserrat-Bold",
    },
    arrow: {
      color: " #ffffff",
    },
  })
);

export default useStyles;
