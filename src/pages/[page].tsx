import { GetStaticProps, GetStaticPaths } from 'next'
import { getSortedPostsData, getAllPostIds } from 'src/lib/posts'
import Layout from 'src/components/layout'
import Blog, { BlogProps } from 'src/components/blog'
import { PaginationProps } from 'src/components/pagination';

type PageUrl = {
  page: string;
};

const Pagination_size = 5;

const PaginatePosts = (props: BlogProps) => {
  return (
    <Layout home>
      <Blog posts={props.posts} pagination={props.pagination} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const postsId = getAllPostIds();
  const pages = convertTo2D(postsId, Pagination_size);

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
  const pages = convertTo2D(posts, Pagination_size);
  const currentPage = Number(params!.page.replace('page', ''));
  const currentInd = currentPage - 1;

  const pagination: PaginationProps = {};

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

export function convertTo2D<T>(arr: T[], size: number) {
  const res: T[][] = [];

  arr.forEach((val, ind) => {
    if (ind % size === 0) {
      res.push([val]);
    } else {
      res[res.length - 1].push(val);
    }
  });

  return res;
}

export default PaginatePosts;