import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

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
        <BrowserRouter>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><Header/></Paper>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Paper className={classes.paper}><Navigation/></Paper>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Paper className={classes.paper}><Route path="/profile" component={Profile}/>
                            <Route path="/dialogs" component={Dialogs}/></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}><Footer/></Paper>
                    </Grid>
                </Grid>
            </div>
        </BrowserRouter>
    );
};