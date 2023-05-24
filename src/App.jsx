import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Header from "./components/header/Header"
import Contato from "./pages/Contato"
import Produto from "./pages/Produto"
function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/produto" element={<Produto/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
