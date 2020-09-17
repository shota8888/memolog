import styled from 'styled-components'
import media from 'src/styles/mediaqueries'

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
      ${media.desktop`
      font-size: 1.7rem;
      line-height: 1.4; 
      `}
    `,
    Lg: styled.h2`
      font-size: 1.5rem;
      line-height: 1.4;
      margin: 1rem 0; 
      ${media.desktop`
      font-size: 1.3rem;
      line-height: 1.5; 
      `} 
    `,
    Md: styled.section`
      font-size: 1.2rem;
      line-height: 1.5;
    `,
    Sm: styled.section`
      font-size: 1rem;
      line-height: 1.6
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
  PaginationA: styled.a`
    color: rgba(0,0,0,0.6);
    &:hover {
      color: rgba(0,0,0,1.0);
    };
    ${media.desktop`
      font-size: 0.8rem;
      color: rgba(0,0,0,1.0);
    `}
  `,
  colorInherit: styled.a`
    color: inherit; 
  `,
  padding1px: styled.section`
    padding-top: 1px;
  `
}

export default utilStyles;
