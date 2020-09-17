import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import Link from 'next/link'
import Profile from 'src/components/profile' 
import Header from 'src/components/header'
import Drawer from "@material-ui/core/Drawer"
import media from 'src/styles/mediaqueries'

export const siteTitle = 'MemoLog'

export const DrawerContext = React.createContext<{
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>
}>({
  setDrawerState: () => {},
})

export default function Layout({ 
  children, 
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const [isOpenDrawer, setDrawerState] = React.useState(false);

  return (
    <DrawerContext.Provider value={{ setDrawerState }}>
    <Container> 
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <_PcProfile>
        <Profile />
      </_PcProfile>
      <Drawer
          anchor="left"
          open={isOpenDrawer}
          onClose={() => {
            setDrawerState(false)
          }}
      >
        <Profile />
      </Drawer>
      <div css="width: 100%;">
        <Header />
        <main>{children}</main>
      
        {!home && (
          <BackToHome>
            <Link href="/">
              <_A>← ホーム</_A>
            </Link>
          </BackToHome>
        )}
      </div>
    </Container>
    </DrawerContext.Provider>
  )
}

const Container = styled.div`
  display: flex;
  padding: 0 1rem;
`

const _PcProfile = styled.nav`
  ${media.desktop`
    display: none;
  `}
`

const BackToHome = styled.div`
  width: 60%;
  margin: 5rem auto;
  padding-top: 1rem;
  border-top: thin solid rgba(0,0,0,0.3);
  ${media.phone`
    width: 90%;
  `} 
`

const _A = utilStyles.PaginationA;
