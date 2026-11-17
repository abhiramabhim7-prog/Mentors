import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Fashion } from './Fashion'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Fashion/>
    
    </>
  )
}

export default App
