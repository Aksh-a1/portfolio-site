import { FC, useCallback, useMemo } from 'react'
import LinkButton from '../common/linkButton'
import { TabType } from '../../types/Tab'
import ResponsiveNavbar from '../common/responsiveNavbar'

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
  const navbarButtonText = useMemo(() => active.charAt(0).toUpperCase() + active.slice(1), [active])
  return (
    <ResponsiveNavbar buttonText={navbarButtonText}>
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
    </ResponsiveNavbar>
  )
}

export default Header
