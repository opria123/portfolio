import React from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useGame from '../stores/useGame'
import { useEffect } from "react";
import Work from "./Work";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./Contact";
import Resume from "./Resume";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .css-1qxadfk-MuiPaper-root-MuiDialog-paper': {
    minWidth: '70%',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function DynamicModal() {
  const showModal = useGame((state) => state.showModal);
  const setShowModal = useGame((state) => state.setShowModal);
  const setIsMenuAbleToOpen = useGame((state) => state.setIsMenuAbleToOpen);
  const modalTarget = useGame((state) => state.modalTarget);

  let content;

  useEffect(() => {
    console.log(modalTarget);
    if (modalTarget === 'experience') {
      content = <Work />;
    } else {
      content = null;
    }
  }, [modalTarget]);


  const handleClose = () => {
    document.getElementsByTagName('canvas')[0].requestPointerLock();
    setShowModal(false)
    setIsMenuAbleToOpen(true)
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={showModal}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {modalTarget}
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
      {modalTarget === 'experience' && <Work/> }
      {modalTarget === 'about' && <About/> }
      {modalTarget === 'projects' && <Projects/> }
      {modalTarget === 'contact' && <ContactForm/> }
      {modalTarget === 'resume' && <Resume /> }
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}