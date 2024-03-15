import styled from "@emotion/styled";

import theme from '../../../Assets/theme/theme.webp'
import tabTheme from '../../../Assets/theme/tab-theme.webp'
import mobTheme from '../../../Assets/theme/mob-theme.webp'
import miniTheme from '../../../Assets/theme/mini-theme.webp'

export const Section = styled.section`
  max-width: 1170px;
  
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 140px;

  background-image: url(${theme});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1024px) {
    background-image: url(${tabTheme});
  }

  @media screen and (max-width: 768px) {
    background-image: url(${mobTheme});
  }

  @media screen and (max-width: 360px) {
    background-image: url(${miniTheme});
    padding: 0 16px;
  }
`

export const Container = styled.div`
  max-width: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-top: 164px;
  padding-bottom: 163px;

  @media screen and (max-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
  }

  @media screen and (max-width: 360px) {
    padding-top: 40px;
    padding-bottom: 71px;
  }
`

export const Title = styled.h1`
  margin-bottom: 21px;

  font-size: ${({theme}) => theme.title.fontSize};
  font-weight: ${({ theme }) => theme.title.fontWeight};
  line-height: ${({theme}) => theme.title.lineHeight};
  color: ${({theme}) => theme.title.titleColor};
  text-align: center;
`

export const Text = styled.p`
  margin-bottom: 32px;

  color: rgb(255, 255, 255);
  text-align: center;
`

export const Link = styled.a`
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;

  text-decoration: none;

  background: ${({theme}) => theme.button.primaryColor};
  border-radius: 80px;

  & p {
    display: inline-block;
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    background: ${({theme}) => theme.button.hoverColor};
  }
`