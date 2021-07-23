import { Text, Stack } from '@chakra-ui/react'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <Stack direction={["column", "row"]} spacing="16px">
        <Text>
          Made with ❤
        </Text>
        <Text>
          by Aakash Maurya
        </Text>
      </Stack>
    </footer>
  )
}

export default Footer
