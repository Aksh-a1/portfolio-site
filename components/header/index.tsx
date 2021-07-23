import React from 'react'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

const Header = () => {
  return (
    <nav>
      <Link href="/about" passHref>
        <Button colorScheme='teal' variant='link'>
          Home
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button colorScheme='teal' variant='link'>
          Skills
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button colorScheme='teal' variant='link'>
          Contact
        </Button>
      </Link>
    </nav>
  )
}

export default Header
