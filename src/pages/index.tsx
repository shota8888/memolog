import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'src/components/layout'
import Date from '../components/date'
import { getSortedPostsData } from 'src/lib/posts'
import styled from 'styled-components'
import GlobalStyle from 'src/styles/globalStyles'
import utilStyles from 'src/styles/util-styles'
import Paper from '@material-ui/core/Paper'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <GlobalStyle />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeadingMd>
        <p>Hello!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </HeadingMd>
      <HeadingMd>
        <HeadingLg>Blog</HeadingLg>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <PaperItem component="li" key={id} variant="outlined">
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <LightText>
                <Date dateString={date} />
              </LightText>
            </PaperItem>
          ))}
        </List>
      </HeadingMd>
    </Layout>
  )
}

const HeadingLg = utilStyles.Heading.Lg
const HeadingMd = utilStyles.Heading.Md
const List = utilStyles.List.list
const LightText = utilStyles.lightText

const PaperItem = styled(Paper)`
  margin: 0 0 1.25rem;
  padding: ${(props) => props.theme.spacing(2)}px;
`