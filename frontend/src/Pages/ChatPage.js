import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../Components/miscellaneous/SideDrawer"
import MyChats from '../Components/Mychats';
import ChatBox from '../Components/ChatBox';
const ChatPage = () => {

    const { user } = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);
    return <div style={{ width: "100%" }}>

        {user && <SideDrawer />}
        <Box
            d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
            {user && <MyChats fetchAgain={fetchAgain} />}
            {user && (
                <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            )}
        </Box>
    </div>


    return (
        <div>


        </div>
    )
};

export default ChatPage;