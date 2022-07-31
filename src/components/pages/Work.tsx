import React, {VFC, useState} from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import {Dialog, Typography, Box} from '@mui/material';
import portfolioMain from "../../assets/images/works/portfolio/main.png";
import portfolioWork from "../../assets/images/works/portfolio/work.png";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@mui/material/Button";
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";
import CustomCarousel from "../atoms/carousels/Carousel";

const Work: VFC = () => {
    const [selectItem, setSelectItem] = useState<IItemData | null>(null);
    const openDialog = (item: IItemData) => {
        setSelectItem(item)
    }
    const closeDialog = () => {
        setSelectItem(null)
    }

    return (
        <ResponsiveDrawer thisPage='work'>
        <Box sx={{mt:{xs:'80px', sm:'5px'}}}>
                <Grid container justifyContent="center" spacing={4} className="text-center">
                    {itemData.map((item, index) => {
                        return (
                            <Grid item xs={6}>
                                <Box className="content-work-grid" onClick={() => {openDialog(item)}}>
                                    <div>
                                        <img src={item.img} style={{height: "100%", width: "100%"}}/>
                                    </div>
                                    <Typography variant="body1" textAlign="center">{item.name}</Typography>
                                    <Typography variant="body2" textAlign="center">{item.subscribe}</Typography>
                                </Box>

                                <Dialog open={item === selectItem} onClose={closeDialog}>
                                    <DialogTitle>{item.name}</DialogTitle>
                                    <DialogContent>
                                        <CustomCarousel imageItems={item.images}/>
                                        <DialogContentText>
                                            <Typography variant="body1" textAlign="center">
                                                {item.comment}
                                            </Typography>
                                        </DialogContentText>

                                        <DialogActions>
                                            <Button onClick={() => closeDialog()} variant='outlined'>
                                                <text className="text-center">
                                                    閉じる
                                                </text>
                                            </Button>
                                        </DialogActions>
                                    </DialogContent>
                                </Dialog>
                            </Grid>
                        );
                    })}
                </Grid>
        </Box>
        </ResponsiveDrawer>
    )
}

export default Work;


type IItemData = {
    img: string;
    name: string;
    subscribe: string;
    comment: string;
    images: string[]
}

const itemData:IItemData[] = [
    {
        img: portfolioMain,
        name: 'Yamashitaポートフォリオサイト',
        subscribe: "本サイト。React.js × TypeScriptで制作。",
        comment: 'React.jsとTypeScriptで作りました。今後ちょっとずつかっこ良くしていきます。',
        images: [portfolioMain, portfolioWork],
    },
];