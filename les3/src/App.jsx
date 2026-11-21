import { useState } from "react"
import "./app.css"

function App() {
  const [num1, setnum1] = useState(0)
  const [name, setName] = useState("noname")

  let num = 0

  const plus = () => {
    if(num1 < 15) {

    
    setnum1(num1 + 1)
  }}
const minus1 = () => {
  if (num1 > 0) {
    setnum1(num1 - 5)
}}

  const minus = () => {
      if(num1 > 0) {
    setnum1(num1 - 1)
  }}
const plus1 = () => {
  if (num1 > 0) {
    setnum1(num1 + 5)
    if(num1 < 15){
      setnum1(num1 +5)
    }
}}

  return (
    <div>
      <h1>тема usestate и  useeffect</h1>
      <p>count: let: {num} num</p>
      <p>count: let: {num1} num</p>
      <button onClick={plus}>click +1</button>
      <button onClick={minus} >click -1</button>
      <button onClick={() => setnum1(0)}>минус много </button>
          <button onClick={minus1} >click -5</button>    
          <button onClick= {plus1} >click +5</button>
      <h1>arafat</h1>
      <p>{name}</p>
      <input
        type="text"
        placeholder="введи имя"
        onChange={(event) => setName(event.target.value)}
      />

    </div>


  )
}

export default App
