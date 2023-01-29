import * as React from 'react';
import * as UserApi from '../../api/UserRequest.js'
import Box from '@mui/material/Box';
import FollowerUser from './FollowerUser';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import EmptyFriendsPage from '../EmptyFriendsPage/EmptyFriendsPage.jsx';

export default function FollowersUsers() {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [followerUsers, setFollowerUsers] = useState([])

  useEffect(() => {
    const fetchFollowerUsers = async () => {
      const { data } = await UserApi.getFollowersDetails(user._id)
      setFollowerUsers(data)
      console.log(data, 'data from followersDetails.jsx');
    }
    fetchFollowerUsers()
  }, [])

  return (
    <Box p={2}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {followerUsers.map((followerUser, id) => {
          if (followerUser._id !== user._id) {
            return (
              followerUser ? <FollowerUser followerUser={followerUser} key={id} /> : <EmptyFriendsPage />
            )
          }
        })}
      </Box>
    </Box>
  );
}
