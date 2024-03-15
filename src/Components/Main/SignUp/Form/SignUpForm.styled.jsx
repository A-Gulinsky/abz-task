import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;

  width: 380px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 450px) {
    display: flex;
    width: 100%;
  }
`

export const ButtonAdd = styled.input`
  margin-left: auto;
  margin-right: auto;

  width: 100px;
  height: 34px;

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${({disabled}) => disabled ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.87)'};

  background: ${({ disabled, theme }) => disabled ? theme.button.disabledColor : theme.button.primaryColor };
  border: none;
  border-radius: 80px;

  cursor: ${({disabled}) => !disabled &&  'pointer'};

  &:hover {
    ${({disabled, theme}) => !disabled && `background: ${theme.button.hoverColor}`}
  }
`

export const BtnContainer = styled.div`
  margin-left:auto;
  margin-right: auto;
`