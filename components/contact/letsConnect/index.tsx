import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
import ImageWithText from '../../imageWithText'

const LetsConnect = () => {
  return (
    <Flex flexDirection={'column'}>
      <Text textAlign={'center'} fontSize={'4xl'} fontWeight={'semibold'} mb={8}>
        Let's connect on
      </Text>
      <ImageWithText
        src={'/placeholder.png'}
        alt='Gmail'
        text={'akshmourya@gmail.com'}
        href={'mailto:akshmourya@gmail.com'}
      />
      <ImageWithText
        src={'/placeholder.png'}
        alt='Github'
        text={'@Aksh-a1'}
        href={'https://github.com/Aksh-a1'}
      />
      <ImageWithText
        src={'/placeholder.png'}
        alt='LinkedIn'
        text={'@akshv29'}
        href={'https://www.linkedin.com/in/akshv29'}
      />
      <ImageWithText
        src={'/placeholder.png'}
        alt='Instagram'
        text={'@akshmaurya'}
        href={'https://www.instagram.com/akshmaurya/'}
      />
    </Flex>
  )
}

export default LetsConnect
