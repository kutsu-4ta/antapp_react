/**
 * NOTE: [機能] homeコンポーネント
 *
 * 当初はルーティングで各ページに飛ばそうと思っていたが、一ページで完結させる方向にした。
 * スクロールを効果的に使ってUXを高めたいので、少しややこしくなったが、各要素にrefを貼った。
 * BodyItemに各ページの情報を定義して、homeコンポーネントのreturnの中でmapでループすることで各ページの要素をレンダリングしている。
 * その際にindex値をidに指定することで、ref.currentから要素にアクセスできるようになっている。
 *
 * ナビゲーションバーは当初App.tsxに配置していたが、同じrefを使うかもと思ったので、home.tsxにまとめて書いた。
 * この辺りは今後共通化やリファクタリングを進めたい。
 */

import React  from 'react';
import Grid from "@mui/material/Grid";
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InfiniteBanner from "../molecules/banners/InfiniteBanner";
import Banner from '../../assets/images/banner.png';

// ナビゲーションバー
import {Stack, Typography} from "@mui/material";
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";
import BackImage from "../../assets/images/home/bird.png";
import BackImagePhone from "../../assets/images/home/bird_phone.png";

export default () => {
    return (
        <>
            {/*{window.addEventListener('resize', resize)}*/}
            <ResponsiveDrawer>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12}/>

                        {/* PC */}
                        <Grid item xs={12} textAlign='center'
                              style={{
                                  backgroundImage: `url(${BackImage})`,
                                  minHeight: '100vh',
                                  backgroundSize: 'cover'
                              }}
                              sx={{display:{xs:'none', sm:'block'}}}
                        >
                            <Stack>
                                <Typography mt={20} style={{fontFamily: 'Noto Serif JP', color: '#f5f5f5'}}>
                                    <h1>Masafumi Yamashita</h1>
                                </Typography>
                            </Stack>
                            <Stack mt={50} mr={5} ml={5}>
                                <InfiniteBanner src={Banner} height={80}/>
                            </Stack>
                        </Grid>

                        {/* mobile */}
                        <Grid item xs={12} textAlign='center'
                              style={{
                                  backgroundImage: `url(${BackImagePhone})`,
                                  minHeight: '100vh',
                                  backgroundSize: 'cover',
                              }}
                              sx={{display:{xs:'block', sm:'none'}}}
                        >
                            <Stack>
                            <Typography mt={20} style={{fontFamily: 'Noto Serif JP', color: '#f5f5f5'}}>
                                <h1>Masafumi Yamashita</h1>
                            </Typography>
                        </Stack>
                            <Stack mt={50} mr={5} ml={5}>
                                <InfiniteBanner src={Banner} height={40}/>
                            </Stack>
                        </Grid>

                        <Grid item xs={12}/>
                        {/*<img src={BackImage} width='100%'/>*/}
                    </Grid>
            </ResponsiveDrawer>
        </>
    );
};