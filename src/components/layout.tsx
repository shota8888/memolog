import Head from 'next/head'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import Link from 'next/link'
import Profile from 'src/components/profile' 
import Header from 'src/components/header'

const name = 'shota'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ 
  children, 
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <Container> 
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Profile />
      <div css="width: 100%;">
        <Header />
        <main>{children}</main>
      
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
      </div>
    </Container>
  )
}

const HeadingXXl = utilStyles.Heading.XXl
const HeadingLg = utilStyles.Heading.Lg
const BorderCircle = utilStyles.borderCircle
const ColorInherit = utilStyles.colorInherit

const HeaderImage = styled(BorderCircle)`
  width: 6rem;
  height: 6rem;
`

const HeaderHomeImage = styled(BorderCircle)`
  width: 8rem;
  height: 8rem;
`

const Container = styled.div`
  display: flex;
  padding: 0 1rem;
`

// const Header = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

