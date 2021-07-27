import React from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import InputField from '../../../common/formfields/inputField'
import TextAreaField from '../../../common/formfields/textAreaField'

const MessageForm = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex mb={2} flexDirection={'column'}>
        <Text fontSize={'md'} fontWeight={'semibold'}>
          Name:
        </Text>
        <InputField placeholder={'Enter name...'} />
      </Flex>
      <Flex mb={2} flexDirection={'column'}>
        <Text fontSize={'md'} fontWeight={'semibold'}>
          Email:
        </Text>
        <InputField placeholder={'Enter email...'} />
      </Flex>
      <Flex mb={2} flexDirection={'column'}>
        <Text fontSize={'md'} fontWeight={'semibold'}>
          Message:
        </Text>
        <TextAreaField minH={32} size={'lg'} placeholder={'Enter message...'} />
      </Flex>
      <Button padding={{ base: 'unset', md: 'unset' }} w={'50%'}>
        Whoosh...
      </Button>
    </Flex>
  )
}

export default MessageForm
