import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";

import UseForm from "./useContact";

const contact = () => {
    return (
        <>
            <ResponsiveDrawer thisPage='contact'>
                <div>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} className="text-center">
                            <UseForm/>
                        </Grid>
                    </Grid>

                    <div className="text-center">
                        <h2 style={{fontFamily: "Noto Serif JP"}} className="margin-top-2">Q & A</h2>
                        <Typography component="p" variant="body1" textAlign="center" className="padding-3"
                                    style={{fontFamily: "Noto Serif JP"}}>
                            Q. 職務経歴書が見たいです<br/>
                            A. お問い合わせフォームにでご要望いただければお送りいたします。<br/><br/>
                            Q. zoomなどで打ち合わせはできますか？<br/>
                            A. もちろんです！<br/><br/>
                        </Typography>
                    </div>
                </div>
            </ResponsiveDrawer>
        </>
    );
};

export default contact;