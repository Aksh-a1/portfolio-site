import { FC } from 'react'
import { forwardRef, Textarea } from '@chakra-ui/react'

interface Props {
  placeholder?: string
  size?: string
  minH?: number
  [x: string]: any
}

const TextAreaField: FC<Props> = forwardRef(({ placeholder, size = 'sm', minH, ...rest }, ref) => {
  return (
    <Textarea
      placeholder={placeholder}
      size={size}
      minH={minH}
      resize={'none'}
      focusBorderColor={'primary'}
      backgroundColor={'black'}
      color={'white'}
      borderRadius={'md'}
      ref={ref}
      {...rest}
    />
  )
})

export default TextAreaField
