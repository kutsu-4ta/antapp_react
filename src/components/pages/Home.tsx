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

import React, {useRef, useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import './style.css';
import javaScriptIcon from "../../assets/images/LanguageLogo/javascript.svg";
import typeScriptIcon from "../../assets/images/LanguageLogo/typescript-icon.svg";
import phpIcon from "../../assets/images/LanguageLogo/php.svg";
import flutterIcon from "../../assets/images/LanguageLogo/flutter.svg";
import reactIcon from "../../assets/images/LanguageLogo/react.svg";
import laravelIcon from "../../assets/images/LanguageLogo/laravel.svg";
import vueIcon from "../../assets/images/LanguageLogo/vue.svg";
import githubIcon from "../../assets/images/LanguageLogo/github-icon.svg";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from '../../assets/images/Home_banner.png';
import InfiniteBanner from "../molecules/banners/InfiniteBanner";

// スタイル
import ScrollFader, {useObserver} from '../scrollEvent/Fader';
import HomeSmall from "../../assets/images/Home_small.png";
import HomeMiddle from "../../assets/images/Home_middle.png";
import HomeLarge from "../../assets/images/Home_large.png";
import HomeXXLarge from "../../assets/images/Home_xxlarge.png";

// アイコン
import HumanIcon from "../../assets/images/icons/about_human.svg";
import WorksIcon from "../../assets/images/icons/works_pc_phone.svg";
import ContactIcon from "../../assets/images/icons/contact_mail.svg";
import SkillSetIcon from "../../assets/images/icons/skillsets_dev.svg";

// ナビゲーションバー
import HumanNavIcon from "../../assets/images/icons/human_small_white.svg";
import WorksNavIcon from "../../assets/images/icons/works_small_white.svg";
import ContactNavIcon from "../../assets/images/icons/mail_small_white.svg";
import SkillSetNavIcon from "../../assets/images/icons/skillset_small_white.svg";
import {Stack, Typography} from "@mui/material";
import ResponsiveDrawer from "../molecules/drawer/ResponsiveDrawer";
import BackImage from "../../assets/images/bird.png";
import infiniteBanner from "../molecules/banners/InfiniteBanner";

type BodyItem = {
    pageName: string;
    icon: any | undefined;
    navIcon: any | undefined;
    backGroundColor: string;
};

const BodyItems: BodyItem[] = [
    {pageName: "about", icon: HumanIcon, navIcon: HumanNavIcon,backGroundColor: "#fa9f3b"},
    {pageName: "skillSet", icon: SkillSetIcon, navIcon: SkillSetNavIcon,backGroundColor: "#ff7f50"},
    {pageName: "works", icon: WorksIcon, navIcon: WorksNavIcon,backGroundColor: "#4a9b9b"},
    {pageName: "contact", icon: ContactIcon, navIcon: ContactNavIcon,backGroundColor: "#649f5d"}
];

export default () => {

    const [widthState, setWidthState] = useState(window.innerWidth);
    const [heightState, setHeightState] = useState(window.innerHeight);
    const [homePicture, setHomePicture] = useState(HomeXXLarge);
    const [displayColorState, setDisplayColorState] = useState("#00ffff");
    // モバイル機能
    const [activeIdState, setActiveIdState] = useState<number | undefined>(undefined);
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        30,
    );

    useEffect(() => {
        resize();
        // console.log(isWork);
    })

    // ナビゲーションバー
    const navRef = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));
    type StyleActiveNavButton = (id: number) => string;
    const styleActiveNavButton: StyleActiveNavButton = (id) => 'border: solid #808080; opacity: 1; background:' + BodyItems[id].backGroundColor + ';';
    const styleNavButton = 'border: solid #808080; opacity: 0.8;';

    const handleMouseEnter = (id: number) => {
        setDisplayColorState(BodyItems[id].backGroundColor)
        return (navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style', styleActiveNavButton(id)) : '');
    }

    const handleMouseLeave = (id: number) => {
        setDisplayColorState("#00ffff")
        return (navRef.current[id].current?.getAttribute('style') ? navRef.current[id].current?.setAttribute('style', styleNavButton) : '');
    }

    // モバイルの機能
    const onScroll = () => {
        console.log('スクロール')
        getActiveElementId();
        setValue(window.scrollY);
    }
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
        window.scroll(0,typeof value === 'number' ? value : 0);
    };

    // const getActiveElementName = () =>{
    //     let elementName = 'home';
    //     BodyItems.map((item, id) => {
    //         if(useObserver(ref.current[id])){
    //             console.log(BodyItems[id].pageName)
    //             console.log(id)
    //             elementName = BodyItems[id].pageName;
    //         }
    //     });
    //     return (elementName);
    // }

    const getActiveElementId = () =>{
        if(aboutRef){
            setActiveIdState(0)
            // console.log('ok');
        }else if(skillSetRef){
            setActiveIdState(1)
            // console.log('OK')
        }else if(workRef){
            setActiveIdState(2)
            // console.log('OK')
        }else if(contactRef){
            setActiveIdState(3)
            // console.log('OK')
        }
    }

    // ボディ
    const ref = useRef(BodyItems.map(() => React.createRef<HTMLDivElement>()));

    const aboutRef = useObserver(ref.current[0]);
    const skillSetRef = useObserver(ref.current[1]);
    const workRef = useObserver(ref.current[2]);
    const contactRef = useObserver(ref.current[3]);


    const scrollToView = (id: number | undefined | null) => {
        setActiveIdState(typeof id === 'number' ? id : undefined )

        return ((id !== null) && (id !== undefined) ? ref.current[id]!.current!.scrollIntoView({behavior: "smooth"}) : window.scroll({top: 0, behavior: 'smooth'}));
    }

    const resize = () => {
        console.log('resize');
        setWidthState(window.innerWidth);
        setHeightState(window.innerHeight);
        console.log(widthState);
        if (widthState < 900 && heightState < 200) {
            setHomePicture(HomeSmall);
        } else if (widthState < 1400 && heightState < 800) {
            setHomePicture(HomeMiddle);
        } else if (widthState < 1500 && heightState < 950) {
            setHomePicture(HomeLarge);
        } else {
            setHomePicture(HomeXXLarge);
        }

    }
    return (
        <>
            {/*{window.addEventListener('resize', resize)}*/}
            <ResponsiveDrawer>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12}/>
                        <Grid item xs={12} textAlign='center'
                              style={{
                                  backgroundImage: `url(${BackImage})`,
                                  minHeight: '100vh',
                                  backgroundSize: 'cover'
                              }}>
                            <Stack>
                                <Typography mt={20} style={{fontFamily: 'Noto Serif JP', color: '#f5f5f5'}}>
                                    <h1>Masafumi Yamashita</h1>
                                </Typography>
                            </Stack>
                            <Stack mt={50} mr={5} ml={5}>
                                <InfiniteBanner/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}/>
                        {/*<img src={BackImage} width='100%'/>*/}
                    </Grid>
            </ResponsiveDrawer>
        </>
    );
};