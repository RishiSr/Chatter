import react, { useEffect } from 'react'
import React from 'react'
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from '../Components/Authentication/login';
import Signup from '../Components/Authentication/signup';
import { useHistory } from "react-router"
const Homepage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats")
  }, [history]);
  return (
    <Container maxW='X1' centerContent>
      <Box d="flex"
        justifyContent="center" p={3} bg={"white"} w="100%" m="40px 0 15px 0" borderRadius="1g" borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black">
          Chatter
        </Text>

      </Box>
      <Box bg="white" w={{ 'base': "100%", 'md': "50%" }} p={4} borderRadius="1g" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>

              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Box>
    </Container>
  )
}

export default Homepage;