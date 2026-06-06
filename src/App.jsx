import AppRouter from "./routes/AppRouter.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App;
