import React from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'
import InputField from '../../../common/formfields/inputField'
import TextAreaField from '../../../common/formfields/textAreaField'
import { sendEmail } from '../../../../utils/apiCalls'

const MessageForm = () => {
  const handleClick = () => {
    sendEmail({ name: 'lol', email: 'boi', message: 'joi' }).then((data) => {
      if (data === 'ERROR') {
        console.log('error')
        return
      }
      console.log('success')
      return
    })
  }
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
      <Button
        onClick={handleClick}
        padding={{ base: 'unset', md: 'unset' }}
        w={'50%'}
      >
        Whoosh...
      </Button>
    </Flex>
  )
}

export default MessageForm
