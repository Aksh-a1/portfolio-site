import React from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

const PageLoader = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      overflow={'auto'}
      w={'100%'}
      h={'100%'}
      bgColor={'primary'}
      borderRadius={'2xl'}
      p={10}
    >
      <Spinner
        emptyColor={'black'}
        h={'200px'}
        w={'100px'}
        thickness={'8px'}
        speed='1s'
        color='black'
        size='xl'
      />
    </Flex>
  )
}

export default PageLoader
