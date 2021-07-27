import { FC, Fragment, ReactNode, useCallback } from 'react'
import {
  Flex,
  Collapse,
  Button,
  StatDownArrow,
  useBreakpoint,
  useBoolean
} from '@chakra-ui/react'

interface Props {
  children: ReactNode
  buttonText: ReactNode
}

const ResponsiveNavbar: FC<Props> = ({ children, buttonText }) => {
  const breakpointValue = useBreakpoint()
  const [navToggle, { toggle: setNavToggle }] = useBoolean(false)
  const handleCollapsableClick = useCallback(() => {
    if (navToggle) {
      setNavToggle()
    }
  }, [navToggle, setNavToggle])
  return !['2xl', 'xl'].includes(breakpointValue as string) ? (
    <Fragment>
      <Button
        onClick={setNavToggle}
        fontSize={{ base: '2xl', md: '4xl' }}
        padding={{ base: 1, md: 8 }}
        rightIcon={
          <StatDownArrow fontSize={{ base: 'lg', md: '2xl' }} color={'white'} />
        }
      >
        {buttonText}
      </Button>
      <Collapse onClick={handleCollapsableClick} in={navToggle} animateOpacity>
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
