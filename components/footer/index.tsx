import { FC } from 'react'
import { Text, Stack, Flex } from '@chakra-ui/react'

const Footer: FC = () => {
  return (
    <Flex m={1} as={'footer'} justifyContent={'center'}>
      <Stack direction={'row'} spacing='8px'>
        <Text color={'white'}>Made with</Text>
        <Text as={'span'} color={'red'}>
          ❤
        </Text>
        <Text color={'white'}>by Aakash Maurya</Text>
      </Stack>
    </Flex>
  )
}

export default Footer
