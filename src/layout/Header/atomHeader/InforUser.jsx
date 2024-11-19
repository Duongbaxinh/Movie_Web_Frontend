import * as React from "react";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import { Box, Button, Divider, Link, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";



export default function InforUser(props) {
    const colors = useTheme();
    const { uSeriesnfor, handleLogout } = props;

    const listItem = [
        { id: 1, text: "Manage Store Movie", icon: <TheatersOutlinedIcon />, },
        { id: 2, text: "My favorite Movie", icon: <FavoriteBorderOutlinedIcon />, },
        { id: 3, text: "Lịch Sử Giao Dịch", icon: <AutoModeOutlinedIcon />, },
        { id: 4, text: "Thử Thách Pop vip", icon: <LocalActivityOutlinedIcon />, },
        { id: 5, text: "Miễn Phí Data", icon: <SignalCellularAltOutlinedIcon />, },
        { id: 6, text: "Setting", icon: <ManageAccountsOutlinedIcon />, },
    ];

    return (
        <Card
            sx={{
                width: "400px",
                position: "absolute",
                top: "50px",
                right: "10px",
                backgroundColor: "#1d1d1d",
                color: "#ffffff",
            }}
        >
            <CardHeader
                sx={{
                    "& > span": {
                        color: "#ffffff",
                    },
                }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src={uSeriesnfor?.avatar} style={{
                            width: "100%",
                            objectFix: "cover"
                        }} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" color="#ffffff">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={` Email: ${uSeriesnfor?.email}`}
                subheader={`id_User: ${uSeriesnfor?._id}`}
            />

            <List>
                <Link href={`/payment/${uSeriesnfor?.postStar}`}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: 'white',
                        padding: '20px'
                    }}>
                        <Typography>Post Star : {uSeriesnfor?.postStar} </Typography>
                        <Button sx={{ color: 'white', background: 'orange' }}>
                            Nạp Post Star
                        </Button>
                    </Box>
                </Link>


                {listItem.map((item) => (
                    <ListItemButton key={item.id}>
                        <ListItemIcon
                            sx={{
                                color: "#ffffff",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText

                            primary={`${item.text} ${item?.point} `}
                            sx={{
                                "& > span": {
                                    fontSize: "medium !important",
                                    fontFamily: "Arial !important",
                                },
                            }}
                        />
                    </ListItemButton>
                ))}<Divider sx={{
                    backgroundColor: "#ffffff"
                }} />
                <ListItemButton variant="contained"
                    sx={{
                        backgroundColor: "transparent",
                        color: "#ffffff",
                        width: "100%",
                        height: "40px"
                    }}
                    onClick={handleLogout}
                >
                    <ListItemIcon> <LogoutIcon htmlColor="#ffffff" /> </ListItemIcon>
                    <ListItemText primary={'Logo Out'} />
                </ListItemButton>
            </List>


        </Card>
    );
}
