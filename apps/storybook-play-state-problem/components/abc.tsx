import {useState} from 'react'

export function Test() {
  const [state, updateState] = useState(null)

  console.log(state)

  return (
    <div>
      {state ? <div>Hey</div> : <></>}

      <button onClick={() => updateState({a: 1})}>Click Me</button>
    </div>
  )
}
