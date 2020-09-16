import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from 'src/components/layout' 
import Blog, { BlogProps } from 'src/components/blog'
import { PaginationProps } from 'src/components/pagination'
import { getSortedPostsData } from 'src/lib/posts'

const Pagination_size = 5;

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

  if (postsData.length > Pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: postsData.slice(0, Pagination_size),
      pagination,
    },
  };
}

export default Home;