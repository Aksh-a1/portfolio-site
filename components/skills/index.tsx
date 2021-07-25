import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import Card from '../card'
import ResumeDownload from './resumeDownload'

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
      <ResumeDownload />
    </React.Fragment>
  )
}

export default Skills
