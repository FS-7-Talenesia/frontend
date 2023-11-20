// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Image, UnorderedList, ListItem, Flex } from '@chakra-ui/react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { BsBookFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GiProgression } from 'react-icons/gi'


function SidebarDashboard() {
  return (
    <>
      <Box width='20vw' borderRight={"solid"} borderColor={"#E0E0E1"} height='100vh'>
        <Box>
          <Image
            src='/src/assets/Logo Full.jpg'
            alt='Logo Talenesia'
            boxSize='100%'
            objectFit='cover'
          />
        </Box>
        <Box >
          <UnorderedList m='10px' pt={1} fontFamily='overlock' fontSize={15} >
            <ListItem listStyleType='none' _hover={{ background: "steelBlue", color: 'white' }} borderRadius='xl' p='4px' mt='4px' >
              <Flex align='center' >
                <Box as={AiFillHome} mr={2} /><a href="#">Dashboard</a>
              </Flex>
            </ListItem>
            <ListItem listStyleType='none' pt={5} _hover={{ background: "steelBlue", color: 'white' }} borderRadius='xl' p='4px' mt='4px' >
              <Flex align='center' >
                <Box as={BsBookFill} mr={2} /><a href="#">KursusKu</a>
              </Flex>
            </ListItem>
            <ListItem listStyleType='none' pt={5} _hover={{ background: "steelBlue", color: 'white' }} borderRadius='xl' p='4px' mt='4px'>
              <Flex align='center' >
                <Box as={CgProfile} mr={2} /><a href="#">Profile</a>
              </Flex>
            </ListItem>
            <ListItem listStyleType='none' pt={5} position='relative' _hover={{ background: "steelBlue", color: 'white' }} borderRadius='xl' p='4px' mt='4px' >
              <Flex align='center' >
                <Box as={GiProgression} mr={2} /><a href="#">Progress Belajar</a>
              </Flex>
            </ListItem>
            <ListItem listStyleType='none' pt={5} _hover={{ background: "steelBlue", color: 'white' }} borderRadius='xl' p='4px' mt='4px'>
              <Flex align='center' >
                <Box as={AiFillSetting} mr={2} /><a href="#">Setting</a>
              </Flex>
            </ListItem>
            <ListItem listStyleType='none' pt={5} _hover={{ background: "steelBlue", color: 'white' }} borderRadius='xl' p='4px' mt='4px'>
              <Flex align='center' >
                <Box as={BiLogOutCircle} mr={2} /><a href="#">Log Out</a>
              </Flex>
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </ >
  )
}

export default SidebarDashboard