import React, { useState } from 'react'
import ShareModal from '../Modals/ShareModal/ShareModal'

const PostShareModalButton = () => {
    const [modalOpened, setModalOpened] = useState(false)
    return (
        <>
            <button className='button' style={{
                height: '3rem', width: '12%', alignSelf: 'center'
                , marginTop: '35rem', marginLeft: '2rem', position: 'fixed'
            }} onClick={() => setModalOpened(true)}>
                Share
            </button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </>
    )
}

export default PostShareModalButton