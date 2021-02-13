import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import "./Navigation.css"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
        boxShadow: "none"
    },
}));

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <MenuList className="nav">
                    <MenuItem> <NavLink to="/profile">My profile </NavLink> </MenuItem>
                    <MenuItem> <NavLink to="/dialogs">Messages </NavLink> </MenuItem>
                    <MenuItem> <NavLink to="/friends">Friends</NavLink> </MenuItem>
                    <MenuItem> <NavLink to="/settings">Settings</NavLink> </MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}