import { gql } from "apollo-boost"

export default gql`
  query listUsers{
  users {
    id
    name
    email
  }
}
`