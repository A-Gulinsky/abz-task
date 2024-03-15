// component
import { UsersList } from "./UsersList/UsersList"
// emotion
import { Container, Section, Title } from "./Users.styled"

export const Users = () => {

  return (
    <Section id="users">
      <Container>

        <Title>Working with GET request</Title>

        <UsersList />
        
      </Container>
    </Section>
  )
}