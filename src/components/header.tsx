import styled from 'styled-components'

export default function Header() {
  return (
    <Heading>
      MemoLog
    </Heading>
  )
}

const Heading = styled.div`
  text-align: center;
  font-size: 36px;
  font-family: 'Mrs Saint Delafield', cursive;
  margin: 2rem 0;
`