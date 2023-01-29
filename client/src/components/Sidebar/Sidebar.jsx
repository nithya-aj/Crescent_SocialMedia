import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import MessageIcon from '@mui/icons-material/Message';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box  color={'white'} flex={0.8} p={1}>
            <Box position='fixed' sx={{width:'13rem'}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to='/home' activeClassName="Mui-selected" 
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}>
                            <ListItemIcon>
                                <WindowIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Feed" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to='/chat'
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemIcon>
                                <MessageIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Chat" />
                        </ListItemButton>
                    </ListItem>
                </List>
                {/* <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to='/notifications'
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemIcon>
                                <NotificationsActiveIcon sx={{ color: "white" }} />
                            </ListItemIcon >
                            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Notifications" />
                        </ListItemButton>
                    </ListItem>
                </List> */}
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to='/friends'
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}>
                            <ListItemIcon>
                                <GroupIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={`/profile/${user._id}`}
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}>
                            <ListItemIcon>
                                <PersonIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText sx={{ display: { xs: "none", sm: "block" } }} primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar