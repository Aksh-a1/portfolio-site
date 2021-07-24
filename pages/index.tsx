import { Fragment, useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Header from '../components/header'
import { TabType } from '../types/Tab'
import Footer from '../components/footer'

const HomePage = () => {
  const router = useRouter()
  const urlPath = router.asPath.split('/')[2] as TabType
  const [tab, setTab] = useState<TabType>(urlPath ?? '/')

  const handleRouteChange = useCallback(
    (path: TabType) => {
      const newRoutePath = `#/${path}`
      router.push(newRoutePath, undefined, { shallow: true })
    },
    [router]
  )

  const handleTabChange = useCallback(
    (newTab: TabType) => {
      setTab(newTab)
      handleRouteChange(newTab)
    },
    [handleRouteChange]
  )

  return (
    <Fragment>
      <Box
        w={'100%'}
        h={'100%'}
        bgColor={'primary'}
        borderRadius={'2xl'}
        p={10}
      >
        {tab !== 'home' && tab !== '/' && (
          <Header onClick={handleTabChange} active={tab} />
        )}
        {(tab === 'home' || tab === '/') && <Home onClick={handleTabChange} />}
        {tab === 'about' && <About />}
        {tab === 'skills' && <Skills />}
        {tab === 'contact' && <Contact />}
      </Box>
      <Footer />
    </Fragment>
  )
}

export default HomePage
