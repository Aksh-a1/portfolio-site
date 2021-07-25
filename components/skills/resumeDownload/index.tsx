import { Text, Image, IconButton, Link } from '@chakra-ui/react'

const ResumeDownload = () => {
  return (
    <Link
      display={'flex'}
      href={'/Aakash_Maurya_Resume.pdf'}
      download={'Aakash_Maurya_Resume.pdf'}
    >
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
    </Link>
  )
}

export default ResumeDownload
