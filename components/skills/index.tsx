import React from 'react'
import {
  SimpleGrid,
  Text,
  Box,
  Flex,
  Image,
  IconButton
} from '@chakra-ui/react'
import Card from '../card'

const Skills = () => {
  return (
    <React.Fragment>
      <SimpleGrid mt={4} minChildWidth='150px' spacing='40px'>
        <Card title={'Languages'}>
          <Box>HTML5</Box>
          <Box>CSS3</Box>
          <Box>JavaScript</Box>
          <Box>TypeScript</Box>
          <Box>Python</Box>
        </Card>
        <Card title={'Client-Side'}>
          <Box>ReactJS</Box>
          <Box>NextJS</Box>
          <Box>Redux</Box>
          <Box>MaterialUI</Box>
          <Box>Chakra-UI</Box>
          <Box>Ant design</Box>
          <Box>Formik</Box>
          <Box>Apollo Client</Box>
        </Card>
        <Card title={'Server-Side'}>
          <Box>NodeJS</Box>
          <Box>ExpressJS</Box>
        </Card>
        <Card title={'Testing'}>
          <Box>Jest</Box>
          <Box>React testing library</Box>
        </Card>
        <Card title={'Versioning & Deployment'}>
          <Box>Docker</Box>
          <Box>GitHub Actions</Box>
          <Box>GIT</Box>
          <Box>GitHub</Box>
          <Box>Bitbucket</Box>
        </Card>
        <Card title={'Server-Side'}>
          <Box>NodeJS</Box>
          <Box>ExpressJS</Box>
        </Card>
      </SimpleGrid>
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
    </React.Fragment>
  )
}

export default Skills
