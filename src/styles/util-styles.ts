import styled from 'styled-components'

const utilStyles = {
  Heading: {
    XXl: styled.h1`
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing: -0.05rem;
      margin: 1rem 0;
    `,
    Xl: styled.section`
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing: -0.05rem;
      margin: 1rem 0;
    `,
    Lg: styled.h2`
      font-size: 1.5rem;
      line-height: 1.4;
      margin: 1rem 0; 
    `,
    Md: styled.section`
      font-size: 1.2rem;
      line-height: 1.5;
    `
  },
  List :{
    list: styled.ul`
      list-style: none;
      padding: 0;
      margin: 0;
    `
  },
  lightText: styled.small`
      color: #999;
  `,
  borderCircle: styled.img`
    border-radius: 9999px;
  `,
  colorInherit: styled.a`
    color: inherit; 
  `,
  padding1px: styled.section`
    padding-top: 1px;
  `
}

export default utilStyles
