import React, {ReactNode} from "react";
import { BarChart, Bar, XAxis, YAxis, Rectangle} from "recharts";
import "./style.css";
import {LayoutType} from "recharts/types/util/types";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Box } from '@mui/material';

type DataItem = {
    name: string;
    value: number;
    color: string;
};

type ChartProps = {
    data: DataItem[];
    children: ReactNode;
    layoutType?: LayoutType | undefined;
};


const Rechart: React.FC<ChartProps> = ({ data , children,layoutType}) => {
    const barHeight = 35;
    const barWidth = window.innerWidth;
    return (
        <Box sx={{mb:2}}>
            {/*PC*/}
            <Grid container justifyContent="center" sx={{display: {xs: 'none'}}}>
                <Grid item xs={12}>
                    <Box style={{marginTop: "3rem", paddingBottom: "1rem"}}>{children}</Box>
                </Grid>

                <Grid item xs={12} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    {data.map(item => {
                            return (
                                <BarChart
                                    data={[item]}
                                    layout={layoutType}
                                    margin={{top: 0, right: 0, left: 60, bottom: 0}}
                                    width={barWidth-1000}
                                    height={barHeight}
                                    barSize={16}
                                >
                                    <Bar
                                        dataKey="value"
                                        animationEasing="ease-in-out"
                                        animationBegin={1000}
                                        fill={item.color}
                                        shape={<Rectangle className="rectangle" radius={[10, 10, 10, 10]}/>}
                                    />
                                    <XAxis
                                        domain={[0, 100]}
                                        type="number"
                                        axisLine={false}
                                        hide={true}
                                    />
                                    <YAxis
                                        dataKey=""
                                        type="category"
                                        axisLine={false}
                                    />
                                </BarChart>
                            )
                        }
                    )}
                    <BarChart
                        data={[
                            {
                                name: "",
                                value: 0.0,
                                color: "#eec263"
                            }
                        ]}
                        layout={layoutType}
                        margin={{top: 0, right: 0, left: 60, bottom: 0}}
                        width={barWidth-1000}
                        height={barHeight}
                        barSize={16}
                    >
                        <XAxis
                            domain={[0, 100]}
                            type="number"
                            axisLine={false}
                            hide={false}
                        />
                        <YAxis
                            dataKey=""
                            type="category"
                            axisLine={false}
                        />
                    </BarChart>
                </Grid>
                <Grid item xs={12} className="text-center">
                    (自信ある度)
                </Grid>
            </Grid>

            {/*Mobile*/}
            <Grid container justifyContent="center" sx={{display: {sm: 'block'}}}>
                <Grid item xs={12}>
                    <Box style={{marginTop: "3rem", paddingBottom: "1rem"}}>{children}</Box>
                </Grid>

                <Grid item xs={12} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    {data.map(item => {
                            return (
                                <BarChart
                                    data={[item]}
                                    layout={layoutType}
                                    margin={{top: 0, right: 0, left: 60, bottom: 0}}
                                    width={barWidth}
                                    height={barHeight}
                                    barSize={16}
                                >
                                    <Bar
                                        dataKey="value"
                                        animationEasing="ease-in-out"
                                        animationBegin={1000}
                                        fill={item.color}
                                        shape={<Rectangle className="rectangle" radius={[10, 10, 10, 10]}/>}
                                    />
                                    <XAxis
                                        domain={[0, 100]}
                                        type="number"
                                        axisLine={false}
                                        hide={true}
                                    />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        axisLine={false}
                                    />
                                </BarChart>
                            )
                        }
                    )}
                    <BarChart
                        data={[
                            {
                                name: "",
                                value: 0.0,
                                color: "#eec263"
                            }
                        ]}
                        layout={layoutType}
                        margin={{top: 0, right: 0, left: 60, bottom: 0}}
                        width={barWidth}
                        height={barHeight}
                        barSize={16}
                    >
                        <XAxis
                            domain={[0, 100]}
                            type="number"
                            axisLine={false}
                            hide={false}
                        />
                        <YAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                        />
                    </BarChart>
                </Grid>
                <Grid item xs={12} className="text-center">
                    (自信ある度)
                </Grid>
            </Grid>
        </Box>
    );
};

export default Rechart;
