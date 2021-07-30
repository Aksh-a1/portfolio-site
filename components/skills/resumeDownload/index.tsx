import { Text, IconButton, Link } from '@chakra-ui/react'
import Image from '../../common/image'

const imageHeight = { height: { base: '70%', md: '90%' } }

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
        w={'20'}
        h={'14'}
        icon={
          <Image
            fallbackProps={{ ...imageHeight }}
            {...imageHeight}
            src={'/save.svg'}
            alt={'save image'}
          />
        }
      />
      <Text
        ml={4}
        fontSize={{ base: '2xl', sm: '4xl' }}
        fontWeight={'semibold'}
      >
        Download resume
      </Text>
    </Link>
  )
}

export default ResumeDownload
