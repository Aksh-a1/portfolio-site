import { extendTheme } from '@chakra-ui/react'
import globalStylesOverride from './globalStyles'
import fonts from './fonts'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c'
    }
  },
  config: {
    cssVarPrefix: 'am'
  },
  fonts,
  styles: globalStylesOverride
})

export default theme
