import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FoxLogo from "../../../assets/images/fox-white.svg";
import aboutLogo from "../../../assets/images/icons/about_human.svg";
import skillsLogo from "../../../assets/images/icons/skillsets_dev.svg";
import worksLogo from "../../../assets/images/icons/works_pc_phone.svg";
import contactLogo from "../../../assets/images/icons/contact_mail.svg";

const drawerWidth = 130;

interface Props {
    window?: () => Window;
    children: JSX.Element;
    thisPage?: string;
}

export default function ResponsiveDrawer(props: Props) {
    const {window, children, thisPage} = props;
    const navigation = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <Toolbar>
                <img src={FoxLogo} alt='menu' width={80}
                     onClick={()=>navigation('/')}
                />
            </Toolbar>
            <Divider />
            <List>
                {['About', 'Skills', 'Works', 'Contact'].map((text, index) => {
                    let logo;
                    let route: string = '';
                        switch (text) {
                            case 'About':
                                logo = aboutLogo;
                                route = 'about';
                                break;
                            case 'Skills':
                                logo = skillsLogo;
                                route = 'skills';
                                break;
                            case 'Works':
                                logo = worksLogo;
                                route = 'work';
                                break;
                            case 'Contact':
                                logo = contactLogo;
                                route = 'contact';
                                break;
                            default:
                                break;
                        };
                    return(
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                selected={thisPage===route}
                                onMouseEnter={()=>console.log('イン')}
                                onMouseLeave={()=>console.log('アウト')}
                                onClick={()=>navigation(`/${route}`)}
                            >
                                <ListItemIcon>
                                    <img src={logo} alt={text} width={25} />
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    );
                }
                )}
            </List>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    display: { sm: 'none' }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{fontFamily: "Noto Serif JP"}}>
                        Masafumi Yamashita
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* リンクのコピーによるSEOへの対策 */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                style={{padding:'0px'}}
            >
                {children}
            </Box>
        </Box>
    );
}

