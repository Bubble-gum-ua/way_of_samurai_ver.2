import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';

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
                <MenuList>
                    <MenuItem> <a href="/profile">My profile </a> </MenuItem>
                    <MenuItem> <a href="/dialogs">Messages </a> </MenuItem>
                    <MenuItem> <a href="/friends">Friends</a> </MenuItem>
                    <MenuItem> <a href="/settings">Settings</a> </MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}