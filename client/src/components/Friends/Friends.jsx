import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as UserApi from '../../api/UserRequest.js'
import { getAllUser, getFollowingUsers } from '../../api/UserRequest.js';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const Friends = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -15,
            top: 10,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    
    // const [persons, setPersons] = useState([])

    // useEffect(() => {
    //     const fetchPersons = async () => {
    //         const { data } = await getAllUser()
    //         setPersons(data)
    //     }
    //     fetchPersons()
    // }, [])
    // const personCount = persons.length

    return (
        // <Box sx={{ minHeight: '38rem', backgroundColor: '#04081B', borderRadius: '22px' }} flex={4} p={1}>
        <Box sx={{ minHeight: '39rem', backgroundColor: '#212832', borderRadius: '22px 22px 0px 0px' }} flex={4} p={1}>
            <Stack direction="row" spacing={0.5} justifyContent="space-between">
                <Box flex={1} sx={{ backgroundColor: '#030512', padding: '1rem', justifyContent: 'center', display: 'flex', borderRadius: '4px' }}>
                    <Link to='' style={{ textDecoration: 'none', color: '#989080' }}> Following </Link>
                </Box>
                <Box flex={1} sx={{ backgroundColor: '#030512', padding: '1rem', justifyContent: 'center', display: 'flex', borderRadius: '4px' }}>
                    <Link to='followers' style={{ textDecoration: 'none', color: '#989080' }}> Followers</Link>
                </Box>
                <Box flex={1} sx={{ backgroundColor: '#030512', padding: '1rem', justifyContent: 'center', display: 'flex', borderRadius: '4px' }}>
                    <Link to='users' style={{ textDecoration: 'none', color: '#989080' }}> Users </Link>
                </Box>
            </Stack>
            <Outlet />
        </Box>
    )
}

export default Friends