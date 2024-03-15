
// components
import SignUpForm from "./Form/SignUpForm"

// redux tk
import { useSelector } from "react-redux"

// emotion
import { Container, Section, Title } from "./SignUp.styled"

// svg
import {ReactComponent as SuccesSvg} from '../../../Assets/success-image.svg'

export const SignUp = () => {
  
  const {isSignUp} = useSelector(state => state.isSignUp)
  
  return (
    <Section id="signup">
      <Container>

        <Title>{isSignUp ? 'User successfully registered' : 'Working with POST request'}</Title>

        {isSignUp ? <SuccesSvg width={328} height={290}/> : <SignUpForm />}
      </Container>
    </Section>
  )
}