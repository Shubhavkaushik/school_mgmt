"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(true); // Start with the drawer open

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleInboxClick = () => {
    console.log('Inbox clicked');
  };

  const handleStarredClick = () => {
    console.log('Starred clicked');
  };

  const handleSendEmailClick = () => {
    console.log('Send email clicked');
  };

  const handleDraftsClick = () => {
    console.log('Drafts clicked');
  };

  const handleAllMailClick = () => {
    console.log('All mail clicked');
  };

  const handleTrashClick = () => {
    console.log('Trash clicked');
  };

  const handleSpamClick = () => {
    console.log('Spam clicked');
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleInboxClick}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleStarredClick}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleSendEmailClick}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Send email" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleDraftsClick}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleAllMailClick}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="All mail" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleTrashClick}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleSpamClick}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>
          <Button color="inherit" onClick={toggleDrawer}>
            {open ? 'Hide Drawer' : 'Show Drawer'}
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            width: 250,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 250,
              boxSizing: 'border-box',
            },
          }}
        >
          {DrawerList}
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          {/* Main content goes here */}
          <Typography >
            Main content area
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
