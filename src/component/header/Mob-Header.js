import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CustomizedTreeView from './MenuItems';
import './NavigationMenu.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function TemporaryDrawer({ isMobile }) {
  const { pathname, hash } = useLocation();
  const [currentPath, setCurrentPath] = React.useState('');
  const [state, setState] = React.useState(false);
  // toggleDrawer('right', true)

  useEffect(() => {
    setCurrentPath((prev) => {
      console.log(prev, pathname);
      // if (prev !== currentPath) {
      toggleDrawer(false);
      // }
      return pathname;
    });
  }, [pathname, hash]);

  useEffect(() => {
    console.log(hash.split('#')[1]);

    setTimeout(() => {
      if (hash && hash.split('#')[1]) {
        var access = document.getElementById(hash.split('#')[1]);
        access.scrollIntoView({ behavior: 'smooth' }, true);
      }
    }, 300);
  }, [hash]);

  const toggleDrawer = (open) => {
    setState(open);
  };

  // console.log(hash);

  return (
    <div>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon style={{ color: isMobile ? 'white' : 'black' }} color='action' />
      </IconButton>
      <Drawer
        style={{
          minWidth: '250px',
        }}
        disableScrollLock='false'
        anchor={'right'}
        open={state}
        onClose={() => toggleDrawer(false)}
      >
        <CustomizedTreeView onClose={() => toggleDrawer(false)} />
      </Drawer>
    </div>
  );
}
