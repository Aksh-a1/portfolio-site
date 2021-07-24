import { FC } from 'react'
import { Text, Flex, Image, Link } from '@chakra-ui/react'

interface Props {
  text: string
  src: string
  alt: string
  href: string
}

const ImageWithText: FC<Props> = ({ text, src, alt, href }) => {
  return (
    <Flex mb={8} alignItems={'center'}>
      <Image borderRadius={'2xl'} height={50} width={50} src={src} alt={alt} mr={8}/>
      <Link _focus={{ boxShadow: 'none' }} href={href}>
        <Text fontSize={'2xl'} fontWeight={'semibold'}>
          {text}
        </Text>
      </Link>
    </Flex>
  )
}

export default ImageWithText
