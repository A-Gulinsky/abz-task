import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }

  @media screen and (max-width: 360px) {
    gap: 20px;
  }
`

export const Li = styled.li`
  width: 330px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background: rgb(255, 255, 255);
  border-radius: 10px;

  @media screen and (max-width: 1169px) {
    width: 242px;
  }

  @media screen and (max-width: 768px) {
    width: 304px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ShowMoreBtn = styled.button`
  width: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  text-decoration: none;

  background: ${({ theme }) => theme.button.primaryColor};
  border: none;
  border-radius: 80px;

  & p {
    display: inline-block;
   
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    background: ${({theme}) => theme.button.hoverColor};
  }
`