import { Alert, Box, Button, Grid } from "@mui/material";
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
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '25vh' }}
            >
                <Grid item xs={12} sx={{ minHeight: '25vh' }}></Grid>
                <Grid item xs={12}>
                    <h1 className="high-emphasis-text centered-text">How do you want to use the site</h1>
                </Grid>
                <Grid item xs={4} sx={{ minHeight: '10vh' }}>

                    <Button
                        onMouseOver={handleMouseOverInteractive}
                        onMouseOut={handleMouseOutInteractive}
                        className="mode-selection"
                        variant="outlined"
                        component={Link}
                        to="/interactive">
                        Interactive
                    </Button>
                    {isHoveringInteractive && (
                        <Alert severity="info">Interactive: An interactive 3D experience portfolio</Alert>
                    )}
                </Grid>
                <Grid item xs={4} sx={{ minHeight: '10vh' }}>
                    <Button
                        onMouseOver={handleMouseOverStatic}
                        onMouseOut={handleMouseOutStatic}
                        className="mode-selection"
                        variant="outlined"
                        component={Link}
                        to="/standard">
                        Standard
                    </Button>
                    {isHoveringStatic && (
                        <Alert severity="info">Static: Standard website portfolio</Alert>
                    )}
                </Grid>
            </Grid >
        </>
    );
}
