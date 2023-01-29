import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequest'

const Conversation = ({ data, currentUserId, online}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();
    }, [])

    return (
        <>
            <div className="follower conversation" style={{ backgroundColor: 'black' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {online && <div className="online-dot"></div>}
                    <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfile.png'} alt=""
                        className='followerImage'
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="name" style={{ fontSize: '0.8rem' }}>
                            <span style={{ fontSize: '1rem' }}>{userData?.firstname} {userData?.lastname}</span> <br />
                            <span>{ online ? "Online" : "Offline"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation