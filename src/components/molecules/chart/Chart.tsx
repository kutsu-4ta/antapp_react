import React from "react";
import "./style.css";
import {Box, Stack, Typography, Paper, Grid, Tooltip } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {styled} from "@mui/material/styles";
import javaScriptIcon from "../../../assets/images/LanguageLogo/javascript.svg";
import typeScriptIcon from "../../../assets/images/LanguageLogo/typescript-icon.svg";
import phpIcon from "../../../assets/images/LanguageLogo/php.svg";
import flutterIcon from "../../../assets/images/LanguageLogo/flutter.svg";
import reactIcon from "../../../assets/images/LanguageLogo/react.svg";
import laravelIcon from "../../../assets/images/LanguageLogo/laravel.svg";
import vueIcon from "../../../assets/images/LanguageLogo/vue.svg";
import githubIcon from "../../../assets/images/LanguageLogo/github-icon.svg";
import wordpressIcon from "../../../assets/images/LanguageLogo/wordpress.png";
import mysqlIcon from "../../../assets/images/LanguageLogo/mysql.png";
import dockerIcon from "../../../assets/images/LanguageLogo/docker.png";
import Sentence from "../../atoms/texts/Sentence";

interface IChartData {
    name: string,
    value: number,
    color: string,
}

interface chartData {
    data: IChartData[]
}

const Chart = (props: chartData ): JSX.Element => {
    const { data } = props
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 15,
        borderRadius: 10,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 10,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <Box pt='10px'>
            <Stack>
                {data.map((item, index) => {
                    let icon;

                    switch (item.name) {
                        case 'TypeScript':
                            icon = typeScriptIcon;
                            break;
                        case 'JavaScript':
                            icon = javaScriptIcon;
                            break;
                        case 'PHP':
                            icon = phpIcon;
                            break;
                        case 'Flutter':
                            icon = flutterIcon;
                            break;
                        case 'Laravel':
                            icon = laravelIcon;
                            break;
                        case 'Vue.js':
                            icon = vueIcon;
                            break;
                        case 'GitHub':
                            icon = githubIcon;
                            break;
                        case 'React.js':
                            icon = reactIcon;
                            break;
                        case 'WordPress':
                            icon = wordpressIcon;
                            break;
                        case 'MySQL':
                            icon = mysqlIcon;
                            break;
                        case 'Docker':
                            icon = dockerIcon;
                            break;
                        default:
                            break;
                    }

                    return (
                        <Stack mt={1} mb={4}>
                            <Grid container sx={{mt: {xs: '30px', sm: '5px'}}}>
                                <Grid item xs={2} sx={{height: {xs: '30px', sm: '30px'}}} textAlign='center'>
                                    <Tooltip disableFocusListener disableTouchListener placement='left' title={item.name}>
                                        <img src={icon} alt={item.name} style={{maxHeight: '100%'}}/>
                                    </Tooltip>
                                    <Typography textAlign='center' fontSize={12} display={{xs: 'block', sm: 'none'}}>
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <Stack>
                                    <BorderLinearProgress variant="determinate" value={item.value}
                                                          valueBuffer={100 - item.value}/>
                                    </Stack>
                                    <Stack justifyContent="space-between" direction='row'>
                                        <Sentence text={'Lv.1'}/>
                                        <Sentence text={'Lv.50'}/>
                                        <Sentence text={'Lv.100'}/>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    );
                })
                }
            </Stack>
            <Stack>

            </Stack>
        </Box>
    );
};

export default Chart;
