import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register, Login, Navbar, Form } from "./components"


function App() {

  return (
    <>
      <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
