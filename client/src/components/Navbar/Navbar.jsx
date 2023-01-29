import styled from '@emotion/styled';
import { AppBar, Avatar, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/AuthActions';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { user } = useSelector((state) => state.authReducer.authData)
    const firstUserLetter = Array.from(`${user.firstname}`)[0];
    const LogoLetter = firstUserLetter.toUpperCase();
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    });

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "#030512",
        padding: "0 10px",
        borderRadius: "4px",
        width: "30%",
        alignItems: 'center',
        display: 'flex',
        height: '2.6rem'
        // borderWidth:'medium'
    }))

    const Icons = styled(Box)(({ theme }) => ({
        backgroundColor: "#1E1E1E",
        height: "33px0",
        display: "flex",
        borderRadius: "5px",
        color: 'white',
        alignItems: "center",
    }))

    const handleLogout = () => {
        dispatch(logOut())
    }

    return (
        <AppBar position='fixed'>
            <StyledToolbar style={{ height: '72px', backgroundColor: "#060B25" }}>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" }, flexGrow: '4.5' }}>
                    <NavLink to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Crescent</NavLink>
                </Typography>
                <NavLink to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><NightsStayIcon sx={{ display: { xs: "block", sm: "none" } }}></NightsStayIcon></NavLink>
                {/* <Box sx={{display: { xs: "none", sm: "block" }}}> */}
                <Search style={{ flexGrow: '1', borderRadius: '33px', gap: '10px' }}>
                    <SearchIcon sx={{ fontSize: '1.3rem', color: '#989080' }} /><InputBase sx={{ color: '#989080' }} placeholder='Search...' />
                </Search>
                {/* </Box> */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: '10', justifyContent: 'flex-end' }}>
                    <Icons onClick={e => setOpen(true)} sx={{ cursor: 'pointer' }}>
                        <Typography px={'10px'} sx={{ display: { xs: "none", sm: "block" } }}>{user.firstname} </Typography>
                        <Avatar style={{ background: 'linear-gradient(98.63deg, #5725f9 0%, #f95f35 100%)' }} variant="rounded">{LogoLetter}</Avatar>
                    </Icons>
                </Box>
            </StyledToolbar>
            <Menu
                sx={{ mt: '45px' }}
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <NavLink style={{ textDecoration: 'none' }} to={`/profile/${user._id}`}><MenuItem>Profile</MenuItem></NavLink>
                <MenuItem >Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar