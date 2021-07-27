import { FC } from 'react'
import { Textarea } from '@chakra-ui/react'

interface Props {
  placeholder?: string
  size?: string
  minH?: number
}

const TextAreaField: FC<Props> = ({ placeholder, size = 'sm', minH }) => {
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
    />
  )
}

export default TextAreaField
