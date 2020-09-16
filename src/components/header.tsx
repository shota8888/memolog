import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"></link>
      </Head>
      <Heading>
        <Link href="/">
            <a css="color: #000;">MemoLog</a>
        </Link>
      </Heading>
    </>
  )
}

const Heading = styled.div`
  text-align: center;
  font-size: 38px;
  font-family: 'Sacramento', cursive;
  margin: 2.5rem;
  padding-bottom: 10px;
  border-bottom: thin solid rgba(0,0,0,0.3)
`