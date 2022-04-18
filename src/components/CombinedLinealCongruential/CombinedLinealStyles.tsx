import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
        cards: {
            padding: theme.spacing(4),
            backgroundColor: ' #191d2b',
            color: ' #FFFFFF',
            borderRadius: "0.3px",
            border: "3px solid #7c8599",
        },
        textField:{
            marginBottom: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        section2: {
            margin: theme.spacing(2, 0),
        },
        imageCentered: {
            alignItems: "center",
            textAlign: "center",
        },
        media: {
            height: 0,
            paddingTop: "56.25%", // 16:9
        },
        header: {
            fontFamily: "Montserrat-Bold",
            textAlign: "center",
            color: ' #27AE60',
        },
        arrow: {
            color: " #ffffff",
          },
    })
);

export default  useStyles;