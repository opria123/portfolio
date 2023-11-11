import { Alert, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


export default function Home() {
    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
    const [isHoveringStatic, setIsHoveringStatic] = useState(false);
    const [width, setWidth] = useState<number>(window.innerWidth);


    const handleMouseOverInteractive = () => {
        setIsHoveringInteractive(true);
    };

    const handleMouseOutInteractive = () => {
        setIsHoveringInteractive(false);
    };


    const handleMouseOverStatic = () => {
        setIsHoveringStatic(true);
    };

    const handleMouseOutStatic = () => {
        setIsHoveringStatic(false);
    };

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    if (isMobile) {
        window.location.href = '/standard';
    }

    return (
        <>
            <Grid
                container
                spacing={1}
                direction="row"
            >
                <Grid item xs={12} sx={{ minHeight: '25vh' }}></Grid>
                <Grid item xs={2} xl={1} />
                <Grid item xs={10}>
                    <h1 className="high-emphasis-text centered-text">How do you want to use the site</h1>
                </Grid>
                <Grid item xs={5} xl={4} />
                <Grid item xs={2} >
                    <Link style={{ textDecoration: "none" }} to="/interactive">
                        <Card sx={{ height: "100%", maxWidth: "95%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/interactive.png"
                                    alt="containers"
                                    sx={{ minHeight: "20vh" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Interactive
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Experience the site through a 3d interactive world.
                                        Where you can walk around and interact with nodes to see the portfolio.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link style={{ textDecoration: "none" }} to="/standard">
                        <Card sx={{ maxWidth: "95%", height: "100%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/standard.png"
                                    alt="containers"
                                    sx={{ minHeight: "20vh" }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Standard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Experience the website as you would any other website.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            </Grid >
        </>
    );
}
