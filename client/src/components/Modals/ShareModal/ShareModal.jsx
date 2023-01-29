import { Modal, useMantineTheme } from '@mantine/core';
import React from 'react';
import PostShareCmp from '../../PostShareCmp/PostShareCmp';

const ShareModal = ({ modalOpened, setModalOpened }) => {
    const theme = useMantineTheme();

    return (
        <Modal
            sx={{marginTop:'5rem', color:'white'}}
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
        <PostShareCmp/>
        </Modal>
    );
}

export default ShareModal;