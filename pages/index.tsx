import Head from 'next/head'
import { Text, Heading, Box, Flex, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Digital portfolio of Aakash Maurya' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-between'}
        w={'100%'}
        h={'100%'}
        bgColor={'primary'}
        borderRadius={'2xl'}
        p={10}
      >
        <Box as={'main'}>
          <Heading as={'h1'} fontSize={200} fontWeight={'normal'}>
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
            w={'md'}
            h={'20'}
          >
            &gt;&gt;
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
