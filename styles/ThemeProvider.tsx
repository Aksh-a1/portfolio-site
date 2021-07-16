import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from './Font'
import theme from '../styles/theme'

interface Props {
  children: ReactNode
}

const ThemeProvider = ({ children }: Props) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    {children}
  </ChakraProvider>
)

export default ThemeProvider
