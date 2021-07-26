import { FC, Fragment, ReactNode } from 'react'
import {
  Flex,
  useBreakpoint,
  Image,
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
        aria-label='Download Resume'
        icon={<Image height={'90%'} src={'/save.svg'} />}
        w={'100%'}
        h={'14'}
        fontSize={{ base: '2xl', md: '4xl' }}
        bgColor={'black'}
        color={'white'}
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
