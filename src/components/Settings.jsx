import React, { useContext, useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Routes, Route, Navigate, NavLink, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'



// import { Context } from "./app-context/context"



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        opacity: "0.90",
        minWidth: "50%",
        
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function SettingsModal() {
    const [modalState, setModalState] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClose = () => {
        console.log('testing')
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?showSettingsModal=false';
        window.history.pushState({ path: newurl }, '', newurl);
        setSearchParams(window.location.search);
        setModalState(false);
        document.getElementsByTagName('canvas')[0].requestPointerLock();
    };


    useEffect(() => {
        // execute on location change
        console.log(searchParams);
        if (searchParams.get('showSettingsModal') === 'true') {
            setModalState(true);
            document.exitPointerLock();
        }
    }, [searchParams, setSearchParams]);

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={modalState}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Settings
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    <Button
                        variant="contained"
                        onClick={() => {window.location.href = "/interactive"}}>
                        Reset
                    </Button>
                    <span className="setting-description">Resets the Character Position</span>
                </Typography>
                <Typography gutterBottom>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/">
                        Go Home
                    </Button>
                    <span className="setting-description">Goes back to the home page</span>
                </Typography>
                <h1>Controls</h1>
                <Typography gutterBottom>
                    <span className="control-character">W</span>
                    <span className="setting-description">Move Fowrward</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">A</span>
                    <span className="setting-description">Move Left</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">S</span>
                    <span className="setting-description">Move Backward</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">D</span>
                    <span className="setting-description">Move Right</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">F</span>
                    <span className="setting-description">Wave</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">Shift</span>
                    <span className="setting-description">Sprint</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">Space</span>
                    <span className="setting-description">Jump</span>
                </Typography>
                <Typography gutterBottom>
                    <span className="control-character">Backspace</span>
                    <span className="setting-description">Open Settings</span>
                </Typography>
            </DialogContent>
        </BootstrapDialog>
    );
}