import { Box, Stack } from '@mui/material'
import React, { useRef, useState } from 'react'
import './ChatPart.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userChats } from '../../api/ChatRequests'
import Conversation from '../Conversation/Conversation'
import ChatBox from '../ChatBox/ChatBox'
import { io } from 'socket.io-client'

const ChatPart = () => {

    const socket = useRef();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);


    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id);
                setChats(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [user._id]);

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", user._id);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });
    }, [user]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage]);


    // Get the message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log(data)
            setReceivedMessage(data);
        }

        );
    }, []);

    const checkOnlineStatus = (chat) =>{
        const chatMember = chat.members.find((member)=> member!== user._id)
        const online = onlineUsers.find((user)=> user.userId === chatMember)
        return online? true: false
    }


    return (
        <Box sx={{ maxHeight: '40rem', minHeight: '40rem', backgroundColor: '#212832', borderRadius: '22px 22px 0px 0px', marginRight: '1rem' }} flex={4.5} >
            <Stack direction="row" justifyContent="space-between" sx={{ gap: '1rem', paddingLeft: "1rem", paddingRight: '1rem', paddingTop: '1rem', maxHeight: '40rem' }}>
                <div className="Chat">
                    {/* left side */}
                    <div className="Left-side-chat">
                        <div className="container">
                            <h2>Chats</h2>
                            <div className="Chat-list">
                                {chats.map((chat, id) => (
                                    <div key={id} onClick={() => setCurrentChat(chat)}>
                                        <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <ChatBox chat={currentChat} currentUser={user._id}
                        setSendMessage={setSendMessage}
                        receivedMessage={receivedMessage}
                    />
                </div>
            </Stack>
        </Box>
    )
}

export default ChatPart