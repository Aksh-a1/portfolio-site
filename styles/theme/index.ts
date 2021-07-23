import { extendTheme } from '@chakra-ui/react'
import globalStylesOverride from './globalStyles'
import fonts from './fonts'

const theme = extendTheme({
  colors: {
    primary: '#35e36b', //SHAMROCK GREEN
  },
  config: {
    cssVarPrefix: 'am'
  },
  fonts,
  styles: globalStylesOverride
})

export default theme
