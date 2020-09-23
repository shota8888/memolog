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
    coverImage: string
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
        <_PostHeader>
          <HeadingXl>{postData.title}</HeadingXl>
          <LightText>
            <Date dateString={postData.date} />
          </LightText>
        </_PostHeader>
        <_CoverImage src={postData.coverImage} />
        <_PostContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  line-height: 2;
  width: 60%;
  margin: 0 auto;
  ${media.phone`
    width: 90%;
    font-size: 0.9rem;
  `}
`

const _PostHeader = styled.div`
  margin: 80px auto;
`

const _CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 20px 30px 30px -10px rgba(0,0,0,.2), 0 18px 36px -18px rgba(0,0,0,.22);
  border-radius: 5px;
`

const _PostContent = styled.div`
  margin: 80px auto;
  & .hljs {
    line-height: 1.8;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }
`

const HeadingXl = utilStyles.Heading.Xl
const LightText = utilStyles.lightText