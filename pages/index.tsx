import Head from 'next/head'
import { Text, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Digital portfolio of Aakash Maurya" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Heading>
        HELLO WORLD
      </Heading>
      <Text fontSize="6xl">
        I'm a Web Developer
      </Text>
    </div>
    </>
  )
}
