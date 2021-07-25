import { FC, ReactNode } from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'

interface Props {
  title: string
  children: ReactNode
}

const Card: FC<Props> = ({ title, children }) => {
  return (
    <Box border={'solid'} rounded="md" minH={'80px'}>
      <Text fontSize={'3xl'} fontWeight={'semibold'} textAlign={'center'}>
        {title}
      </Text>
      <Divider borderColor={'black'} />
      <Box my={2}>{children}</Box>
    </Box>
  )
}

export default Card
