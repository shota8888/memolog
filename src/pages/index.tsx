import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from 'src/components/layout' 
import Blog, { IBlogProps } from 'src/components/blog'
import { IPaginationProps } from 'src/components/pagination'
import { getSortedPostsData } from 'src/lib/posts'
import { Config } from 'src/utils/Config';

const Home = (props: IBlogProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Blog posts={props.posts} pagination={props.pagination} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {  
  const postsData = getSortedPostsData()
  const pagination: IPaginationProps = {}

  if (postsData.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: postsData.slice(0, Config.pagination_size),
      pagination,
    },
  };
}

export default Home;