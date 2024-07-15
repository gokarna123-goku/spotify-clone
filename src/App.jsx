import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main'
import Detail from './pages/detail/other/Detail'
import ArtistDetail from './pages/detail/artist/ArtistDetail'

function App() {


  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 flex flex-col p-2 overflow-hidden">
          <Routes>
            <Route exact path="/" element={<Main />} name="Main" />
            <Route exact path="/detail" element={<Detail />} name="Detail" />
            <Route exact path="/artist-detail" element={<ArtistDetail />} name="Artist Detail" />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
