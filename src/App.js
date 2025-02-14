import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
function App(){

  return (
    <Router>
      {/* <Login /> */}
      <Layout />
    </Router>
  )
}

export default App