import { FC, useCallback } from 'react'
import { Box, Heading, Text, TextProps } from '@chakra-ui/react'

interface Props {
  onClick: Function
}

const textProps: TextProps = {
  fontSize: {
    base: 'xl',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4xl',
    '2xl': '5xl'
  },
  fontWeight: 'extrabold',
  mb: 8
}

const About: FC<Props> = ({ onClick }) => {
  const handleClick = useCallback(() => {
    onClick('contact')
  }, [onClick])
  return (
    <Box mt={8}>
      <Heading
        fontSize={{
          base: '3rem',
          sm: '3rem',
          md: '4rem',
          lg: '5rem',
          xl: '5rem',
          '2xl': '6rem'
        }}
        mb={4}
      >
        Hey you! 😀
      </Heading>
      <Text {...textProps}>
        My name is Aakash Maurya. I am a web developer based in Pune,
        Maharashtra. Well, I don&apos;t consider myself as just a &quot;web
        developer&quot;; I am a problem solver😁.
      </Text>
      <Text {...textProps}>
        <i>Finding the cause is 50% of the solution to the problem</i> and
        that&apos;s where I shine. My key strength is root cause analysis and
        problem-solving. I have over 2 years of experience in developing
        microservices and micro-frontend architecture applications. Majorly
        working with ReactJS.
      </Text>
      <Text {...textProps} mb={0}>
        Apart from work I like to travel around places and{' '}
        <a href={'https://www.instagram.com/akshmaurya/'}>
          <u>click pictures 📸</u>
        </a>
        . I also watch a lot of movies and tv series🎬.
      </Text>
      <Text {...textProps}>
        I am addicted to music🎧. You will always find me with my earphones on.
      </Text>
      <Text {...textProps}>
        I am a very imaginative and open-minded person and I am not afraid to
        venture beyond my comfort zone in search of new ideas, experiences, and
        adventures.
      </Text>
      <Box textAlign={'center'} mb={8}>
        <Text as={'i'} {...textProps}>
          To infinity and beyond🚀
        </Text>
      </Box>
      <Text {...textProps}>
        My weakness is that I am overly optimistic, I think there is nothing in
        the world that we people can&apos;t tackle and handle. But It&apos;s not
        that bad being overly optimistic, right, or is it?🤔
      </Text>
      <Text {...textProps}>
        At present, I&apos;m working in{' '}
        <a href={'https://www.mindtree.com/'}>
          <u>Mindtree</u>
        </a>{' '}
        as Senior Full Stack Developer and exploring the beauty of{' '}
        <a
          href={
            'https://www.google.co.in/search?q=udaipur&source=lnms&tbm=isch'
          }
        >
          <u>Udaipur</u>
        </a>
        .
      </Text>
      <Text {...textProps}>
        Fancy a chat, <u onClick={handleClick}>drop me a message!</u>
      </Text>
    </Box>
  )
}

export default About
