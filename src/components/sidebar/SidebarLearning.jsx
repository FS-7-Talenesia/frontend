// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel, Box, CloseButton, Text, Flex, Progress, LinkOverlay, LinkBox, Link
} from '@chakra-ui/react'


import '../sidebar/sidebar.css'

function SidebarLearning() {
  return (
    <div>
      {/* Module */}
      <Box width='30vw' height='100vh' boxShadow='dark-lg'>
        <Flex>
          <Box p={4}>
            <Link href='google.com'>
              <CloseButton size='md' bg='statusRed' borderRadius='2xl' />
            </Link>
          </Box>
          <Box p={4} pr={2} pl={2}>
            <Text fontFamily='overlock' fontSize={23}>Daftar Modul</Text>
          </Box>
        </Flex>
        <Box pt={8} p={5}>
          <Progress colorScheme='blue' size='md' hasStripe value={64} />
          <Flex>
            <Text fontFamily='overlock'>Progress Belajar Anda</Text>
            <Text pl={3} color='#29B574'>20%</Text>
          </Flex>
        </Box>
        {/* Course Name */}
        <Accordion fontFamily='overlock' allowToggle backgroundColor='darkblue' color='white' boxShadow='xl'>
          <AccordionItem>
            <p>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontFamily='overlock' >
                  Course Name
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <AccordionPanel pb={4}>
              <LinkBox>
                <LinkOverlay href='#'>
                  <Box borderRadius={10} backgroundColor='steelBlue' p={3} color='white'>
                    lorem ipsum dolor siamet

                  </Box>
                </LinkOverlay>
              </LinkBox>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <p>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  Course Name
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <AccordionPanel pb={4}>
              <LinkBox>
                <LinkOverlay href='/google.com'  >
                  <Box borderRadius={10} backgroundColor='steelBlue' p={3} color='white' _hover={{ background: "skyBlue" }}>
                    lorem ipsum dolor siamet
                  </Box>
                </LinkOverlay>
              </LinkBox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </div >
  )
}

export default SidebarLearning