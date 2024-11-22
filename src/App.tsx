import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <div className="login-container">
        <div className="title"><h1>NEU OJT APP</h1></div>
        <img src="neu-logo.png" alt="NEU Logo" className="neu-logo" />
        <div className="container-fluid">
          <button>
            <img src="google_logo.png" alt="Google Logo" className="google-icon" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )

}

export default App
