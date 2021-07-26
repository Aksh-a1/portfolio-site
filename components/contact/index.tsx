import React from 'react'
import { Flex } from '@chakra-ui/react'
import LetsConnect from './letsConnect'
import DropAMessage from './dropAMessage'

const Contact = () => {
  return (
    <Flex
      flexDirection={{ base: 'column-reverse', '2xl': 'row' }}
      mt={'8'}
    >
      <Flex mt={{ base: '12', '2xl': 'unset' }} w={'100%'} justifyContent={'center'}>
        <LetsConnect />
      </Flex>
      <Flex w={'100%'} justifyContent={'center'}>
        <DropAMessage />
      </Flex>
    </Flex>
  )
}

export default Contact
