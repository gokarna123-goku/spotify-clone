import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 flex flex-col">
          <h1 className="text-lg text-neutral-600 font-bold">
            This is main page.
          </h1>
        </div>
      </Router>
    </>
  )
}

export default App
