import React from 'react'
import HomeProfileCard from './HomeProfileCard'
import ProfileProfileCard from './ProfileProfileCard'

const ProfileCard = ({ location }) => {
  return (
    location === 'profilePage' ? <ProfileProfileCard /> : <HomeProfileCard />
  )
}

export default ProfileCard