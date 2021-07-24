import { FC, useCallback } from 'react'
import { Flex } from '@chakra-ui/react'
import LinkButton from '../common/linkButton'
import { TabType } from '../../types/Tab'

interface Props {
  active: TabType
  onClick: Function
}

const Header: FC<Props> = ({ active, onClick }) => {
  const handleClick = useCallback(
    (e) => {
      const value = e.target.value
      onClick(value)
    },
    [onClick]
  )
  return (
    <Flex as={'nav'} justifyContent={'space-between'}>
      <LinkButton
        value={'home'}
        onClick={handleClick}
        active={active === 'home' || active === '/'}
      >
        Home
      </LinkButton>
      <LinkButton
        value={'about'}
        onClick={handleClick}
        active={active === 'about'}
      >
        About
      </LinkButton>
      <LinkButton
        value={'skills'}
        onClick={handleClick}
        active={active === 'skills'}
      >
        Skills
      </LinkButton>
      <LinkButton
        value={'contact'}
        onClick={handleClick}
        active={active === 'contact'}
      >
        Contact
      </LinkButton>
    </Flex>
  )
}

export default Header
