import * as React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import * as UserApi from '../../api/UserRequest.js'
import { useState } from 'react';
import { useEffect } from 'react';
import FollowingUser from './FollowingUser';

export default function FollowingUsers() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [followingUsersData, setFollowingUsersData] = useState([])

  useEffect(() => {
    const fetchFollowingUsers = async () => {
      const { data } = await UserApi.getFollowingUsers(user._id)
      setFollowingUsersData(data)
      console.log(data, 'data from followingUsers.jsx');
    }
    fetchFollowingUsers()
  }, [])

  return (
    <Box p={2}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {/* {followingUsersData.map((followingUser, id) => {
          return (
            <FollowingUser followingUser={followingUser} key={id} />
          )
        })} */}
        {followingUsersData.map((followingUser, id) => {
          if (followingUser._id !== user._id) {
            return (
              <FollowingUser followingUser={followingUser} key={id} />
            )
          }
        })}
      </Box>
    </Box>
  );
}
