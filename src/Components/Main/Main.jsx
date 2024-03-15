import { Hero } from "./Hero/Hero"
import { SignUp } from "./SignUp/SignUp"
import { Users } from "./Users/Users"

export const Main = () => {

  return (
    <main>
      <Hero />
      <Users />
      <SignUp />
    </main>
  )
}