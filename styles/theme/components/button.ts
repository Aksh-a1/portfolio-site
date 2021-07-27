export default {
  variants: {
    solid: {
      padding: { base: 1, md: 8 },
      _hover: { backgroundColor: 'black' },
      bgColor: 'black',
      color: 'white'
    },
    link: {
      bgColor: 'transparent',
      _hover: { textDecoration: 'none' },
      _focus: { boxShadow: 'none' }
    }
  }
}
