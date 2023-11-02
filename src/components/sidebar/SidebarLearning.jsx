// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, CloseButton, Flex, Text, Progress, HStack } from '@chakra-ui/react'

import '../sidebar/sidebar.css'

function SidebarLearning() {
  return (
    <div className='container-learning'>
      <Flex p={4}>
        <Box>
          <CloseButton size='md' bg='red.400' />
        </Box>
        <Box paddingLeft={5} m={1}>
          <Text fontFamily='overlock' fontSize={19}>Daftar Modul</Text>
        </Box>
      </Flex>
      <Box p={27} pt={8} paddingRight={590}>
        <Progress colorScheme='blue' size='md' hasStripe value={64} />
        <Text fontFamily='overlock'>Progress Belajar Anda</Text>
      </Box>
      <Box pl={5} backgroundColor='blue' color='white'>
        {/* <Select placeholder='Select option'>
          <option value='option1'>Option 1</option>
        </Select> */}
        <HStack spacing={100} fontFamily='overlock'>
          <Text pl={4}>Course Name</Text>
          <Text>1/1</Text>
        </HStack>
        <HStack spacing={100} fontFamily='overlock'>
          <Text pl={4}>Course Name</Text>
          <Text>1/1</Text>
        </HStack>
      </Box>
    </div >
  )
}

export default SidebarLearning