import { FC, ReactNode } from 'react'
import { Box, BoxProps, Divider, Text } from '@chakra-ui/react'

interface Props extends BoxProps {
  title: string
  children: ReactNode
}

const Card: FC<Props> = ({ title, children, ...rest }) => {
  return (
    <Box border={'solid'} rounded='md' minH={'80px'} {...rest}>
      <Text fontSize={'3xl'} fontWeight={'semibold'} textAlign={'center'}>
        {title}
      </Text>
      <Divider borderColor={'black'} />
      <Box my={2}>{children}</Box>
    </Box>
  )
}

export default Card
