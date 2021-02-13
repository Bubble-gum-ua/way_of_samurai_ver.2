import React from "react";
import "./Dialogs.css";
import {Button, Grid, Input, makeStyles} from "@material-ui/core";

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

const Dialogs = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <div className="dialogsNames">
                        Margo
                    </div>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className="dialogsMessages">
                        HI
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Input placeholder="HER TYPE"> </Input>
                    <Button> Add message</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs;