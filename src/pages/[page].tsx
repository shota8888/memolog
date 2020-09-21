import { GetStaticProps, GetStaticPaths } from 'next'
import { getSortedPostsData, getAllPostIds } from 'src/lib/posts'
import Layout from 'src/components/layout'
import Blog, { BlogProps } from 'src/components/blog'
import { PaginationProps } from 'src/components/pagination';
import { convertTo2D } from 'src/utils/Pagination'
import { Config } from 'src/utils/Config';

type PageUrl = {
  page: string;
};

const PaginatePosts = (props: BlogProps) => {
  return (
    <Layout home>
      <Blog posts={props.posts} pagination={props.pagination} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const postsId = getAllPostIds();
  const pages = convertTo2D(postsId, Config.pagination_size);

  return {
    paths: pages.slice(1).map((_, ind) => ({
      params: {
        page: `page${ind + 2}`,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<BlogProps, PageUrl> = async ({ params }) => {
  const posts = getSortedPostsData();
  const pages = convertTo2D(posts, Config.pagination_size);
  const currentPage = Number(params!.page.replace('page', ''));
  const currentInd = currentPage - 1;

  const pagination: PaginationProps = {};

  pagination.current = currentPage;

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `page${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentInd],
      pagination,
    },
  };
}

export default PaginatePosts;