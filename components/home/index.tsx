import { FC, useCallback } from 'react'
import { Text, Heading, Box, Flex, Button } from '@chakra-ui/react'

interface Props {
  onClick: Function
}

const Home: FC<Props> = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick('about')
  }, [])

  return (
    <Flex h={'100%'} flexDirection={'column'} justifyContent={'space-between'}>
      <Box>
        <Heading as={'h1'} fontSize={160} fontWeight={'normal'}>
          AAKASH MAURYA
        </Heading>
        <Text fontSize='6xl' fontWeight={'extrabold'}>
          WEB DEVELOPER
        </Text>
      </Box>
      <Flex w={'100%'} flexDirection={'row-reverse'}>
        <Button
          _hover={{ backgroundColor: 'black' }}
          fontSize={'8xl'}
          bgColor={'black'}
          color={'white'}
          w={'sm'}
          h={'20'}
          onClick={handleClick}
        >
          &gt;&gt;
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
