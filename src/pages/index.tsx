import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from 'src/components/layout' 
import Blog, { BlogProps } from 'src/components/blog'
import { PaginationProps } from 'src/components/pagination'
import { getSortedPostsData } from 'src/lib/posts'
import { Config } from 'src/utils/Config';

const Home = (props: BlogProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Blog posts={props.posts} pagination={props.pagination} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {  
  const postsData = getSortedPostsData()
  const pagination: PaginationProps = {}

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