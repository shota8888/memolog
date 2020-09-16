import Link from 'next/link';
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'

export type PaginationProps = {
  previous?: string;
  current?: number;
  next?: string;
}

const Pagination = (props: PaginationProps) => {
  

  return (
    <_Pagination>
      {props.previous && (
        <_Previous>
          <Link href={convertToHref(props.previous)} as={props.previous}>
            <_A>← 前のページ</_A>
          </Link>
        </_Previous>
      )}

      {props.current && (
        <_Current>
          {props.current}
        </_Current>
      ) || (
        <_Current>
          1
        </_Current> 
      )}

      {props.next && (
        <_Next>
          <Link href={convertToHref(props.next)} as={props.next}>
            <_A>次のページ →</_A>
        </Link>
        </_Next>
      )}
    </_Pagination>
  )
}

export function convertToHref(url: string) {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}

const _Pagination = styled.div`
  display: flex;
`

const _Previous = styled.div`
  position: absolute;
  left: 0;
  
`

const _Current = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
`

const _Next = styled.div`
  position: absolute;
  right: 0;
`

const _A = utilStyles.PaginationA;

export default Pagination;