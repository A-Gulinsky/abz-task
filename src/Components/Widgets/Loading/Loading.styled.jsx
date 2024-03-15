import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ReactComponent as Svg } from "../../../Assets/preloader/preloader.svg";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Preloader = styled(Svg)`
  animation: ${spin} 1s linear infinite;
`