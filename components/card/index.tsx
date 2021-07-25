import { FC, ReactNode } from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'

interface Props {
  title: string
  children: ReactNode
}

const Card: FC<Props> = ({ title, children }) => {
  return (
    <Box minH={'80px'}>
      <Text fontSize={'xl'} fontWeight={'semibold'} textAlign={'center'}>{title}</Text>
      <Divider />
      {children}
    </Box>
  )
}

export default Card
