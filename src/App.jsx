import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';


const App = () => {

  const location = useLocation().pathname.includes("owner");

  return (
    <div>
      {!location && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </div>
  )
} 

export default App