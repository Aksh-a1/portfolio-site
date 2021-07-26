import { FC, useCallback } from 'react'
import { Text, Heading, Box, Flex, Button } from '@chakra-ui/react'

interface Props {
  onClick: Function
}

const Home: FC<Props> = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick('about')
  }, [onClick])

  return (
    <Flex h={'100%'} flexDirection={'column'} justifyContent={'space-between'}>
      <Box>
        <Heading
          as={'h1'}
          fontSize={{
            base: '4.9rem',
            sm: '9.1rem',
            md: '11.6rem',
            lg: '16.5rem',
            xl: '10rem',
            '2xl': '10rem'
          }}
          fontWeight={'normal'}
          lineHeight={1}
        >
          AAKASH MAURYA
        </Heading>
        <Text
          textAlign={['center', 'center', 'center', 'center', 'unset']}
          fontSize={{
            base: '4xl',
            sm: '3rem',
            md: '4rem',
            lg: '6rem',
            xl: '6xl',
            '2xl': '6xl'
          }}
          fontWeight={'extrabold'}
        >
          WEB DEVELOPER
        </Text>
      </Box>
      <Flex w={'100%'} flexDirection={'row-reverse'}>
        <Button
          _hover={{ backgroundColor: 'black' }}
          fontSize={['4xl', '6xl', '8xl']}
          bgColor={'black'}
          color={'white'}
          w={['xs', 'xs', 'sm']}
          h={['10', '20']}
          onClick={handleClick}
        >
          &gt;&gt;
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
