import { Text, Image, IconButton, Link } from '@chakra-ui/react'

const ResumeDownload = () => {
  return (
    <Link
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      href={'/Aakash_Maurya_Resume.pdf'}
      download={'Aakash_Maurya_Resume.pdf'}
    >
      <IconButton
        aria-label='Download Resume'
        icon={<Image height={{ base: '70%', md: '90%' }} src={'/save.svg'} alt={'save image'}/>}
        w={'20'}
        h={'14'}
        bgColor={'black'}
        _hover={{ backgroundColor: 'black' }}
      />
      <Text ml={4} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'semibold'}>
        Download resume
      </Text>
    </Link>
  )
}

export default ResumeDownload
