import {render, screen} from "@testing-library/react"
import user from "@testing-library/user-event"
import UserForm from "./UserForm"

test("it shows two inputs and a button", () => {
  //render the component
  render(<UserForm />)

  //manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox")
  const button = screen.getByRole("button")

  //Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test("it calls onAddUser when the form is submitted", () => {
  const mock = jest.fn()
  //Try to render my component
  render(<UserForm onUserAdd={mock}/>)

  //Find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: "Name"
  })
  const emailInput = screen.getByRole("textbox", {
    name: "Email"
  })

  //Simulate typing in a name
  user.click(nameInput)
  user.keyboard("Jane")

  //Simulate typing in an email
  user.click(emailInput)
  user.keyboard("jane@jane.com")

  //Find the button
  const button = screen.getByRole("button")

  //Simulate clicking the button
  user.click(button)

  //Assertion to make sure "onUserAdd" gets called with email/name
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith({name: "Jane", email: "jane@jane.com"})
})
