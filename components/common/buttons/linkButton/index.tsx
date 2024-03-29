import { FC, ReactEventHandler, ReactNode } from 'react'
import { Button, Box, Divider } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  active: boolean
  onClick: ReactEventHandler
  [x: string]: any
}

const LinkButton: FC<Props> = ({ children, active, onClick, ...rest }) => {
  const color = active ? 'black' : 'white'
  return (
    <Box>
      <Button
        variant='link'
        fontSize={{
          base: '2xl',
          sm: '3xl',
          md: '4xl',
          lg: '5xl',
          xl: '6xl'
        }}
        color={color}
        w={'100%'}
        h={'20'}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Button>
      {active && (
        <Divider
          opacity={1}
          borderColor={'black'}
          borderBottomWidth={'thick'}
        />
      )}
    </Box>
  )
}

export default LinkButton
