import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'

function App() {


  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 flex flex-col p-2">
          <Main />
        </div>
      </Router>
    </>
  )
}

export default App
