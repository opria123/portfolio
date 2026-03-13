import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Joshua Opria
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="linkedin" disablePadding>
          <ListItemButton
            component="a"
            href="https://www.linkedin.com/in/joshua-opria/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary="LinkedIn" />
          </ListItemButton>
        </ListItem>
        <ListItem key="github" disablePadding>
          <ListItemButton
            component="a"
            href="https://github.com/opria123"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary="GitHub" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Joshua Opria
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <a key={item} href={'/' + item}>
                <Button sx={{ color: '#fff' }}>
                  {item}
                </Button>
              </a>
            ))}
            <a href="https://www.linkedin.com/in/joshua-opria/" target="_blank" rel="noopener noreferrer">
              <Button sx={{ color: '#fff' }}>LinkedIn</Button>
            </a>
            <a href="https://github.com/opria123" target="_blank" rel="noopener noreferrer">
              <Button sx={{ color: '#fff' }}>GitHub</Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}