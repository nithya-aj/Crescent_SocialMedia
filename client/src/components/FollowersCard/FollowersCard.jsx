import React, { useState } from 'react'
import PostShareModalButton from '../PostShareModalButton/PostShareModalButton.jsx';
import OnlineFriends from '../OnlineFriends/OnlineFriends.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequest.js';
import { Box, Pagination, Typography } from '@mui/material';
import styled from '@emotion/styled';

const FollowersCard = () => {

    const MyPagination = styled(Pagination)({
        '& .Mui-selected': {
            backgroundColor: 'black',
            color: 'white',
        },
    });

    const { user } = useSelector((state) => state.authReducer.authData)
    const [persons, setPersons] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
            setPersons(data)
            console.log(data, 'data from FollowersCard.jsx');
        }
        fetchPersons()
    }, [])

    return (
        <Box sx={{ color: 'white', marginTop: '5rem' }} flex={1} p={1} >
            <Box position='fixed'>
                <Typography sx={{ paddingBottom: '10px' }} variant='h6' fontWeight={100}>People you may know</Typography>
                <Box sx={{ height: '28rem' }}>
                    {persons.map((person, id) => {
                        if (person._id !== user._id) {
                            return (
                                <OnlineFriends person={person} key={id} />
                            )
                        }
                    })}
                </Box>
                <MyPagination count={3} variant="outlined" color='secondary'
                    sx={{ paddingBottom: '4rem' }}
                    defaultPage={page}
                    onChange={(event, value)=> setPage(value) }
                />
            </Box>
            <PostShareModalButton />
        </Box>
    )
}

export default FollowersCard