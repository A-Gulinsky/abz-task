import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin-bottom: 43px;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`

export const Label = styled.label`
  position: relative;
`

export const InputText = styled.input`
  width: 346px;
  height: 24px;
  padding: 14px 16px;

  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;

  background-color: transparent;
  border: ${props => props.errors ? '2px solid rgb(203, 61, 64)' : '1px solid rgb(126,126,126)'};
  border-radius: 4px;

  outline: none;

  &::placeholder {

    color: rgb(126, 126, 126);
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }

  &:placeholder-shown + span {
    visibility: hidden;
  }

  @media screen and (max-width: 450px) {
    box-sizing: border-box;
    display: block;
    height: 54px;
    width: 100%;
  }
`

export const InputSpan = styled.span`
  position: absolute;
  top: -7px;
  left: 16px;

  padding: 0 2px;

  font-size: 12px;
  line-height: 14px;
  color: ${props => props.error ? 'rgb(203, 61, 64)' : 'rgb(126, 126, 126)'};

  background-color: rgb(255,255,255);
`

export const TextError = styled.p`
  position: absolute;
  bottom: -16px;
  left: 16px;

  font-size: 12px;
  line-height: 14px;
  color: rgb(203, 61, 64);
`

export const AdditionalInputSpan = styled.span`
  position: absolute;
  bottom: -16px;
  left: 16px;

  font-size: 12px;
  line-height: 14px;
  color: rgb(126, 126, 126);
`