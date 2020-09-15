import Link from 'next/link';
import { PostItems } from 'src/lib/posts'
import Pagination, { PaginationProps } from 'src/components/pagination';
import Date from '../components/date'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import Paper from '@material-ui/core/Paper'

export type BlogProps = {
  posts: PostItems[];
  pagination: PaginationProps;
}

export default function Blog(props: BlogProps) {
  return (
    <_Blog>
      <List>
        {props.posts.map(({ id, date, title }) => (
          <PaperItem component="li" key={id} variant="outlined">
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <_A>{title}</_A>
            </Link>
            <br />
            <LightText>
              <Date dateString={date} />
            </LightText>
          </PaperItem>
        ))}
      </List>
      <Pagination previous={props.pagination.previous} next={props.pagination.next} />
    </_Blog>
  )
}

const List = utilStyles.List.list
const LightText = utilStyles.lightText

const _Blog = styled.div`
  width: 60%;
  margin: 0 auto;
`

const PaperItem = styled(Paper)`
  margin: 0 0 1.25rem;
  padding: ${(props) => props.theme.spacing(2)}px;
  &:hover {
    box-shadow: 1px 1px 5px #b4b4b4
  }
  position: relative;
`

const _A = styled.a`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
`