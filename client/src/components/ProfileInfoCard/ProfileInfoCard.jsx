import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import * as UserApi from '../../api/UserRequest.js'
import { useParams } from 'react-router-dom'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import ProfileModal from '../Modals/ProfileModal/ProfileModal.jsx';
import EditIcon from '@mui/icons-material/Edit';

const ProfileInfoCard = () => {

  const [modalOpened, setModalOpened] = React.useState(false)
  const params = useParams();

  const profileUserId = params.id
  const [profileUser, setProfileUser] = React.useState({})

  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user)
        console.log(user, "user data from ProfileInfoCard.jsx");
      } else {
        const {data} = await UserApi.getUser(profileUserId)
        setProfileUser(data)
        console.log(data, "profileUser data from ProfileInfoCard.jsx");
      }
    }
    fetchProfileUser()
  }, [user]);


  return (
    <Card sx={{ maxWidth: 345, width: '16rem', borderRadius: '16px', backgroundColor: 'black', color: '#999993' }}>
      <Box component='div' sx={{ height: '6rem', backgroundColor: '#1E1E1E', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant='h5' sx={{ color: '#999993' }}>Your Info</Typography>
      </Box>
      {user._id === profileUserId ? (
        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, justifyContent: 'flex-end', paddingRight: '1rem' }}>
          <Box
            sx={{
              marginTop: '-1rem',
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                m: '-2px',
                borderRadius: '50%',
                height: '2.5rem',
                background:
                  'black'
              },
            }}
          >
            <Box sx={{
              borderColor: 'background.body', height: '2.3rem', width: '2.3rem', color: '#999993',
              position: 'relative', backgroundColor: '#1E1E1E', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <EditIcon onClick={() => setModalOpened(true)} />
              <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}
                data={user}
              />
            </Box>
          </Box>
        </Box>)
        : ""}
      { user._id === profileUserId ?
        <CardContent>
          <Box >
            <Box sx={{ display: 'flex', gap: '2rem' }}><Typography sx={{ lineHeight: '2rem' }}>Username</Typography><Typography sx={{ lineHeight: '2rem' }}>{user.username}</Typography></Box>
            <Box sx={{ display: 'flex', gap: '3rem' }}><Typography sx={{ lineHeight: '2rem' }}>Email</Typography><Typography sx={{ lineHeight: '2rem' }}>{user.email}</Typography></Box>
            <Box sx={{ display: 'flex', gap: '3rem' }}><Typography sx={{ lineHeight: '2rem' }}>Works at</Typography><Typography sx={{ lineHeight: '2rem' }}>{user.worksAt}</Typography></Box>
            <Box sx={{ display: 'flex', gap: '2rem' }}><Typography sx={{ lineHeight: '2rem' }}>Lives in</Typography><Typography sx={{ lineHeight: '2rem' }}>{user.livesIn}</Typography></Box>
            <Box sx={{ display: 'flex', gap: '3rem' }}><Typography sx={{ lineHeight: '2rem' }}>Status</Typography><Typography sx={{ lineHeight: '2rem' }}>{user.relationship}</Typography></Box>
          </Box>
        </CardContent> :
      <CardContent>
        <Box >
          <Box sx={{ display: 'flex', gap: '2rem' }}><Typography sx={{ lineHeight: '2rem' }}>Username</Typography><Typography sx={{ lineHeight: '2rem' }}>{profileUser.username}</Typography></Box>
          <Box sx={{ display: 'flex', gap: '3rem' }}><Typography sx={{ lineHeight: '2rem' }}>Email</Typography><Typography sx={{ lineHeight: '2rem' }}>{profileUser.email}</Typography></Box>
          <Box sx={{ display: 'flex', gap: '3rem' }}><Typography sx={{ lineHeight: '2rem' }}>Works at</Typography><Typography sx={{ lineHeight: '2rem' }}>{profileUser.worksAt}</Typography></Box>
          <Box sx={{ display: 'flex', gap: '2rem' }}><Typography sx={{ lineHeight: '2rem' }}>Lives in</Typography><Typography sx={{ lineHeight: '2rem' }}>{profileUser.livesIn}</Typography></Box>
          <Box sx={{ display: 'flex', gap: '3rem' }}><Typography sx={{ lineHeight: '2rem' }}>Status</Typography><Typography sx={{ lineHeight: '2rem' }}>{profileUser.relationship}</Typography></Box>
        </Box>
      </CardContent>
        }
    </Card>
  )
}

export default ProfileInfoCard