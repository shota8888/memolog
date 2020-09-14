import Head from 'next/head'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import Link from 'next/link'

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
      <Header>
        {home ? (
          <>
            <HeaderHomeImage
              src="/images/profile.jpg"
              //className={`${styles.headerHomeImage}`}
              alt={name}
            />
            <HeadingXXl>{name}</HeadingXXl>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderImage
                  src="/images/profile.jpg"
                  //className={`${styles.headerImage}`}
                  alt={name}
                />
              </a>
            </Link>
            <HeadingLg>
              <Link href="/">
                <ColorInherit>{name}</ColorInherit>
              </Link>
            </HeadingLg>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
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
  max-width: 36rem;
  padding: 0 1rem;
  /* margin: 3rem auto 6rem; */
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

