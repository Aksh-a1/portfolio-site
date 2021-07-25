import { Text, Flex, Image, IconButton, Link } from '@chakra-ui/react'

const ResumeDownload = () => {
  return (
    <Link
      href={'/Aakash_Maurya_Resume.pdf'}
      download={'Aakash_Maurya_Resume.pdf'}
    >
      <Flex mt={4} justifyContent={'center'} alignItems={'center'}>
        <IconButton
          aria-label='Download Resume'
          icon={<Image height={'90%'} src={'/save.svg'} />}
          w={'20'}
          h={'14'}
          bgColor={'black'}
          _hover={{ backgroundColor: 'black' }}
        />
        <Text ml={4} fontSize={'4xl'} fontWeight={'semibold'}>
          Download resume
        </Text>
      </Flex>
    </Link>
  )
}

export default ResumeDownload
