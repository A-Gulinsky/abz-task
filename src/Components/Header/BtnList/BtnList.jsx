// emotion
import { Link, Ul } from "./BtnList.styled"

export const BtnList = () => {

  return (
    <nav>
      <Ul>
        <li>
          <Link href="#users" aria-label="scroll to block - users">
            <p>Users</p>
          </Link>
        </li>
        <li>
          <Link href="#signup" aria-label="scroll to block - sign up">
            <p>Sign up</p>
          </Link>
        </li>
      </Ul>
    </nav>
  )
}