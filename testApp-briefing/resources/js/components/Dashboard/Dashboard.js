import React from "react";
import user from "../../auth/user";
import {Grid, Typography} from "@mui/material";
import MainLayout from "../MainLayout/MainLayout";
import Orders from "../Orders/Orders";

function Dashboard() {
    return (
        <MainLayout title={"Dashboard"}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Typography variant={"h5"}>
                        Hello {user.name}, you're logged in!
                    </Typography>
                </Grid>
                <Grid item>
                        <Orders />
                </Grid>

            </Grid>
        </MainLayout>
    )
}

export default Dashboard