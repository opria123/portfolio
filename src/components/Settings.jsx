import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import  useGame  from '../stores/useGame'


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

    const setShowSettings = useGame((state) => state.setShowSettings);
    const showSettings = useGame((state) => state.showSettings);


    const handleClose = () => {
        setShowSettings(false);
        document.getElementsByTagName('canvas')[0].requestPointerLock();
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={showSettings}
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
                        onClick={() => {setShowSettings(false); window.location.href = "/interactive"}}>
                        Reset
                    </Button>
                    <span className="setting-description">Resets the Character Position</span>
                </Typography>
                <Typography gutterBottom>
                    <Button
                        variant="contained"
                        onClick={() => {setShowSettings(false); window.location.href = "/"}}>
                        Go Home
                    </Button>
                    <span className="setting-description">Goes back to the home page</span>
                </Typography>
                <h1>Controls</h1>
                <Typography gutterBottom>
                    <span className="control-character">W</span>
                    <span className="setting-description">Move Forward</span>
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
                <Typography gutterBottom>
                    <span className="control-character">Enter</span>
                    <span className="setting-description">Interact to open promts</span>
                </Typography>
            </DialogContent>
        </BootstrapDialog>
    );
}
