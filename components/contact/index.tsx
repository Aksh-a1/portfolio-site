import React from 'react'
import { Flex } from '@chakra-ui/react'
import LetsConnect from './letsConnect'
import DropAMessage from './dropAMessage'

const Contact = () => {
  return (
    <Flex mt={'8'}>
      <Flex w={'100%'} justifyContent={'center'} borderRight={'1px'} borderColor={'black'}>
        <LetsConnect />
      </Flex>
      <Flex w={'100%'} justifyContent={'center'}>
        <DropAMessage />
      </Flex>
    </Flex>
  )
}

export default Contact
