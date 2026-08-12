import { Route, Routes } from "react-router"

import Main from "./pages/Main"
import ProjectDetails from "./componenets/ProjectDetails"
import Navbar from "./componenets/Navbar"


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
    </>
  )
}

export default App
