import { Fragment } from 'react'
import { SimpleGrid, Text, Flex, Box } from '@chakra-ui/react'
import Card from '../common/card'
import ResumeDownload from './resumeDownload'

const Skills = () => {
  return (
    <Fragment>
      <Box flexGrow={1}>
        <SimpleGrid mt={8} minChildWidth='150px' spacing='40px'>
          <Card title={'Languages'}>
            {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python'].map(
              (value, index) => (
                <Text
                  textAlign={'center'}
                  fontSize={'xl'}
                  fontWeight={'semibold'}
                  key={index}
                >
                  {value}
                </Text>
              )
            )}
          </Card>
          <Card title={'Client-Side'}>
            {['ReactJS', 'NextJS', 'Redux', 'Formik', 'Apollo Client'].map(
              (value, index) => (
                <Text
                  textAlign={'center'}
                  fontSize={'xl'}
                  fontWeight={'semibold'}
                  key={index}
                >
                  {value}
                </Text>
              )
            )}
          </Card>
          <Card title={'Server-Side'}>
            {['NodeJS', 'ExpressJS'].map((value, index) => (
              <Text
                textAlign={'center'}
                fontSize={'xl'}
                fontWeight={'semibold'}
                key={index}
              >
                {value}
              </Text>
            ))}
          </Card>
          <Card title={'Testing'}>
            {['Jest', 'React testing library'].map((value, index) => (
              <Text
                textAlign={'center'}
                fontSize={'xl'}
                fontWeight={'semibold'}
                key={index}
              >
                {value}
              </Text>
            ))}
          </Card>
          <Card title={'Tools & Utilities'}>
            {['GIT', 'GitHub', 'Bitbucket', 'JIRA'].map((value, index) => (
              <Text
                textAlign={'center'}
                fontSize={'xl'}
                fontWeight={'semibold'}
                key={index}
              >
                {value}
              </Text>
            ))}
          </Card>
        </SimpleGrid>
      </Box>
      <Flex mt={4} justifyContent={'center'} alignItems={'center'}>
        <ResumeDownload />
      </Flex>
    </Fragment>
  )
}

export default Skills
