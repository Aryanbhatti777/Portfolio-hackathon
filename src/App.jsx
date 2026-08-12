import { Route, Routes } from "react-router"

import Main from "./pages/Main"
import ProjectDetails from "./componenets/ProjectDetails"
import Navbar from "./componenets/Navbar"
import Footer from "./componenets/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Main/>}/>
  
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
