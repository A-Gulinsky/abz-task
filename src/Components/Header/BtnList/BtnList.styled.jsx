import styled from "@emotion/styled";

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
`

export const Link = styled.a`
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;

  text-decoration: none;

  background: ${({ theme }) => theme.button.primaryColor};
  border-radius: 80px;

  & p {
    display: inline-block;
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    background: ${({theme}) => theme.button.hoverColor};
  }
`