import Head from 'next/head'
import Layout from 'src/components/layout'
import { getAllPostIds, getPostData } from 'src/lib/posts'
import Date from 'src/components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import media from 'src/styles/mediaqueries'

type Props = {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <_Post>
        <HeadingXl>{postData.title}</HeadingXl>
        <LightText>
          <Date dateString={postData.date} />
        </LightText>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </_Post>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

const _Post = styled.article`
  width: 60%;
  margin: 0 auto;
  ${media.phone`
    width: 90%;
  `}
`
const HeadingXl = utilStyles.Heading.Xl
const LightText = utilStyles.lightText