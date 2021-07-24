import { FC } from 'react'
import {
  Flex,
  Image as ChakraImage,
  ImageProps,
  BoxProps
} from '@chakra-ui/react'

interface Props extends ImageProps {
  fallbackProps: BoxProps
}

const ImageFallback: FC<BoxProps> = (props) => (
  <Flex
    isTruncated
    aria-label={'fallback-image'}
    justifyContent={'center'}
    alignItems={'center'}
    backgroundColor={'black'}
    color={'white'}
    {...props}
  >
    ❔
  </Flex>
)

const Image: FC<Props> = (props) => {
  const { fallbackProps, ...rest } = props
  return (
    <ChakraImage fallback={<ImageFallback {...fallbackProps} />} {...rest} />
  )
}

export default Image
