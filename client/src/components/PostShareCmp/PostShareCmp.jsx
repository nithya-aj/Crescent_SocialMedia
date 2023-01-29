import React, { useState, useRef } from 'react'
import './PostShareCmp.css'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction';
import { Box } from '@mui/material';
import Avatar from '@mui/joy/Avatar';

const PostShare = () => {
    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const { user } = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const dispatch = useDispatch()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img)
        }
    }

    const reset = () => {
        setImage(null);
        desc.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
            console.log(newPost);
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err, 'this is error from postshare.jsx');
            }
        }
        dispatch(uploadPost(newPost));
        reset()
    }

    return (
        <div className="PostShare">
            {/* <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" /> */}
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, justifyContent: 'center' }}>
                <Box
                    sx={{
                        marginTop: '-3rem',
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
                            background:
                                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                        },
                    }}
                >
                    <Avatar
                        size="sm"
                        src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"}
                        sx={{ border: '2px solid', borderColor: 'background.body' }}
                    />
                </Box>
            </Box>
            <div style={{width:'38rem'}}>
                <input ref={desc} required type="text" placeholder={`What's happening...`} style={{ color: 'rgb(160, 157, 157)' }} />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
                        <UilScenery></UilScenery>
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle></UilPlayCircle>
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint></UilLocationPoint>
                        Location
                    </div>
                    <div className="option" style={{ color: "--schedule" }}>
                        <UilSchedule></UilSchedule>
                        Schedule
                    </div>
                    <button onClick={handleSubmit} className='button ps-button' disabled={loading}>
                        {loading ? "Uploading..." : "Share"}
                    </button>
                    <div style={{ display: 'none' }}>
                        <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare