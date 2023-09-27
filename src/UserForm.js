import {useState} from "react"

const UserForm = ({onUserAdd}) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    onUserAdd({name, email})

    setName("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  )
} 

export default UserForm
