import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { DrawerContext } from "./layout"
import media from 'src/styles/mediaqueries'

export default function Header() {
  const drawerContext = React.useContext(DrawerContext)

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"></link>
      </Head>
        
      <Heading>
        <ProfileIcon
            src="/images/profile.jpg"
            alt="shota"
            onClick={() => { drawerContext.setDrawerState(true) }}
        />
        <Link href="/">
            <_A>MemoLog</_A>
        </Link>
      </Heading>
    </>
  )
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-family: 'Sacramento', cursive;
  margin: 2.5rem;
  padding-bottom: 10px;
  border-bottom: thin solid rgba(0,0,0,0.3);
  ${media.desktop`
    font-size: 1.5rem;
    margin: 2.5rem 0;
  `}
`

const ProfileIcon = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  display: none;
  ${media.desktop`
    display: block;
  `}
  ${media.phone`
    width: 1.7rem;
    height: 1.7rem;
  `}
`

const _A = styled.a`
  margin: 0 auto;
  transform: translateX(-20px);
  color: #000;
`