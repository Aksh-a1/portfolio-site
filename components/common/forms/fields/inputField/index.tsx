import { FC, ReactEventHandler } from 'react'
import { forwardRef, Input } from '@chakra-ui/react'

interface Props {
  placeholder?: string
  size?: string
  value?: string
  onChange?: ReactEventHandler<HTMLInputElement>
  [x: string]: any
}

const InputField = forwardRef<Props, FC>(({ placeholder, size = 'lg', onChange, ...rest }, ref) => {
  return (
    <Input
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      focusBorderColor={'primary'}
      backgroundColor={'black'}
      color={'white'}
      ref={ref}
      {...rest}
    />
  )
})

export default InputField
