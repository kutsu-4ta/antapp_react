import React from "react";
import Grid from "@mui/material/Grid";
import "./style.css";
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";
import Chart from "../molecules/chart/Chart";
import {Stack, Typography, Box} from "@mui/material";

type SkillSet = () => JSX.Element;
const SkillSet: SkillSet = () => {

    return (
            <ResponsiveDrawer thisPage={'skills'}>
                <Box>
                    <Grid item xs={12} sx={{mt:{xs:'80px', sm:'5px'}, ml: {xs: '10px', sm: '200px'}, mr: {xs: '10px', sm: '200px'}, mb:'40px'}}>
                        <Stack>
                            <Typography fontSize={16} >
                                実務で使ったことのある言語とフレームワークを表にしました。<br/>
                                Lv.100は専門書執筆レベルだと想定しています。
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid container justifyContent="center">
                        <Grid item xs={12} sx={{ml: {xs: '10px', sm: '200px'}, mr: {xs: '10px', sm: '200px'}}}>
                            <Stack>
                                <Typography component='h2' fontSize={20}>開発言語</Typography>
                            </Stack>
                            <Stack>
                                <Chart data={languageData}/>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} mt={10} sx={{ml: {xs: '10px', sm: '200px'}, mr: {xs: '10px', sm: '200px'}}}>
                            <Stack>
                                <Typography component='h2' fontSize={20}>フレームワーク・ツール</Typography>
                            </Stack>
                            <Stack>
                                <Chart data={flameworkData}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </ResponsiveDrawer>
    );
};

export default SkillSet;

const languageData = [
    {
        name: "TypeScript",
        value: 60,
        color: "#eec263"
    },
    {
        name: "JavaScript",
        value: 70,
        color: "#eec263"
    },
    {
        name: "Flutter",
        value: 30,
        color: "#2e8b57"
    },
    {
        name: "PHP",
        value: 70,
        color: "#4169e1"
    },
    {
        name: "MySQL",
        value: 30,
        color: "#4169e1"
    }
];

const flameworkData = [
    {
        name: "React.js",
        value: 70,
        color: "#eec263"
    },
    {
        name: "Vue.js",
        value: 70,
        color: "#eec263"
    },
    {
        name: "Laravel",
        value: 80,
        color: "#4169e1"
    },
    {
        name: "WordPress",
        value: 60,
        color: "#4169e1"
    },
    {
        name: "Docker",
        value: 70,
        color: "#4169e1"
    }
];