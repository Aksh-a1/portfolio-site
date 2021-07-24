import { FC } from 'react'
import { Text, Flex, Link } from '@chakra-ui/react'
import Image from '../common/image'

interface Props {
  text: string
  src: string
  alt: string
  href: string
}

const imageLayout = {
  borderRadius: '2xl',
  height: 50,
  width: 50,
  mr: 8
}

const ImageWithText: FC<Props> = ({ text, src, alt, href }) => {
  return (
    <Flex mb={8} alignItems={'center'}>
      <Image
        fallbackProps={{ ...imageLayout }}
        {...imageLayout}
        src={src}
        alt={alt}
      />
      <Link _focus={{ boxShadow: 'none' }} href={href}>
        <Text fontSize={'2xl'} fontWeight={'semibold'}>
          {text}
        </Text>
      </Link>
    </Flex>
  )
}

export default ImageWithText
