import { FC, Fragment, ReactNode } from 'react'
import {
  Flex,
  useBreakpoint,
  useBoolean,
  Collapse,
  Button,
  StatDownArrow
} from '@chakra-ui/react'

interface Props {
  children: ReactNode
  buttonText: ReactNode
}

const ResponsiveNavbar: FC<Props> = ({ children, buttonText }) => {
  const breakpointValue = useBreakpoint()
  const [navToggle, { toggle: setNavToggle }] = useBoolean(false)
  return !['2xl', 'xl'].includes(breakpointValue as string) ? (
    <Fragment>
      <Button
        onClick={setNavToggle}
        fontSize={{ base: '2xl', md: '4xl' }}
        bgColor={'black'}
        color={'white'}
        padding={{ base: 1, md: 8 }}
        rightIcon={
          <StatDownArrow fontSize={{ base: 'lg', md: '2xl' }} color={'white'} />
        }
        _hover={{ backgroundColor: 'black' }}
      >
        {buttonText}
      </Button>
      <Collapse in={navToggle} animateOpacity>
        {children}
      </Collapse>
    </Fragment>
  ) : (
    <Flex as={'nav'} justifyContent={'space-between'}>
      {children}
    </Flex>
  )
}

export default ResponsiveNavbar
