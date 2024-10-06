"use client";
import { useRouter } from 'next/navigation';
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
  const [open, setOpen] = React.useState(false);
const router = useRouter();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleInboxClick = () => {
router.push("/AddStudent")
  };

  const handleStarredClick = () => {
    console.log('Starred clicked');
    // Handle starred click
  };

  const handleSendEmailClick = () => {
    console.log('Send email clicked');
    // Handle send email click
  };

  const handleDraftsClick = () => {
    console.log('Drafts clicked');
    // Handle drafts click
  };

  const handleAllMailClick = () => {
    console.log('All mail clicked');
    // Handle all mail click
  };

  const handleTrashClick = () => {
    console.log('Trash clicked');
    // Handle trash click
  };

  const handleSpamClick = () => {
    console.log('Spam clicked');
    // Handle spam click
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleInboxClick}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="ADD STUDENT" />
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
            SCHOOL MANAGEMENT
          </Typography>
          <Button color="inherit" onClick={()=>{router.push("/")}}>Home</Button>
          <Button color="inherit" onClick={toggleDrawer(true)}>Dashboard</Button>
         
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
