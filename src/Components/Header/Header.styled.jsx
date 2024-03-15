import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;

  @media screen and (max-width: 1024px) {
    padding: 13px 45px;
  }

  @media screen and (max-width: 768px) {
    padding: 13px 17px;
  }

  @media screen and (max-width: 360px) {
    padding: 13px 1px;
  }
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`