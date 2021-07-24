import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
import MessageForm from './messageForm'

const DropAMessage = () => {
  return (
    <Flex flexDirection={'column'}>
      <Text textAlign={'center'} fontSize={'4xl'} fontWeight={'semibold'} mb={2}>
        Drop me a message!
      </Text>
      <MessageForm />
    </Flex>
  )
}

export default DropAMessage
