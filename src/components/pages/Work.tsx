import React, {VFC, useState} from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import {Dialog, Typography} from '@mui/material';
import YamashitaSite from "../../assets/images/works/yamashitaWebSite.png";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@mui/material/Button";
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";
import CustomCarousel from "../atoms/carousels/Carousel";

// TODO:ダイアログを追加するでみられるようにする

const Work: VFC = () => {

    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const openDialog = () => setIsOpenDialog(true);
    const closeDialog = () => setIsOpenDialog(false);

    return (
        <ResponsiveDrawer thisPage='work'>
        <div>
            <div>
                <Grid container justifyContent="center" spacing={4} className="text-center">
                    {itemData.map((item) => {
                        return (
                            <Grid item xs={6}
                                // onClick={() => {openDialog()}}
                            >
                                <Item className="content-work-grid">
                                    <div>
                                        <img src={item.img}
                                             style={{height: "100%", width: "100%", border: "solid"}}/>
                                    </div>
                                    <Typography component="p" variant="body1"
                                                textAlign="center">{item.name}</Typography>
                                    <Typography component="p" variant="body2"
                                                textAlign="center">{item.subscribe}</Typography>
                                    <Dialog
                                        open={isOpenDialog}
                                    >
                                        <DialogTitle>{item.name}の感想</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                <Typography component="p" variant="body1" textAlign="center">
                                                    {item.comment}
                                                </Typography>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => closeDialog} variant="contained">
                                                <text className="text-center">
                                                    閉じる
                                                </text>
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <Grid container>
                <Grid item xs={12}>
                    <CustomCarousel/>
                </Grid>
            </Grid>
        </div>
        </ResponsiveDrawer>
    )
}

export default Work;


type itemDataType = {
    img: string;
    name: string;
    subscribe: string;
    comment: string;
}

const itemData:itemDataType[] = [
    {
        img: YamashitaSite,
        name: 'Yamashitaポートフォリオサイト',
        subscribe: "このサイトです。React.js × TypeScriptで制作。",
        comment: 'reactとtypeScriptの学習も兼ねて作りました。reactの状態管理はreduxを使いました。不恰好なサイトですが、今後もっとかっこ良くしていこうと思います。ちょっとパンチのあるサイトにしたいと思い、あえてナビゲーションバーを作らずにスクロールでやってみました。'
    },

];