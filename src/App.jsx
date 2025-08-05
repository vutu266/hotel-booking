import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {

  const location = useLocation().pathname.includes("owner");

  return (
    <>
      {!location && <Navbar />}
    </>
  )
} 

export default App