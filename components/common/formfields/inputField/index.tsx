import { FC, ReactEventHandler } from 'react'
import { Input } from '@chakra-ui/react'

interface Props {
  placeholder?: string
  size?: string
  value?: string
  onChange?: ReactEventHandler<HTMLInputElement>
}

const InputField: FC<Props> = ({ placeholder, size = 'lg', onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      focusBorderColor={'primary'}
      backgroundColor={'black'}
      color={'white'}
    />
  )
}

export default InputField
