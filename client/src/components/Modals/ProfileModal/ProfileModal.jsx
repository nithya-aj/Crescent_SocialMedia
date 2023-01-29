import { Modal, useMantineTheme } from '@mantine/core';
import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../../actions/uploadAction';
import { updateUser } from '../../../actions/userAction';

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(null);
    const [coverImage, setCoverImage] = useState(null)
    const [coverImageUrl, setCoverImageUrl] = useState(null);
    const dispatch = useDispatch()
    const param = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)

    const relationshipOptions = [
        {
            label: "Single",
            value: "single",
        },
        {
            label: "In relationship",
            value: "In relationship",
        },
        {
            label: "Married",
            value: "married",
        },
        {
            label: "Other",
            value: "other",
        }
    ];

    useEffect(() => {
        if (profileImage) {
            setProfileImageUrl(URL.createObjectURL(profileImage));
        }
    }, [profileImage]);

    useEffect(() => {
        if (coverImage) {
            setCoverImageUrl(URL.createObjectURL(coverImage));
        }
    }, [coverImage]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profileImage"
                ? setProfileImage(img) :
                setCoverImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let UserData = formData;
        if (profileImage) {
            const data = new FormData()
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data))
            } catch (err) {
                console.log(err);
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data))
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(updateUser(param.id, UserData))
        setModalOpened(false)
    }

    return (
        <Modal
            sx={{ marginTop: '4rem' }}
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='infoForm' style={{ marginTop: '1rem' }}>
                <h3>Your Info</h3>
                <div>
                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="text"
                        className="infoInput"
                        name="firstname"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={formData.firstname}
                    />

                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="text"
                        className="infoInput"
                        name="lastname"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={formData.lastname}
                    />
                </div>

                <div>
                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="User Name"
                        onChange={handleChange}
                        value={formData.username}
                    />
                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="email"
                        className="infoInput"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>

                <div>
                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="text"
                        className="infoInput"
                        name="livesIn"
                        placeholder="Lives in"
                        onChange={handleChange}
                        value={formData.livesIn}
                    />

                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="text"
                        className="infoInput"
                        name="worksAt"
                        placeholder="Works at"
                        onChange={handleChange}
                        value={formData.worksAt}
                    />

                </div>


                <div>
                    <select className="infoInput"
                        style={{ color: 'white', fontSize: '1rem', padding: '10px', height: '40px' }} name="relationship"
                        onChange={handleChange}
                        value={formData.relationship}
                        label="Relationship status"
                    >
                        <option selected disabled>Relationship Status</option>
                        {relationshipOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>

                    <input
                        style={{ color: 'white', fontSize: '1rem' }}
                        type="text"
                        className="infoInput"
                        name="country"
                        placeholder="Country"
                        onChange={handleChange}
                        value={formData.country}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input
                        style={{ color: 'white', fontSize: '1rem', paddingBottom: '3rem', display: 'none' }}
                        type="file"
                        accept='image/*'
                        className="infoInput"
                        name='profileImage'
                        onChange={onImageChange}
                        id='selectProfileImage'
                    />
                    <label htmlFor="selectProfileImage">
                        <Button variant="contained" sx={{ backgroundColor: 'black' }} component='span'>
                            Upload Profile Image
                        </Button>
                    </label>
                    {profileImage && profileImageUrl && (
                        <Box textAlign="center">
                            <img src={profileImageUrl} alt={profileImage.name} height="75px" />
                        </Box>
                    )}

                    <input
                        style={{ color: 'white', fontSize: '1rem', paddingBottom: '3rem', display: 'none' }}
                        type="file"
                        className="infoInput"
                        name="coverImage"
                        onChange={onImageChange}
                        accept='image/*'
                        id='selectCoverImage'
                    />

                    <label htmlFor="selectCoverImage">
                        <Button variant="contained" sx={{ backgroundColor: 'black' }} component='span'>
                            Upload Cover Image
                        </Button>
                    </label>
                    {coverImage && coverImageUrl && (
                        <Box textAlign="center">
                            <img src={coverImageUrl} alt={coverImage.name} height="75px" />
                        </Box>
                    )}
                </div>

                <Box sx={{ padding: '1.5rem', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}><button style={{ paddingLeft: '4rem', paddingRight: '4rem' }} className="button " onClick={handleSubmit}>Update</button></Box>
            </form>
        </Modal>
    );
}

export default ProfileModal;