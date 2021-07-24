import { Text, Stack, Flex } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Flex m={1} as={'footer'} justifyContent={'center'}>
      <Stack direction={['column', 'row']} spacing='8px'>
        <Text color={'white'}>Made with</Text>
        <Text as={'span'} color={'red'}>
          ❤
        </Text>
        <Text color={'white'}>by Aakash Maurya</Text>
      </Stack>
    </Flex>
  )
}

export default Footer
