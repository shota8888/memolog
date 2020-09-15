import Link from 'next/link';

export type PaginationProps = {
  previous?: string;
  next?: string;
}

const Pagination = (props: PaginationProps) => {
  return (
    <div>
      {props.previous && (
        <div>
          <Link href={convertToHref(props.previous)} as={props.previous}>
            <a>← Newer Posts</a>
          </Link>
        </div>
      )}

      {props.next && (
        <div>
          <Link href={convertToHref(props.next)} as={props.next}>
            <a>Older Posts →</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export function convertToHref(url: string) {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}

export default Pagination;