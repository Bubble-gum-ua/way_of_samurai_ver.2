import React from "react";
import {Button, Input} from "@material-ui/core";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Input> Here </Input>
            <Button> ADD POSt</Button>
            <Post message=" HERE WE go again"/>
            <Post message=" But we afraid"/>
        </div>
    )
}

export default MyPosts;