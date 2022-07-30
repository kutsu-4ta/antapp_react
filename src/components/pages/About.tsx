import React from "react";
import "./style.css";
import ProfileImage from "../../assets/images/profile_kari.png";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from '@mui/material';
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";

const about = () => {
    return (
        <>
            <ResponsiveDrawer thisPage='about'>
            <Grid container justifyContent="center" className="padding-3 margin-top-2">
                <Grid item xs={12} className="text-size-sub-title content-flex-center">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} className="content-flex-center">
                            <Typography
                                component="p"
                                variant="h5"
                                fontWeight="bold"
                                textAlign="center"
                                mb="8px"
                                style={{fontFamily: "Noto Serif JP"}}
                            >山下 将史
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="text-size-sub-title content-flex-center">
                            <Typography
                                component="p"
                                variant="h6"
                                textAlign="center"
                                mb="8px"
                                style={{fontFamily: "Noto Serif JP"}}
                            >Masafumi Yamashita
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {/*<Grid item xs={4} className="content-flex-center">*/}
                {/*    <Item>*/}
                {/*        <img src={ProfileImage} className="image-about" alt="profile"/>*/}
                {/*    </Item>*/}
                {/*</Grid>*/}

                <Grid item xs={12} className="text-size-body">

                    <Item className="margin-top-2">
                        <Typography
                            component="p"
                            variant="inherit"
                            textAlign="left"
                            mb={10}
                            style={{fontFamily: "Noto Serif JP"}}
                        >
                            <h3>webエンジニアになった経緯</h3>
                            大学では情報系を専攻し、Pythonを用いた機械学習の研究をしていました。<br/>
                            当時は機械系のプログラミングを行っていましたが、在学中にWeb技術に惹かれweb技術を勉強しました。<br/>
                            在学中にアルバイトとしてwebエンジニアとしてのキャリアをスタートしました。<br/>
                        </Typography>
                        <Typography
                            component="p"
                            variant="inherit"
                            textAlign="left"
                            mb={10}
                            style={{fontFamily: "Noto Serif JP"}}
                        >
                            <h3>フリーランスになった経緯</h3>
                            新卒入社した企業で自社開発の実務を積みました。<br/>
                            自社のプロダクトチームは少数で構成されており、自社開発の全工程に携らせていただきました。<br/>
                            仕事をする中で、「自分で会社を経営したい」という思いが強くなり、起業を決意しました。<br/>
                            現在は、法人化を見据えて個人事業主としてお仕事をさせていただいております。<br/>
                        </Typography>
                        <Typography
                            component="p"
                            variant="inherit"
                            textAlign="left"
                            mb={10}
                            style={{fontFamily: "Noto Serif JP"}}
                        >
                            <h3>お仕事について</h3>
                            JavaScript、TypeScriptを使ったフロントエンド開発が得意です。<br/>
                            バックエンド開発においてはLaravelを使ったシステム開発が得意です。<br/>
                            サーバ環境構築の経験もございます。<br/>
                            UX・UIなどデザインスキルに関しては現在勉強中のため、実務レベルには至っておりません。<br/>
                            お客様の方でデザインなどをご提示いただければ助かります。<br/>
                            お仕事のご契約については成果報酬型の請負契約をメインに承っております。<br/>
                            お見積り依頼につきましては、本サイトのフォームよりお気軽にお問合せください。<br/>
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12} className="text-size-body">

                </Grid>
            </Grid>
            </ResponsiveDrawer>
        </>
    );
};

export default about;