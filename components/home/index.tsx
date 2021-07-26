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
          textAlign={['center', 'center', 'center', 'center', 'unset']}
          fontSize={{
            base: '4rem',
            sm: '8rem',
            md: '11rem',
            lg: '12rem',
            xl: '12rem',
            '2xl': '12rem'
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
            lg: '5rem',
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
