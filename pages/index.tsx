import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Flex } from '@chakra-ui/react'
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Header from '../components/header'
import { TabType } from '../types/Tab'
import Footer from '../components/footer'
import PageLoader from '../components/common/pageLoader'

const HomePage = () => {
  const router = useRouter()
  const [tab, setTab] = useState<TabType | null>(null)
  const [pageLoad, setPageLoad] = useState<boolean>(true)

  const handleTabChange = useCallback((newTab: TabType) => {
    setTab(newTab)
  }, [])

  useEffect(
    () => {
      const urlPath = router.asPath.split('/')[2] as TabType
      setPageLoad(false)
      setTab(urlPath ?? '/')
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return !pageLoad && tab !== null ? (
    <Fragment>
      <Flex
        flexDirection={'column'}
        overflow={'auto'}
        w={'100%'}
        h={'100%'}
        bgColor={'primary'}
        borderRadius={'2xl'}
        p={{ base: 4, md: 10 }}
      >
        {tab !== 'home' && tab !== '/' && (
          <Header onClick={handleTabChange} active={tab} />
        )}
        {(tab === 'home' || tab === '/') && <Home onClick={handleTabChange} />}
        {tab === 'about' && <About onClick={handleTabChange} />}
        {tab === 'skills' && <Skills />}
        {tab === 'contact' && <Contact />}
      </Flex>
      <Footer />
    </Fragment>
  ) : (
    <PageLoader />
  )
}

export default HomePage
