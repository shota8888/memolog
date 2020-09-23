import Link from 'next/link';
import { PostItems } from 'src/lib/posts'
import Pagination, { PaginationProps } from 'src/components/pagination';
import Date from '../components/date'
import styled from 'styled-components'
import media from 'src/styles/mediaqueries'

export type BlogProps = {
  posts: PostItems[];
  pagination: PaginationProps;
}

export default function Blog(props: BlogProps) {
  return (
    <_Blog>
      <_ListGrid>
        {props.posts.map(({ id, date, title, coverImage }) => (
          <_ListItems key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}> 
              <_A>
                <_CoverImage src={coverImage} />
                <div css="padding: 0 1rem 1rem;">
                  <_Title>{title}</_Title>
                <LightText>
                  <Date dateString={date} />
                </LightText>
              </div>
              </_A>
            </Link>
          </_ListItems>
        ))}
      </_ListGrid>
      <Pagination previous={props.pagination.previous} current={props.pagination.current} next={props.pagination.next} />
    </_Blog>
  )
}

const _Blog = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
`

const _ListGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-row-gap: 2rem;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  ${media.phone`
    grid-template-columns: 1fr;
  `}
`

const _ListItems = styled.li`
  position: relative;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2); 
    transition: .3s;
    transform: translateY(-2px);
  }
`

const _CoverImage = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  object-fit: cover;
`

const _Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  ${media.tablet`
    font-size: 1rem;
  `} 
`

const _A = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  color: rgba(0,0,0,0.8);
`

const LightText = styled.small`
  position: absolute;
  bottom: 10px;
  color: #999;
`
