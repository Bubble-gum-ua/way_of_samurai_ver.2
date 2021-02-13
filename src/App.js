import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Grid, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "none",
        border: "1px solid black",
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Header/></Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}><Navigation/></Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}><Profile/></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><Footer/></Paper>
                </Grid>

            </Grid>
        </div>
    );
};