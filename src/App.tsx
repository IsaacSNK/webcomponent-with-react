import React from "react"

interface IProps {
  name: string
}

export const App = (props: IProps) : JSX.Element => (
<>
  <h1>Hello World!</h1>
  <p>Greetings from {props.name}</p>
  <button onClick={e => alert('click')}>foo</button>
</>
)