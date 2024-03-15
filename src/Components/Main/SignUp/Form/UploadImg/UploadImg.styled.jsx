import styled from "@emotion/styled";

export const UploadContainer = styled.div`
  box-sizing: border-box;
  position: relative;

  display: flex;
  width: 100%;
  margin-bottom: 47px;

  align-items: center;
`

export const LabelUpload = styled.label`
  box-sizing: border-box;
  
  padding: 13px 14px;
  
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;

  border: ${props => props.error ? '2px solid rgb(203, 61, 64)' : '1px solid rgba(0, 0, 0, 0.87)'};
  border-radius: 4px 0px 0px 4px;

  cursor: pointer;
`

export const TextContainer = styled.div`
  width: 100%;
  padding: 13px 16px;

  border: ${props => props.error ? '2px solid rgb(203, 61, 64)' : '1px solid rgb(126,126,126)'};
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
`

export const ImgText = styled.p`
  line-height: 26px;
  color: rgb(126, 126, 126);
`

export const ErrorSpan = styled.p`
  position: absolute;
  bottom: -16px;
  left: 16px;

  font-size: 12px;
  line-height: 14px;
  color: rgb(203, 61, 64);
`