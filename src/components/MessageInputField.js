import React from "react";
import { Grid,Avatar } from "@material-ui/core/"
import {makeStyles} from "@material-ui/core/styles"

import { gravatarPath } from "../gravatar";

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: "26px",
    }
});

const MessageInputField = ({ name }) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(`takosan8`);
    return(
    <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <Avatar src={avatarPath} />
            </Grid>
            <Grid item xs={10}>入力</Grid>
            <Grid item xs={1}>ボタン</Grid>
        </Grid>
    </div>
    )
}

export default MessageInputField;