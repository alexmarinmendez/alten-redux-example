import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../assets/styles/App.scss'
import Layout from "../components/Layout"
import Characters from "../containers/Characters"
import Favorites from "../containers/Favorites"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App